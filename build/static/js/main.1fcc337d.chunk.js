(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=a(64),h=a(66),d=a(65),b=a(8),f=a.n(b),v=a(12),E=a(63),y=a(29),g=a(17),N=a(13),C=a.n(N),O=(a(56),r.a.createContext()),j=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(g.a)({},e,{contacts:[t.payload].concat(Object(y.a)(e.contacts))});case"UPDATE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return j(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=O.Consumer,x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(e){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.email,c=t.phone,o=t.id,l=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body shadow-lg p-3 mb-3 bg-white border border-primary rounded"},r.a.createElement("h5",{className:"card-title"},a," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,o,s)})," ",r.a.createElement(E.a,{to:"contact/edit/".concat(o)},r.a.createElement("i",{className:"fas fa-user-edit",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item rounded"},"Email: ",n),r.a.createElement("li",{className:"list-group-item rounded"},"Phone: ",c)):null)})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=new Date,D=function(e){return e.getDate()<10?"0"+e.getDate():e.getDate()}(A),T=A.toLocaleTimeString(),P=["January","February","March","April","May","June","July","August","September","October","November","December"][A.getMonth()]+" "+D+", "+A.getFullYear()+" - "+T,M=function(e){var t=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3 mt-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item text-white-50"},P))),r.a.createElement("a",{href:"/",className:"navbar-brand ml-auto"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))))};M.defaultProps={branding:"Contact Manger"};var q=M,_=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))};var F=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))},I=a(14),J=a(27),L=a.n(J),U=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:L()("form-control form-control-sm",{"is-invalid":s}),placeholder:c,value:n,onChange:l,error:"true"}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};U.defaultProps={type:"text"};var B=U,W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",suite:"",errors:{}},a.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s=r.suite,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return i={name:c,email:o,phone:l,suite:s},e.next=14,C.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:m=e.sent,t({type:"ADD_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",suite:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3 bg-white"},r.a.createElement("div",{className:"card-header bg-primary text-white"},"Add Contact"),r.a.createElement("div",null,r.a.createElement("div",{className:"card-body border border-primary"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(B,{label:"Names",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(B,{label:"Emails",name:"email",placeholder:"Enter Email...",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(B,{label:"Phone",name:"phone",placeholder:"Enter Phone Number...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-outline-primary my-2 my-sm-0 btn-primary "},"Add Contact")))))})}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",suite:"",errors:{}},a.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,r.suite,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,C.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",suite:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3 bg-white"},r.a.createElement("div",{className:"card-header bg-primary text-white"},"Edit Contact"),r.a.createElement("div",null,r.a.createElement("div",{className:"card-body border border-primary"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(B,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(B,{label:"Email",name:"email",placeholder:"Enter Email...",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(B,{label:"Phone",name:"phone",placeholder:"Enter Phone Number...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-outline-primary my-2 my-sm-0 btn-primary "},"Update Contact")))))})}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/4").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),V=(a(59),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(p.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(q,{branding:"My Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:W}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:H}),r.a.createElement(d.a,{exact:!0,path:"/about/",component:_}),r.a.createElement(d.a,{exact:!0,path:"/test",component:R}),r.a.createElement(d.a,{component:F}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.1fcc337d.chunk.js.map