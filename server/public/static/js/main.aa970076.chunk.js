(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(36),o=a.n(s),l=(a(71),a(3)),c=a(1),i=a(2),u=a(6),m=a(5),d=a(7),g=a(26),h=a.n(g),p=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n){return t.service.post("/signup",{username:e,password:a,role:n}).then(function(e){return e.data})},this.login=function(e,a,n){return t.service.post("/login",{username:e,password:a,role:n}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin",{}).then(function(e){return e.data})};var a=h.a.create({baseURL:"https://auctionart.herokuapp.com/api",withCredentials:!0});this.service=a},b=(a(90),a(13)),f=a(8),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.role;a.service.signup(t,n,r).then(function(e){a.setState({username:"",password:"",role:"",Redirect:!0},function(){a.props.toggleSignup()})}).catch(function(e){a.setState(Object(l.a)({},a.state,{err:"fail signup"})),console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.state={username:"",password:"",role:"User",Redirect:!1},a.service=new p,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="Signup ";return t+=this.props.show?"show":"hide",r.a.createElement("div",{className:t},r.a.createElement("div",{className:"form-signup"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"rol"},"Tipo de usuario"),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"role",id:""},r.a.createElement("option",{value:"User"},"User"),r.a.createElement("option",{value:"Artist"},"Artist")),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Registrarse"}),this.state.err?r.a.createElement("div",{className:"signup-form"},r.a.createElement("p",null,"Error de registro!!!")):null),r.a.createElement(f.b,{to:"/"}," ")))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){console.log(e),e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.role;a.service.login(t,n,r).then(function(e){a.setState({username:"",password:"",role:"",Redirect:!0},function(){a.props.toggleLogin()})}).catch(function(e){a.setState(Object(l.a)({},a.state,{err:"fail login"})),console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;console.log(r,"<----"),a.setState(Object(b.a)({},n,r))},a.state={username:"",password:"",role:"User",Redirect:!1},a.service=new p,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="Login ";return t+=this.props.show?"show":"hide",r.a.createElement("div",{className:t},r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"rol"},"Tipo de usuario"),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"role",id:""},r.a.createElement("option",{value:"User"},"User"),r.a.createElement("option",{value:"Artist"},"Artist")),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Iniciar sesion"}),r.a.createElement("br",null),this.state.err?r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,"por favor registrese!!")):null),r.a.createElement(f.b,{to:"/signup"}," ")))}}]),t}(n.Component),O=a(14),S=function(){return r.a.createElement("div",null,r.a.createElement("video",{autoPlay:"autoplay",loop:"loop",id:"video_background",muted:!0},r.a.createElement("source",{src:"https://res.cloudinary.com/dqphzmuq1/video/upload/v1554364685/paintings/A0450_1507_H3_807_1163_Videvo.mp4",type:"video/mp4"})))},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={loggedInUser:null},a.service=new p,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(l.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.props.loggedInUser?r.a.createElement("main",{className:"container"},r.a.createElement("a",{class:"toggle-menu"},"\u2261"),r.a.createElement("div",{class:"menu row"},r.a.createElement("h1",{className:"title"},"Art & auction"),r.a.createElement(f.b,{className:"ref-obra",to:"/obras"},"Obras"),r.a.createElement("small",null,"Bienvenido: ",this.props.loggedInUser),r.a.createElement("br",null),r.a.createElement("ul",{className:"cerrar"},r.a.createElement("li",{id:"cerrar"},r.a.createElement("a",{className:"link-nav",onClick:this.props.logoutUser,variant:"outline-secondary"},"Cerar Sesion"))))):r.a.createElement("main",null,r.a.createElement("a",{class:"toggle-menu"},"\u2261"),r.a.createElement("div",{class:"menu"},r.a.createElement("h1",{className:"title"},"Art & auction"),r.a.createElement(f.b,{className:"ref-obra",to:"/obras"},"Obras"),r.a.createElement("ul",{className:"sesion"},r.a.createElement("li",null,r.a.createElement("a",{onClick:this.props.toggleLogin},"Iniciar Sesi\xf3n")),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.props.toggleSignup},"Registrate")))))}}]),t}(n.Component),j=a(27),N=a.n(j),I=function e(){var t=this;Object(c.a)(this,e),this.getObras=function(){return t.service.get("/obras").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.getObra=function(e){return t.service.get("artist-profile/".concat(e)).then(function(e){return e.data})},this.getObraSubasta=function(e){return t.service.get("/subasta/".concat(e)).then(function(e){return e.data})},this.postNewObra=function(e){return console.log("entra"),t.service.post("postobra",e).then(function(e){return console.log(e),e.data}).catch(function(e){return console.log(e)})},this.service=h.a.create({baseURL:"https://auctionart.herokuapp.com/api",withCredentials:!0})},k=a(65),y=a.n(k),C=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"artists-obras"},r.a.createElement("div",{className:"col-lg-6 profile-img cont-obras inf-artist",id:"artist-text"},r.a.createElement("h5",{className:"card-title"},e.username),r.a.createElement("p",null,"El se\xf1or ",e.username,' es una artista muy respetado en su pa\xeds. Su estilo realista est\xe1 influenciado por la obra de grandes maestros rusos del gupo "Los Itinerantes" y de otrso grandes maestros del barroco'),r.a.createElement(f.b,{className:"btn btn-sm btn-outline-dark",onClick:console.log(e),to:"/artist-profile/".concat(e._id)},"Perfil de artista")),r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{className:"row"},e.obras.map(function(e){return r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{className:"card card-obras"},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:"imagen -pintura"}),r.a.createElement("div",{className:"card-body"},r.a.createElement(f.b,{to:"/subasta/".concat(e._id)}," ",r.a.createElement(y.a,{variant:"outline-info"},"Subasta")))))})))))},U=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).getObraId=function(t){e.props.getObraId(t)},e.getArtists=function(){return e.serviceObras.getObras().then(function(t){console.log(t),e.setState({artists:t})})},e.state={artists:[],obraIdSelected:void 0},e.serviceObras=new I,e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getArtists()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container container-yalose"},r.a.createElement("h1",null,"Obras"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row card-container"},Array.isArray(this.state.artists)?this.state.artists.map(function(t){return r.a.createElement(C,Object.assign({key:t._id,sendId:e.sendMsg},t,{getObraId:e.getObraId}))}):null))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getObraId=function(e){a.setState(Object(l.a)({},a.state,{obraIdSelected:e}))},a.sendMsg=function(){a.socket.emit("new_message",{title:a.state.obra.title,user:a.props.User}),console.log("promise")},a.handleState=function(e){var t=e.target,n=t.name,r=t.value;a.setState({message:Object(l.a)({},a.state.coaster,Object(b.a)({},n,r))})},a.state={loggedInUser:a.props.User,obraIdSelected:void 0,obra:{},endpoint:"https://auctionart.herokuapp.com"},a.socket=N()(a.state.endpoint),a.serviceSubasta=new I,a.socket.on("new_message",function(e){console.log(e)}),a.socket.on("mensaje",function(e){console.log(e)}),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getSubastaObra",value:function(){var e=this;return this.serviceSubasta.getObraSubasta(this.props.match.params.id).then(function(t){return e.setState(Object(l.a)({},e.state,{obra:t}))})}},{key:"componentDidMount",value:function(){this.state.endpoint;this.getSubastaObra()}},{key:"render",value:function(){var e=this;return console.log(this.state.obra),this.props.User?(console.log("entra"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-8"},r.a.createElement("div",null,r.a.createElement("div",{className:"subasta-form"},r.a.createElement("h2",null,this.state.obra.title),r.a.createElement("img",{className:"subasta-img",src:this.state.obra.image}),r.a.createElement("br",null),r.a.createElement("strong",null,this.state.obra.a\u00f1o),r.a.createElement("br",null))),r.a.createElement("div",{className:"puja-tab"},r.a.createElement("form",{className:"form-puja"},r.a.createElement("input",{className:"input-puja",name:"puja",type:"text",placeholder:"introduzca su puja",onChange:function(t){return e.handleState(t)}})),r.a.createElement("button",{onClick:this.sendMsg},'"SEND"'))))):r.a.createElement("div",null,r.a.createElement("h1",{id:"title-subasta"},"NECESITAS INICIAR SESION INUTIL"))}}]),t}(n.Component),M=function(){function e(t){Object(c.a)(this,e),this.render=function(e){e.map(function(e,t){return'\n         <div className="msg" id="box-msg">\n\n         '})},this.socket=N()("https://auctionart.herokuapp.com"),this.socket.on("mensaje",function(e){console.log(e)})}return Object(i.a)(e,[{key:"sendMessage",value:function(e,t){console.log(e);console.log("Enviando mensaje: ".concat(e," del usuario ").concat(t)),this.socket.emit("new_message",{})}}]),e}(),A=a(15),_=a(38),x=a.n(_),R={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"40%"}};x.a.setAppElement("#root");var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).openModal=function(){a.setState({modalIsOpen:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.handleSate=function(e){var t=e.target,n=t.name,r=t.value;a.setState({obra:Object(l.a)({},a.state.obra,Object(b.a)({},n,r))})},a.handleFileUpload=function(e){var t=new FormData;t.append("obra",e.target.files[0]),a.service.postNewObra(t).then(function(e){a.setState({obra:Object(l.a)({},a.state.obra,{obra:e.secure_url})})}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.service.postNewObra(a.state.obra),a.setState({obra:[]}),a.closeModal()},a.state={modalIsOpen:!1,obra:[]},a.service=new I,a.openModal=a.openModal.bind(Object(A.a)(Object(A.a)(a))),a.closeModal=a.closeModal.bind(Object(A.a)(Object(A.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.openModal,className:"btn btn-add"},"Nueva obra"),r.a.createElement(x.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:R},r.a.createElement("h2",null,"Nueva obra"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Imagen"),r.a.createElement("input",{type:"file",className:"form-control",onChange:function(t){return e.handleFileUpload(t)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Crear"))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={profile:{}},a.serviceProfile=new I,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getProfile",value:function(){var e=this;return this.serviceProfile.getObra(this.props.match.params.id).then(function(t){return e.setState({profile:t})})}},{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container profile-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 inf-artist"},r.a.createElement("h1",null,this.state.profile.username),r.a.createElement("p",null,"El se\xf1or ",this.state.profile.username,' es una artista muy respetado en su pa\xeds. Su estilo realista est\xe1 influenciado por la obra de grandes maestros rusos del gupo "Los Itinerantes" y de otrso grandes maestros del barroco'),r.a.createElement(D,{addingImage:this.getProfile})),r.a.createElement("article",{className:"col-md-8 profile-art"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.state.profile.obras?this.state.profile.obras.map(function(e){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:e.image}))}):null)))))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getObraId=function(e){a.setState(Object(l.a)({},a.state,{obraIdSelected:e}))},a.getTheUser=function(e){a.setState({loggedInUser:e})},a.toggleLogin=function(){a.state.showSignup&&a.setState({showSignup:!a.state.showSignup}),a.setState({showLogin:!a.state.showLogin}),a.ceckLoggedin()},a.toggleSignup=function(){console.log("entra"),a.state.showLogin&&a.setState({showLogin:!a.state.showLogin}),a.setState({showSignup:!a.state.showSignup}),a.ceckLoggedin()},a.ceckLoggedin=function(){a.service.loggedin().then(function(e){e&&a.setState(Object(l.a)({},a.state,{loggedInUser:e.username}),function(){})}).catch(function(){a.setState(Object(l.a)({},a.state,{loggedInUser:null}))})},a.logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.sendMsg=function(){a.socket.sendMessage(a.state.obraIdSelected)},a.state={loggedInUser:!1,showLogin:!1,showSignup:!1,obraIdSelected:void 0},a.service=new p,a.socket=new M,a.ceckLoggedin(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(w,{toggleLogin:this.toggleLogin,toggleSignup:this.toggleSignup,logoutUser:this.logoutUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(v,{show:this.state.showLogin,toggleLogin:this.toggleLogin}),r.a.createElement("div",{className:"holaDan"}),r.a.createElement(E,{show:this.state.showSignup,toggleSignup:this.toggleSignup}),r.a.createElement("div",{className:"holaDan"}),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/artist-profile/:id",component:P}),r.a.createElement(O.a,{exact:!0,path:"/obras",render:function(){return r.a.createElement(U,{sendId:e.sendMsg,getObraId:e.getObraId})}}),r.a.createElement(O.a,{exact:!0,path:"/signup",component:E}),r.a.createElement(O.a,{exact:!0,path:"/login",component:v}),r.a.createElement(O.a,{exact:!0,path:"/",component:S}),r.a.createElement(O.a,{exact:!0,path:"/subasta/:id",render:function(t){return r.a.createElement(L,Object.assign({},t,{User:e.state.loggedInUser,getObraId:e.getObraId}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.a,null,r.a.createElement(F,null)),document.getElementById("root")),document.querySelector(".toggle-menu").onclick=function(e){e.preventDefault(),document.querySelector(".menu").classList.toggle("abierto")},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(142)},71:function(e,t,a){},90:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.aa970076.chunk.js.map