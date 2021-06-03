import firebase from 'firebase'

var firebaseConfig = {

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {projectStorage , projectFirestore , timestamp , provider , auth}
