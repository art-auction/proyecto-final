import axios from 'axios';

class Apiservice {

    constructor(){
       
        this.service = axios.create({
            baseURL:"http://localhost:5000/api",
        })
    }

    getObra = () => {
        return this.service.get("/obras")
        .then(response => response.data)
    }

}

export default Apiservice