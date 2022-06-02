import { login } from '@/utils/store/authStoreFunctions';

const userLogin = async (req, res) => {
  const { email, password } = req.body.input.credentials;

  try {
    const { accessToken, uid } = await login(email, password, true);

    res.status(200).json({ accessToken, uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default userLogin;
