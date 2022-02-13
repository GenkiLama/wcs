<template>
    <header>
      <h1>
        <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
        Les Argonautes
      </h1>
    </header>

    <!-- Main section -->
    <main class="container mb-4">
      
      <!-- New member form -->
      <div class="row">
        <div class="col-6 offset-3 text-center">
          <h2 class="mb-4 mt-4 text-danger">Ajouter un(e) Argonaute</h2>
          <contactForm @created="getAllContacts"/>
        </div>
      </div>
      <!-- Member list -->
      <h2 class="text-center mt-4 mb-4 text-danger">Membres de l'équipage</h2>
      <section class="member-list">
        <contactList @deleteContact="deleteContact" :contacts="contacts" @saveEdit="saveEdit" />
      </section>
    </main>

<footer class="bg-danger pt-4 pb-2 mt-4 fixed-bottom">
  <p class="text-light">Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
</footer>
    

</template>

<script>

import contactForm from './components/contactForm.vue';
import contactList from './components/contactList.vue';
import db from "./shared/db";
//import { orderBy } from "@firebase/firestore"


export default {
  data() {
    return {
      contacts: []
    }
  },
        created(){
            this.getAllContacts();
        },
        methods: {
            getAllContacts() {
              db.read().then((snapshot) => {
              this.contacts = snapshot.docs;
              });
            },
            deleteContact(contact){
              db.delete(contact.id).then(()=>{
                this.getAllContacts();
              }).catch(error=>console.error(error))
            },
            saveEdit(editedContact){
              db.update(editedContact).then(()=>{
                this.getAllContacts();
              }).catch(error=>console.error(error));
            },
        },
  
  name: 'App',
  components: {
    contactForm,
    contactList,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 100px;
}

header {
  background: #f4f4f4;
  text-align: center;
  padding: 2em;
}

header img {
  max-width: 96px;
}

header h1 {
  font-size: 2.5em;
}


footer {
  text-align:center;
}

</style>
