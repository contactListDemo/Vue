import axios from 'axios'

export default ()=>{
    const token = '$2b$10$5FEZQ5WTTgqtmC5JT1Ao8uDMrNG4uh650rSJ6IESnfzFzKP0jZ5TS'
    return axios.create({
        baseURL:`https://api.jsonbin.io/b/5efd84110bab551d2b6a82af`,
        // baseURL:'https://contactsapidemo.azurewebsites.net/api/contacts',
        withCredentials:false,
        headers:{
            Accept:"application/json",
            "secret-key":token
        }
    })
}