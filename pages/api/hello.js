// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const date = new Date();
  res.status(200).json({ timeOfPing: `${date}` });
}
