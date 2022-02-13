<template>
    <div>
        <form class="row justify-content-around" @submit.prevent="createContact">
            <input class="me-1 mb-1 col-lg-3" required type="text" v-model="contact.name" id="name" placeholder="Nom">
            <input class="me-1 mb-1 col-lg-3" required type="text" v-model="contact.carac" id="carac" placeholder="Spécialité">
            <input class="me-1 mb-1 col-lg-3" required type="text" v-model="contact.role" id="role" placeholder="Rôle">
            <button class=' mt-2 ms-0 pt-2' type="submit">Créer</button>
        </form>
    </div>
</template>

<script>
import db from "../shared/db";

    export default {
        props:['contacts'],
        data(){
            return {
                contact: {
                    name: "",
                    carac: "",
                    role: "",
                }
            };
        },
        methods: {
            createContact(){
                db.create(this.contact)
                    .then((data)=>{
                        console.log(data);
                        this.$emit('created');
                        this.resetForm();
                    })
                    .catch(error=>console.error(error))
            },
            resetForm(){
                this.contact.name = '',
                this.contact.carac = '',
                this.contact.role = ''
            }
        }
    }
</script>

<style scoped>

button{
    border:none;
    padding: 5px;
    margin-left: 10px;
    background-color:salmon;
    color:darkslategrey;
    cursor: pointer;
    border-radius:5px;
}
button:hover{
    background-color: darkslategrey;
    color:salmon;
}
</style>