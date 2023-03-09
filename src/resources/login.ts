import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, getDatabase, ref } from 'firebase/database';

async function authUser(email: string, password: string) {
  const auth = getAuth();
  let uid = undefined;

  await signInWithEmailAndPassword(auth, email, password).then((value) => {
    uid = value.user.uid;
  });

  return uid;
}
async function findUserData(uid: string | undefined) {
  const db = getDatabase();
  const userRef = ref(db, "users/" + uid);

  let userType = false;

  await get(userRef).then((snapshot: { exists: () => any; val: () => any; }) => {
    if (snapshot.exists()) {
      userType = true;
    } else {
      console.log("email ou senha inválidos!");
    }
  });

  return userType;
}

export { authUser, findUserData };