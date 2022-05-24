import admin from '@/utils/firebaseAdmin';

const getProfile = async (req, res) => {
  const { id } = req.body.input;

  try {
    const { uid, email, displayName } = await admin.auth().getUser(id);

    return res.status(200).json({
      id: uid,
      email,
      displayName,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ error: error.message, location: '/api/getProfile was failing' });
  }
};

export default getProfile;
