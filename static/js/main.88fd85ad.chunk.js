(this["webpackJsonpFullStack-Template"]=this["webpackJsonpFullStack-Template"]||[]).push([[0],{44:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var s=a(10),n=a.n(s),r=a(38),c=a.n(r),o=(a(44),a(45),a(48),a(49),a(50),a(51),a(52),a(13)),i=a(14),l=a(16),d=a(17),u=(a(53),a(0)),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).username=localStorage.username,s.userID=localStorage.userID,s}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark justify-content-end",children:[Object(u.jsx)("a",{href:"/home",className:"mb-0 h3 text-white font-weight-bold",children:"Product"}),Object(u.jsx)("a",{href:"/home",className:"mb-0 h3 font-weight-bold",children:Object(u.jsx)("font",{color:"#47eba9",children:"Name"})}),Object(u.jsx)("button",{className:"btn btn-primary btn-sm rounded ml-auto mr-1",onClick:function(){return e.props.history.push("/login")},children:"LOG OUT"})]}),Object(u.jsx)("nav",{className:"navbar bg-white",children:Object(u.jsx)("span",{className:"mb-0 h5 text-primary",children:"Home"})}),Object(u.jsx)("div",{className:"p-2 black container-fluid container-md",children:Object(u.jsx)("form",{className:"mb-1 w-60 mx-auto mb-auto black",children:Object(u.jsx)("header",{className:"p-1",children:Object(u.jsx)("font",{color:"#47eba9",children:Object(u.jsxs)("h3",{className:"text-center font-weight-bold",children:["Welcome, ",this.username,"!"]})})})})})]})}}]),a}(n.a.Component),b=a(11),j=a(18),h=a(4),f=a(8),p=a.n(f),x=a(22),O=a(2),g=a(19),v=function(){function e(){Object(o.a)(this,e),this.url="http://localhost:8000"}return Object(i.a)(e,[{key:"registerUser",value:function(e){var t=this;return new Promise((function(a,s){p.a.post("".concat(t.url,"/user/create"),e).then((function(e){a(e.data)})).catch((function(e){alert(e),s(e)}))}))}},{key:"verifyUser",value:function(e){var t=this;return new Promise((function(a,s){p.a.post("".concat(t.url,"/user/login"),e).then((function(e){a(e.data)})).catch((function(e){alert(e),s(e)}))}))}},{key:"userDetailsBody",value:function(e){var t=this;return new Promise((function(a,s){p.a.get("".concat(t.url,"/user/"),{params:e}).then((function(e){console.log(e),a(e.data)})).catch((function(e){alert(e),s(e)}))}))}},{key:"userDetailsParam",value:function(e){var t=this;return new Promise((function(a,s){p.a.get("".concat(t.url,"/user/").concat(e)).then((function(e){a(e.data)})).catch((function(e){alert(e),s(e)}))}))}},{key:"updateCreds",value:function(e){var t=this;return new Promise((function(a,s){p.a.put("".concat(t.url,"/user/"),e).then((function(e){a(e.data)})).catch((function(e){alert(e),s(e)}))}))}},{key:"updateEmail",value:function(e,t){var a=this;return new Promise((function(s,n){p.a.put("".concat(a.url,"/user/").concat(e,"/updateEmail"),t).then((function(e){s(e.data)})).catch((function(e){alert(e),n(e)}))}))}},{key:"deleteUser",value:function(e){var t=this;return new Promise((function(a,s){p.a.delete("".concat(t.url,"/user/").concat(e),t.config).then((function(e){return a(e.data)})),alert("User has been deleted")}))}}]),e}(),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),localStorage.setItem("username",null),localStorage.setItem("userID",null),(s=t.call(this,e)).login=new v,s.state={username:"",password:"",status:""},s.onLogin=s.onLogin.bind(Object(h.a)(s)),s.getUsername=s.getUsername.bind(Object(h.a)(s)),s.getPassword=s.getPassword.bind(Object(h.a)(s)),s.validLogin=s.validLogin.bind(Object(h.a)(s)),s.invalidLogin=s.invalidLogin.bind(Object(h.a)(s)),s}return Object(i.a)(a,[{key:"onLogin",value:function(){var e=this,t=this.state.password;t=Object(x.sha256)(this.state.password),console.log(this.login.verifyUser({username:this.state.username,password:t})),p.a.post("".concat(this.login.url,"/user/login"),{username:this.state.username,password:t}).then((function(t){0===t.data?e.invalidLogin():(console.log(t.data),e.validLogin(t.data))}))}},{key:"getUsername",value:function(e){var t=e.target.value;this.setState({username:t})}},{key:"getPassword",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"getUserID",value:function(){var e=Object(j.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.login.userDetailsBody({username:t});case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"validLogin",value:function(){var e=Object(j.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("username",t),e.next=3,this.getUserID(t);case 3:a=e.sent.userID,console.log(a),localStorage.setItem("userID",a),this.setState({status:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"invalidLogin",value:function(){alert("Wrong Username/Password"),this.setState({status:!1}),document.getElementById("loginInfo").reset()}},{key:"newAccount",value:function(){this.props.history.push("/NewAccount")}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",children:Object(u.jsx)("ul",{className:"navbar-nav",children:Object(u.jsxs)("li",{className:"nav-item",children:[Object(u.jsx)("span",{className:"mb-0 h4 text-white font-weight-bold",children:"Product"}),Object(u.jsx)("font",{color:"#47eba9",children:Object(u.jsx)("span",{className:"mb-0 h4 font-weight-bold",children:"Name"})})]})})}),Object(u.jsx)("div",{className:"black",children:Object(u.jsx)("div",{className:"p-4 container-fluid container-sm",children:Object(u.jsx)("div",{className:"p-1 card black mb-1 w-75 mx-auto text-center",children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{id:"loginInfo",children:[Object(u.jsx)("div",{className:"form-row",children:Object(u.jsxs)("div",{className:"form-group col font-weight-bold text-left",children:[Object(u.jsx)("font",{color:"#47eba9",children:Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",children:"Username"})}),Object(u.jsx)("div",{className:"username",onChange:this.getUsername,children:Object(u.jsx)("input",{autoComplete:"on",type:"text",className:"form-control mx-auto",name:"username",placeholder:"USERNAME"})})]})}),Object(u.jsx)("div",{className:"form-row",children:Object(u.jsxs)("div",{className:"form-group col font-weight-bold text-left",children:[Object(u.jsx)("font",{color:"#47eba9",children:Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",children:"Password"})}),Object(u.jsx)("div",{className:"password",onChange:this.getPassword,children:Object(u.jsx)("input",{autoComplete:"current-password",type:"password",className:"form-control mx-auto",name:"password",placeholder:"Password"})})]})}),Object(u.jsx)("div",{className:"form-row",children:Object(u.jsx)("div",{className:"form-group col text-left"})})]})}),Object(u.jsxs)("div",{className:"footer",children:[e.state.password?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-primary rounded",onClick:e.onLogin,children:"Log In"}),e.state.status?Object(u.jsx)(O.a,{to:"/home"}):Object(u.jsx)(O.a,{to:"/"})]}):Object(u.jsx)("button",{className:"btn btn-primary rounded button disabled",type:"button",children:"Log In"}),Object(u.jsx)("p",{}),Object(u.jsx)("font",{color:"#47eba9",children:Object(u.jsx)("p",{children:"OR"})}),Object(u.jsx)(g.b,{to:"/register",children:Object(u.jsx)("button",{className:"btn btn-dark rounded",children:"Create Account"})})]})]})})})})]})}}]),a}(n.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).login=new v,s.config={},s.state={email:"",username:"",password:"",confirmPassword:"",status:""},s.getEmail=s.getEmail.bind(Object(h.a)(s)),s.getUsername=s.getUsername.bind(Object(h.a)(s)),s.getPassword=s.getPassword.bind(Object(h.a)(s)),s.getConfirmPassword=s.getConfirmPassword.bind(Object(h.a)(s)),s.onRegister=s.onRegister.bind(Object(h.a)(s)),s}return Object(i.a)(a,[{key:"getEmail",value:function(e){this.setState({email:e.target.value})}},{key:"getUsername",value:function(e){this.setState({username:e.target.value}),localStorage.setItem("username",this.state.username)}},{key:"getPassword",value:function(e){this.setState({password:e.target.value})}},{key:"getConfirmPassword",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"onRegister",value:function(){var e=this,t=this.state;if(t.password!==t.confirmPassword)alert("Passwords do not match"),this.setState({status:!1}),document.getElementById("passwordV1").value="",document.getElementById("passwordV2").value="";else{this.setState({status:!0});var a=this.state.password;a=Object(x.sha256)(a);var s={email:this.state.email,password:a,username:this.state.username};p.a.post("".concat(this.login.url,"/user/create"),s).then((function(t){e.storeInfo(e.state.username)}))}}},{key:"getUserID",value:function(){var e=Object(j.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.login.userDetailsBody({username:t});case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"storeInfo",value:function(){var e=Object(j.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("username",t),e.next=3,this.getUserID(t);case 3:a=e.sent.userID,console.log(a),localStorage.setItem("userID",a),this.setState({status:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark justify-content-end",children:[Object(u.jsx)("a",{href:"/home",className:"mb-0 h3 text-white font-weight-bold",children:"Product"}),Object(u.jsx)("a",{href:"/home",className:"mb-0 h3 font-weight-bold",children:Object(u.jsx)("font",{color:"#47eba9",children:"Name"})}),Object(u.jsx)("button",{className:"btn btn-primary btn-sm rounded ml-auto mr-1",onClick:function(){return e.props.history.push("/login")},children:"Return"})]}),Object(u.jsx)("nav",{className:"navbar bg-white",children:Object(u.jsx)("span",{className:"mb-0 h5 text-primary",children:"Register"})}),Object(u.jsx)("div",{className:"p-3 container-fluid container-sm",children:Object(u.jsxs)("div",{className:"card text-center mb-1 w-80 mx-auto bg-dark",children:[Object(u.jsx)("div",{className:"jumbotron-fluid h-75 bg-dark text-white text-center",children:Object(u.jsx)("h4",{className:"p-4 card-title font-weight-bold",children:"Register"})}),Object(u.jsx)("div",{className:"bg-dark",children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("div",{className:"form-row",children:Object(u.jsxs)("div",{className:"form-group col text-left font-weight-bold",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",children:Object(u.jsx)("font",{color:"#47eba9",children:"Email"})}),Object(u.jsx)("div",{className:"email",onChange:this.getEmail,children:Object(u.jsx)("input",{name:"email",type:"email",autoComplete:"on",className:"form-control mx-auto",placeholder:"JDoe@email.com"})})]})}),Object(u.jsx)("div",{className:"form-row",children:Object(u.jsxs)("div",{className:"form-group col text-left font-weight-bold",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",children:Object(u.jsx)("font",{color:"#47eba9",children:"Username"})}),Object(u.jsx)("div",{className:"username",onChange:this.getUsername,children:Object(u.jsx)("input",{name:"username",type:"text",className:"form-control mx-auto",placeholder:"JDoe"})})]})}),Object(u.jsx)("div",{className:"form-row",children:Object(u.jsxs)("div",{className:"form-group col text-left font-weight-bold",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",children:Object(u.jsx)("font",{color:"#47eba9",children:"Password"})}),Object(u.jsx)("div",{className:"password",onChange:this.getPassword,children:Object(u.jsx)("input",{id:"passwordV1",autoComplete:"current-password",name:"password",type:"password",className:"form-control mx-auto",placeholder:"Password123"})})]})}),Object(u.jsx)("div",{className:"form-row",children:Object(u.jsxs)("div",{className:"form-group col text-left font-weight-bold",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",children:Object(u.jsx)("font",{color:"#47eba9",children:"Confirm Password"})}),Object(u.jsx)("div",{className:"password",onChange:this.getConfirmPassword,children:Object(u.jsx)("input",{id:"passwordV2",autoComplete:"current-password",name:"confirmPassword",type:"password",className:"form-control mx-auto",placeholder:"Password123"})})]})})]})}),Object(u.jsx)("div",{className:"footer",children:e.state.email&&e.state.username&&e.state.password&&e.state.confirmPassword?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-primary rounded",onClick:e.onRegister,children:"Complete Registration"}),e.state.status?Object(u.jsx)(O.a,{to:"/home"}):Object(u.jsx)(O.a,{to:"/register"})]}):Object(u.jsx)("button",{className:"btn btn-primary rounded button disabled",type:"button",children:"Register"})})]})})]})})]})}}]),a}(n.a.Component),y=function(e){return Object(u.jsx)("div",{className:"background1",children:Object(u.jsx)("div",{className:"layer",children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.b,{exact:!0,path:"/",component:w}),Object(u.jsx)(O.b,{exact:!0,path:"/register",component:N}),Object(u.jsx)(O.b,{exact:!0,path:"/home",component:m}),Object(u.jsx)(O.b,{exact:!0,path:"/login",component:w})]})})})})};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.88fd85ad.chunk.js.map