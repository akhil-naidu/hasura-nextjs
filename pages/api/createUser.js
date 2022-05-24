import * as admin from 'firebase-admin';

const firebaseAdminConfig = {
  type: process.env.FB_TYPE,
  project_id: process.env.FB_PROJECT_ID,
  private_key_id: process.env.FB_PRIVATE_KEY_ID,
  private_key: process.env.FB_PRIVATE_KEY,
  client_email: process.env.FB_CLIENT_EMAIL,
  client_id: process.env.FB_CLIENT_ID,
  auth_uri: process.env.FB_AUTH_URI,
  token_uri: process.env.FB_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FB_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FB_CLIENT_CERT_URL,
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
  console.log('Initialized.');
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

const createUser = async (req, res) => {
  const { email, password, displayName } = req.body.input.credentials;

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

  return res.status(200).json({
    id: user.uid,
    email: user.email,
    displayName: user.displayName,
  });
  // return new Promise((resolve, reject) => {
  //   admin
  //     .auth()
  //     .createUser({
  //       email: email,
  //       password: password,
  //       displayName: displayName,
  //     })
  //     .then((user) => {
  //       admin
  //         .auth()
  // .setCustomUserClaims(user.uid, {
  //   'https://hasura.io/jwt/claims': {
  //     'x-hasura-allowed-roles': ['user'],
  //     'x-hasura-default-role': 'user',
  //     'x-hasura-user-id': user.uid,
  //   },
  // })
  //         .then(() => {
  //           res.status(200).json({
  //             id: user.uid,
  //             email: user.email,
  //             displayName: user.displayName,
  //           });
  //           resolve();
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //           res.status(201).json({ error: 'in second', message: error });
  //           resolve();
  //         });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       res.status(201).json({ error: 'in first', message: error });
  //       resolve();
  //     });
  // });
};

export default createUser;
