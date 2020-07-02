<template>
  <contactForm :newContactData="newContactData" btnText="Create Contact" :btcActionMethod="createNewContact"/>
</template>

<script>
  import {mapState} from 'vuex'
  import contactForm from '@/components/contact-form'

  export default {
    components:{
      contactForm
    },

    data() {
      return {
        newContactData: {address:{}}
      }
    },

    computed:{
        ...mapState(['states','contactFrequency','contactMethods'])
    },

    methods:{
        findEnum(list,val){
            return list.find(obj => obj.name === val).enum
        },

        createNewContact(){
            const newContact = {
                ...this.newContactData,
                id:(Math.random() * 500).toFixed(),
                preferredContactMethod : parseInt(this.findEnum(this.contactMethods,this.newContactData.preferredContactMethod)),
                contactFrequency : parseInt(this.findEnum(this.contactFrequency,this.newContactData.contactFrequency)),
                address:{
                    ...this.newContactData.address,
                    state:this.findEnum(this.states,this.newContactData.address.state)
                }
            }

            this.$store.dispatch('addConatactAction',newContact)
        }
    }
  }
</script>

<style >
  
</style>