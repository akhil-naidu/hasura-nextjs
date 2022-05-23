import admin from '@/utils/firebaseAdmin';

const createUser = async (req, res) => {
  const { email, password, displayName } = req.body.input.credentials;

  console.log(admin);
  const user = await admin.auth().createUser({
    email: email,
    password: password,
    displayName: displayName,
  });

  await admin.auth().setCustomUserClaims(user.uid, {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': user.uid,
    },
  });

  res
    .status(200)
    .json({ id: user.uid, email: user.email, displayName: user.displayName });
};

export default createUser;
