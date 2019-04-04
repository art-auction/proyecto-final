import axios from 'axios'

class AuthService {
    constructor() {
      let service = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true
      });
      this.service = service;
    }
    signup = (username, password, role) => {
        return this.service.post('/signup', {username, password, role})
        .then(response => response.data)
      }
      login = (username, password, role) => {
        return this.service.post('/login', {username, password, role})
        .then(response => response.data)
      }
      logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }
    loggedin = () => {
      return this.service.get('/loggedin', {})
          .then(response => response.data)
  }
    

      
  }
  
  export default AuthService;