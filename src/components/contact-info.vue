<template>
    <tr>
        <td>{{contact.firstName}}</td>
        <td>{{contact.lastName}}</td>
        <td>{{contact.email}}</td>
        <td class="addressBox">{{ contact.address && contact.address.street && contact.address.street}}, {{contact.address && contact.address.city && contact.address.city}}, {{processedContact.address && processedContact.address.state && processedContact.address.state}}, {{contact.address && contact.address && contact.address.zip}}</td>
        <td>{{contact.phone}}</td>
        <td>{{processedContact.contactFrequency}}</td>
        <td>{{processedContact.preferredContactMethod}}</td>
        <td class="actions">
        <button class="btn" @click="deletePerson">DELETE</button>
            <router-link :to="{ path: `/contacts/${contact.id}/edit`}">
                <button class="btn editBtn">EDIT</button>
            </router-link>
        </td>
    </tr>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:{
            contact:{type:Object,default:() => {}}
        },

        computed:{
            ...mapState(['states','contactFrequency','contactMethods']),

            processedContact(){
                const processed = {
                    ...this.contact,
                    preferredContactMethod : this.findName(this.contactMethods,this.contact.preferredContactMethod),
                    contactFrequency : this.findName(this.contactFrequency,this.contact.contactFrequency),
                    address:{
                        ...this.contact.address,
                        state:this.states.find(s => s.enum === this.contact.address.state).name
                    }
                }

                return processed
            }
        },

        methods:{
            deletePerson(){
                // this.persons.splice(index, 1)
                this.$emit('deleteContact', this.contact)
            },

            findName(list,val){
                return list.find(obj => parseInt(obj.enum) === val).name
            },
        }
    }
</script>

<style  scoped>
    .addressBox{
        width:300px;
    }

    .actions{
        width: 220px;
    }
</style>