export default function handler(req, res) {
  console.log(req.body.id);
  res.status(200).json({ friend: req.body.id });
}
