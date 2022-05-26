import { login } from '@/utils/context/loginFunctions';

const userLogin = async (req, res) => {
  const { email, password } = req.body.input.credentials;

  try {
    const { accessToken } = await login(email, password);

    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default userLogin;
