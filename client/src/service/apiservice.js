import axios from 'axios';

class Apiservice {

    constructor(){
       
        this.service = axios.create({
            baseURL:"http://localhost:5000/api",
        })
    }

    getObras = () => {
        return this.service.get("/obras")
        .then(response => response.data)
    }
    getObra = idObra =>{
    return this.service.get(`artist-profile/${idObra}`)
    .then(response => response.data)
    }

}

export default Apiservice