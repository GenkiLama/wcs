import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = firebase.initializeApp(config);
const Firestore = App.firestore();
Firestore.settings({timestampsInSnapshots: true})



export default {
    create(contact){
        return Firestore.collection('contacts').add(contact);
    },
    read(){
        return Firestore.collection('contacts').orderBy("name","asc").get();
    },
    update(contact){
        return Firestore.collection('contacts').doc(contact.id).update(contact);
    },
    delete(id) {
        return Firestore.collection('contacts').doc(id).delete();
      },
}