<template>
    <contactForm :newContactData="getContact" btnText="Update Contact" :btcActionMethod="updateContact"/>
</template>

<script>
    import {mapState} from 'vuex'
    import contactForm from '@/components/contact-form'

    export default {
        components:{
            contactForm
        },

        computed:{
            ...mapState(['contacts','states','contactFrequency','contactMethods']),

            getContact(){
                const contact =  this.contacts.find(c => c.id === this.$route.params.id) 
                return{
                    ...contact,
                    preferredContactMethod:this.setContact(this.contactMethods,contact.preferredContactMethod),
                    contactFrequency:this.setContact(this.contactFrequency,contact.contactFrequency),
                    address:{
                        ...contact.address,
                        state:this.setContact(this.states,parseInt(contact.address.state))
                    } || {address:{},preferredContactMethod:'',contactFrequency:''}
                }
            },
        },

        methods:{
            setContact(list,val){
                return list.find(c=>parseInt(c.enum) === val).name
            },

            findEnum(list,val){
                return list.find(obj => obj.name === val).enum
            },

            updateContact(){
                const processedData = {
                    ...this.getContact,
                    preferredContactMethod : parseInt(this.findEnum(this.contactMethods,this.getContact.preferredContactMethod)),
                    contactFrequency : parseInt(this.findEnum(this.contactFrequency,this.getContact.contactFrequency)),
                    address:{
                        ...this.getContact.address,
                        state:this.findEnum(this.states,this.getContact.address.state)
                    }
                }
                this.$store.dispatch('updateContactAction',processedData)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>