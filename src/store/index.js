import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api.js'
import axios from 'axios'

Vue.use(Vuex)

// const apiUrl = 'https://contactsapidemo.azurewebsites.net/api/contacts'

function actionMsg(commit,msg,code){
  commit('SHOW_ACTION_MSG',{
    showBtn:true,
    buttonMsg:msg,
    colorCode:code
  })
  setTimeout(()=>{
    commit('HIDE_ACTION_MSG',false)
  },2000)
}

export default new Vuex.Store({
  state: {
    contacts : [],
    states:[],
    contactFrequency:[],
    contactMethods:[],
    showActionMsg:false,
    btnActionMSg:'',
    colorCode:''
  },

  mutations: {
    LOAD_CONTACT(state,contacts){
      state.contacts = contacts
    },

    SET_CONTACTS(state,contacts){
      const updatedContacts = state.contacts.concat(contacts)
      state.contacts = updatedContacts
    },

    UPDATE_CONTACTS(state,contact){
      const index = state.contacts.findIndex(c => c.id === contact.id)
      state.contacts[index] = contact
    },

    REMOVE_CONTACT(state,contact){
      const index = state.contacts.findIndex(c => c.id === contact.id)
      state.contacts.splice(index,1)
    },

    SET_STATES(state,states){
      state.states = states
    },

    SET_CONTACT_FREQUENCY(state,contactFrequency){
      state.contactFrequency = contactFrequency
    },

    SET_CONTACT_METHODS(state,contactMethods){
      state.contactMethods = contactMethods
    },

    SHOW_ACTION_MSG(state,{showBtn,buttonMsg,colorCode}){
      state.showActionMsg = showBtn
      state.btnActionMSg = buttonMsg
      state.colorCode = colorCode
    },

    HIDE_ACTION_MSG(state,showBtn){
      state.showActionMsg = showBtn
    }
  },

  actions: {
    async loadAllContactData({commit}){
      const {data} = await Api().get()
      const contacts = await axios.get('https://contactsapidemo.azurewebsites.net/api/contacts')
      const {states,contact_frequency,preferred_contact_method} = data.data

      commit('SET_STATES',states)
      commit('SET_CONTACT_FREQUENCY',contact_frequency)
      commit('SET_CONTACT_METHODS',preferred_contact_method)
      commit('LOAD_CONTACT',contacts.data)
    },

    async addConatactAction({commit},contact){
      const newContact = await axios.post('https://contactsapidemo.azurewebsites.net/api/contacts',contact)
      commit('SET_CONTACTS',newContact.data)
      actionMsg(commit,`The contact "${contact.firstName}" has been created !`,'#22ac02') 
    },

    async updateContactAction({commit},contact){  
      commit('UPDATE_CONTACTS',contact)
      await axios.put(`https://contactsapidemo.azurewebsites.net/api/contacts/${contact.id}`,contact)
      actionMsg(commit,`The contact "${contact.firstName}" has been upadted !`,'#98ac02')    
    },

    async deleteContact({commit},contact){
      commit('REMOVE_CONTACT',contact)
      await axios.delete(`https://contactsapidemo.azurewebsites.net/api/contacts/${contact.id}`,contact)
      actionMsg(commit,`The contact "${contact.firstName}" has been deleted !`,'#d55d5d') 
    }
  },
})
