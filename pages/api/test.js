export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('without parsing', req.body);

    res.status(200).json({ friend: req.body.id });
    return;
  }
}
