export default function handler(req, res) {
  if (req.method !== 'POST') {
    const body = JSON.parse(req.body);
    console.log('without parsing', req.body);
    console.log('with parsing', body);
    res.status(200).json({ friend: req.body.id ?? body.id });
    return;
  }
}
