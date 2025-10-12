import crypto from 'node:crypto'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, name } = req.body || {}
  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  if (!API_KEY || !API_SERVER || !AUDIENCE_ID) {
    return res.status(500).json({ error: 'Missing Mailchimp env vars' })
  }

  try {
    const subscriberHash = crypto
      .createHash('md5')
      .update(email.trim().toLowerCase())
      .digest('hex')

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`

    const result = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `apikey ${API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        merge_fields: { FNAME: name || '' },
      }),
    })

    const data = await result.json()

    if (!result.ok) {
      return res.status(result.status).json({ error: data.title || 'Mailchimp error' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
}
