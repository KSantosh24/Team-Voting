import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCC7Iy_UcOYI8AnI94qgXwxh47XoJtJcKo",
    authDomain: "voting-app-ce51f.firebaseapp.com",
    projectId: "voting-app-ce51f",
    storageBucket: "voting-app-ce51f.appspot.com",
    messagingSenderId: "754967143528",
    appId: "1:754967143528:web:8addbb2f02190c1fd1c7dd",
    measurementId: "G-7NML9Y4993"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();