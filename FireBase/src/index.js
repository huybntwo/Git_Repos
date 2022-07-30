import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where, orderBy,
  serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'
import{ 
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAksnoiqbRuh0tAmWWPR_oMwBjI1Je2HHM",
  authDomain: "tutfirebase-80c23.firebaseapp.com",
  projectId: "tutfirebase-80c23",
  storageBucket: "tutfirebase-80c23.appspot.com",
  messagingSenderId: "554554244320",
  appId: "1:554554244320:web:1b8c0c146a7fe27115e485",
  measurementId: "G-CC1DMB6VK3"
};

// const cafeList = document.querySelector('#cafe-list');
// const form = document.querySelector('add-cafe-form');
// // create element & render cafe
// function renderCafe(doc){
//   let li = document.createElement('li');
//   let name = document.createElement('span');
//   let city = document.createElement('span');
//   let cross = document.createElement('div');
//   //assign data-id = doc.id
//   li.setAttribute('data-id', doc.id);
//   name.textContent = doc.data().name;
//   city.textContent = doc.data().city;
//   cross.textContent = 'x';

//   li.appendChild(name);
//   li.appendChild(city);
//   li.appendChild(cross);

//   cafeList.appendChild(li);

  // // deleting data
  // cross.addEventListener('click', (e) => {
  //     e.stopPropagation();
  //     //get doc.id
  //     let id = e.target.parentElement.getAttribute('data-id');
  //     db.collection('cafes').doc(id).delete();
  // });
// }

// // getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//       renderCafe(doc);
//   });
// });
// db.collection('cafes').where('city','==','Da Nang').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//       renderCafe(doc);
//   });
// });

// // saving data
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('cafes').add({
//       name: form.name.value,
//       city: form.city.value
//   });
//   form.name.value = '';
//   form.city.value = '';
// });

// // real-time listener
// db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
//   let changes = snapshot.docChanges();
//   changes.forEach(change => {
//       console.log(change.doc.data());
//       if(change.type == 'added'){
//           renderCafe(change.doc);
//       } else if (change.type == 'removed'){
//           let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
//           cafeList.removeChild(li);
//       }
//   });
// });



// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth();
// collection ref
const colRef = collection(db, 'cafes')
//queries, replace q to colRef in onSnapshot()
//const q = query(colRef, where("name","==","Huybn2"), orderBy('createAt','asc'));
const q = query(colRef, orderBy('createAt','asc'));

// get real time collection data\
//will recall anytime have change(addUser, deleteUser)/
//response immediately to your website
const unsubCol = onSnapshot(colRef, (snapshot) => {
    let cafes = []
    snapshot.docs.forEach(doc => {
      cafes.push({ ...doc.data(), id: doc.id });
      //renderCafe(doc);
    })
    console.log(cafes)
})

//adding documents
const addUSer = document.querySelector('.add')
addUSer.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    name: addUSer.name.value,
    city: addUSer.city.value,
    //calculate the interval, created this doc
    createAt: serverTimestamp()
  })
  .then(() => {
    //reset form
    addUSer.reset()
  })
})

//deleting documents
const deleteUser =  document.querySelector('.delete');
deleteUser.addEventListener('submit',e => {
  e.preventDefault()
  //get the id of doc from input form and validate to doc in firebase
  const docRef = doc(db,'cafes', deleteUser.id.value)
  //delete doc in firebase
  deleteDoc(docRef)
  .then(() => {
    //reset form
    deleteUser.reset();
  })
})
//fetching a single doc by using getDoc
const docRef = doc(db, 'cafes', 'FXa2PbvFKcgUA10MeENI');
getDoc(docRef)
.then(doc => {
  console.log(doc.data(), doc.id)
})

const unsubDoc = onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
})
//updating documents
const updateUser = document.querySelector('.update');
updateUser.addEventListener('submit',e => {
  e.preventDefault()
  //get the id of doc from input form and validate to doc in firebase
  const docRef = doc(db,'cafes', updateUser.id.value)
  updateDoc(docRef,{
    name:'name updated'

  })
  .then(() => {
    updateUser.reset();
  })
})

//sign up
const signupUser = document.querySelector('.signup');
signupUser.addEventListener('submit',e => {
  e.preventDefault()

  const email = signupUser.email.value
  const password = signupUser.password.value

  createUserWithEmailAndPassword(auth, email, password)
  .then((cred) => {
    console.log('user created: ', cred.user)
    signupUser.reset()
  })
  .catch((err) => {
    console.log(err.message)
  })

})
//login
const loginUser = document.querySelector('.login');
loginUser.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginUser.email.value
  const password = loginUser.password.value

  signInWithEmailAndPassword(auth, email, password)
  .then((cred) => {
    //console.log('user log in: ', cred.user)
    //loginUser.reset()
  })
  .catch((err) => {
    console.log(err.message)
  })
})
//logout
const logoutUser = document.querySelector('.logout');
logoutUser.addEventListener('click', ()=> {
  signOut(auth)
  .then(() => {
    //console.log('the user signed out')
  })
  .catch((err) => {
    console.log(err.message)
  })

})
//subscribing to auth changes(login logout, signup)
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('user status changes: ', user);
})
//unsubcribe from changes (auth & db)
const unsubUser = document.querySelector('.unsub');
unsubUser.addEventListener('click', () => {
  console.log('unsubcribing')
  unsubCol();
  unsubDoc();
  unsubAuth();
})