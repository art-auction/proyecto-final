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
    handleUpload = theFile =>{
        return this.service.post("/upload", theFile)
        .then(res=>res.data)
        .catch(err=>console.log(err))
    }
    postNewObra = newobra =>{
        return this.service.post("/postImage/create", newobra)
        .then(response =>response.data)
        .catch(err=>console.log(err))
    }

    

}

export default Apiservice