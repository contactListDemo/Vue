<template>
    <form class="createContactForm">
        <div class="createContectFields">
        <div class="field">
            <label for="fname" class="label">First Name</label>
            <input type="text" id="fname" class="input-text" v-model="newContactData.firstName"/>
        </div>

        <div class="field">
            <label for="lname" class="label">Last Name</label>
            <input type="text" id="lname" class="input-text" v-model="newContactData.lastName"/>
        </div>

        <div class="field">
            <label for="email" class="label">Email</label>
            <input type="text" class="input-text" placeholder="email" v-model="newContactData.email"/>
        </div>

        <div class="field">
            <label class="label">Phone Number</label>
            <input type="number" id="ph" class="input-number" v-model="newContactData.phone"/>
        </div>
        
        <div class="field adress-field">
            <label for="address" class="label">Address</label>
            <div class="addressInfo">
            <div class="address-field"><input type="text" class="input-text" placeholder="Street" v-model="newContactData.address.street"/></div>
            <div class="address-field"><input type="text" class="input-text" placeholder="City" v-model="newContactData.address.city"/></div>
            <div class="address-field"><select name="State" class="select-box" v-model="newContactData.address.state">
                <option value="Select State">Select State</option>
                <option :value="state.name" v-for="(state,i) in states" :key="i">{{state.name}}</option>
            </select></div>
            <div class="address-field"><input type="number" class="input-text" placeholder="ZipCode" v-model="newContactData.address.zip"/></div>
            </div>
        </div>

        <div class="field">
            <label class="label">Contact Frequency</label>
            <select name="State" class="select-box" v-model="newContactData.contactFrequency">
            <option :value="frequency.name" v-for="(frequency,i) in contactFrequency" :key="i">{{frequency.name}}</option>
            </select>
        </div>

        <div class="field">
            <label class="label">Preferred Contact Method</label>
            <select name="State" class="select-box" v-model="newContactData.preferredContactMethod">
            <option :value="method.name" v-for="(method,i) in contactMethods" :key="i">{{method.name}}</option>
            </select>
        </div>

        </div>

        <div class="field">
            <button class="createContactBtn" @click.prevent="btcActionMethod">{{btnText}}</button>
        </div>
    </form>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:{
            newContactData: {type:Object,default:()=>{}},
            btnText: {type:String,default:''},
            btcActionMethod:{type:Function}
        },

        computed:{
            ...mapState(['states','contactFrequency','contactMethods'])
        },
    }
</script>

<style scoped>
    .createContactForm{
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
  }

  .createContectFields{
    display: flex;
    flex-wrap: wrap;
  }

  .field{
    margin-bottom:1rem ;
    width: 50%;
    padding: 5px;
  }

  .label{
    font-weight: bold;
    font-size: 15px;
    display: block;
    padding-bottom: 0.5rem;
  }

  .input-text,.input-number{
    padding: 10px;
    width:100%;
  }

  .createContactBtn{
    background: #42b983;
    border: 0;
    color: #fff;
    text-transform: uppercase;
    padding: 15px 20px;
    font-weight: bold;
  }

  .adress-field{
    width: 100%;
    padding: 0;
  }

  .select-box{
    width: 100%;
    padding: 10px;
  }

  .addressInfo input,.addressInfo select{
    margin-bottom: 1rem;
  }

  .addressInfo{
    display: flex;
    flex-wrap: wrap;
  }

  .address-field{
    width: 50%;
    padding: 5px;
  }
</style>