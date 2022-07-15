export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.input.id);

    res.status(200).json({ friend: req.body.input.id });
    return;
  }
}
