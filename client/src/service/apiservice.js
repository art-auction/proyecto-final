import axios from 'axios';

class Apiservice {

    constructor(){
       
        this.service = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            withCredentials:true
        })
    }

    getObras = () => {
        return this.service.get("/obras")
        .then(response => {
            return response.data})
        .catch((err) => console.log(err))
    }
    getObra = idObra =>{
    return this.service.get(`artist-profile/${idObra}`)
    .then(response => response.data)
    }
    getObraSubasta = idObraSubasta=>{
        return this.service.get(`/subasta/${idObraSubasta}`)
        .then(response => response.data)
    }

    postNewObra = newobra =>{
        console.log("entra")
        return this.service.post("postobra", newobra)
        .then(response =>{
            console.log(response)
            return response.data})
        .catch(err=>console.log(err))
    }
    postPujas = (newpuja, idpuja) =>{
        console.log(newpuja)
        return this.service.post(`postpuja/${idpuja}`, newpuja)
        .then(response =>{
            console.log(response)
            return response.data})
            .catch(err =>console.log(err))
 
    }

    

}

export default Apiservice