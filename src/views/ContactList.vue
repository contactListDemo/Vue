<template>
  <div class="home">
    <table class="personTable">
      <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Contact Frequency</th> 
            <th>Preffered Contact Method</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          <Contact v-for="(contact,index) in contacts" :key="index" :contact="contact" @deleteContact="deleteContact"/>
        </tbody>
    </table>
  </div>
</template>

<script>
import Contact from '@/components/contact-info'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    Contact
  },

  data() {
    return {
      personInfo: {}
    }
  },

  methods:{
    deleteContact(contact){
      this.$store.dispatch('deleteContact',contact)
    }
  },

  computed:{
    ...mapState(['contacts'])
  },
}
</script>

<style>
  a{
    color:#000
  }

  .home{
    max-width: 1280px;
    margin: 5rem auto;
  }

  .personTable{
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    color: #4d4d4d;
  }

  thead{
    background: #eee;
    background-image: linear-gradient(#eee, lightgrey);
  }

  .personTable td, .personTable th {
    padding: 10px;
    text-transform: capitalize;
    border-bottom: 1px solid #ededed;
  }

  .personTable th{
    text-transform: uppercase;
    font-size: 13px;
  }

  .personTable tbody tr:hover{
    background: #eee;
    cursor: pointer;
  }

  .btn{
    background-image: linear-gradient(#eee, lightgrey);
    border: 0;
    padding: 7px 12px;
    cursor: pointer;
  }

  .editBtn{
    margin-left:0.5rem ;
  }

  .addPersonForm{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .addPersonForm input{
    padding: 5px;
  }
</style>
