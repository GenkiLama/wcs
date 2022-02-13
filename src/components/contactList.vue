<template>
    <div class="row">
        <contactDetails class="col-lg-4 col-md-6" 
        :contact="contact" v-for="contact in contacts" 
        :key="contact.data().id" 
        @saveEdit="saveEdit" 
        @deleteContact="deleteContact"/>
    </div>
</template>

<script>

import contactDetails from './contactDetails.vue';

    export default {
       props:['contacts'],
       components: {
           contactDetails,
       },
       methods: {
           deleteContact(contact){
               this.$emit('deleteContact', contact);
           },
           saveEdit(editedContact){
               this.$emit('saveEdit', editedContact);
           }
       }
    }
</script>

<style  scoped>

</style>