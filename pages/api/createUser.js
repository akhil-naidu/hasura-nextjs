const createUser = (req, res) => {
  res
    .status(200)
    .json({ id: 2, email: 'itachi@naruto.com', displayName: 'Itachi Uchiha' });
};

export default createUser;
