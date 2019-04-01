import axios from 'axios';

class Apiservice {

    constructor(){
       
        this.service = axios.create({
            baseURL:"http://localhost:5000/api",
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

    postNewObra = newobra =>{
        console.log("entra")
        return this.service.post("postobra", newobra)
        .then(response =>{
            console.log(response)
            return response.data})
        .catch(err=>console.log(err))
    }

    

}

export default Apiservice