<template>
    <div>
            <div v-if="!isInEditMode" class="card mb-2 ms-auto me-auto" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" > {{ contact.data().name }} </h5>
                    <h6 class="card-subtitle mb-2 text-muted"> {{ contact.data().carac }} </h6>
                    <p class="card-text"> {{ contact.data().role }} </p>
                    <button @click="editContact" class="btn btn-warning me-2">Modifier</button>
                    <button @click="deleteContact" class="btn btn-danger">Effacer</button>
                </div>
            </div>
            <div v-if="isInEditMode" class="card mb-2 ms-auto me-auto" style="width: 18rem;">
                <div class="card-body">
                    <input class="mb-1" type='text' v-model="contactCopy.name" placeholder="Nom">
                    <input class="mb-1" type="text" v-model="contactCopy.carac" placeholder="Carac">
                    <input class="mb-1" type="text" v-model="contactCopy.role" placeholder="Role">
                    <button @click="saveEdit" class="btn btn-success me-2">Confirmer</button>
                    <button @click="cancelEdit" class="btn btn-danger">Annuler</button>
                </div>
            </div>
    </div>
</template>

<script>

    export default {
        props: ['contact'],
        data(){
            return {
                contactCopy: {},
                isInEditMode: false,
            };
        },
        methods: {
            editContact(){
                const { name, carac, role } = this.contact.data();

                this.contactCopy = {
                    id: this.contact.id,
                    name,
                    carac,
                    role
                };
                this.isInEditMode = true;
            },
            saveEdit(){
                this.$emit('saveEdit', this.contactCopy);
                this.isInEditMode = false;
            },
            cancelEdit(){
                this.isInEditMode = false;
            },
            deleteContact(){
                this.$emit('deleteContact', this.contact)
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>