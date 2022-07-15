const sendMail = (req, res) => {
  const { from, to, subject, html } = req.body;

  // the code ran,
  console.log({ from, to, subject, html });

  res.status(200).json({ success: true, message: 'sent' });
};

export default sendMail;
