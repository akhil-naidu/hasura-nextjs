const createUser = (req, res) => {
  const { email, password, displayName } = req.body.input.credentials;
  res.status(200).json({ id: 2, email: email, displayName: displayName });
};

export default createUser;
