(this["webpackJsonpgithub-cards"]=this["webpackJsonpgithub-cards"]||[]).push([[0],{30:function(e,t,a){e.exports=a(64)},35:function(e,t,a){},37:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(25),s=a.n(o);a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(29),i=a(14),u=a.n(i),l=a(26),m=a(8),d=a(9),f=a(11),p=a(10),h=(a(37),a(27)),b=a.n(h).a.initializeApp({apiKey:"AIzaSyA2qcSTBSUWVon5Dwsqz5gjvgszAFKqyGI",authDomain:"githubcards-cb821.firebaseapp.com",databaseURL:"https://githubcards-cb821.firebaseio.com",projectId:"githubcards-cb821",storageBucket:"githubcards-cb821.appspot.com",messagingSenderId:"332964156361",appId:"1:332964156361:web:5f296b43feef8836b4ce18",measurementId:"G-L3R32GKNQH"}).database(),v=a(28),g=a.n(v),y=[],w=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).deleteData=function(){e.props.deleteData(e.props.login)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"github-profile"},r.a.createElement("img",{src:e.avatar_url,alt:e.name}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"company"}," ",e.company),r.a.createElement("button",{onClick:this.deleteData},"Remove")))}}]),a}(r.a.Component),j=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={dataReady:!1,profiles:e.props.profiles},e.deleteData=function(t){e.state.profiles.map((function(e,a){return e.login.toLowerCase()===t.toLowerCase()?y.splice(a,1):{}})),b.ref("githubProfiles/"+t).remove(),e.setState((function(e){return{profiles:y}}))},e.removeUser=function(){console.log("click")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.ref("/githubProfiles").on("value",(function(t){var a=t.val()?t.val():{};Object.entries(a).map((function(e){return y.some((function(t){return t.login.toLowerCase()===e[1].login.toLowerCase()}))?{}:y.push(e[1])})),e.setState({dataReady:!0})}))}},{key:"render",value:function(){var e=this;return this.state.dataReady?this.state.profiles.map((function(t,a){return r.a.createElement(w,Object.assign({deleteData:e.deleteData,removeUser:e.removeUser,key:a},t))})):r.a.createElement("div",{className:"spinner"},r.a.createElement("span",{className:"spinner-inner-1"}),r.a.createElement("span",{className:"spinner-inner-2"}),r.a.createElement("span",{className:"spinner-inner-3"}))}}]),a}(r.a.Component),E=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userName:"",addData:""},e.handleSubmit=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b.goOnline(),a.preventDefault(),y.some((function(t){return t.login.toLowerCase()===e.state.userName.toLowerCase()}))){t.next=19;break}return e.setState((function(t){return{addData:"fetching ".concat(e.state.userName)}})),n=void 0,t.prev=5,t.next=8,g.a.get("https://api.github.com/users/".concat(e.state.userName));case 8:n=t.sent,e.props.onSubmit(n.data),b.ref("/githubProfiles").child(n.data.login).set(n.data),e.setState((function(t){return{addData:"successfully fetched ".concat(e.state.userName)}})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),e.setState((function(t){return{addData:"no user found with user id ".concat(e.state.userName)}}));case 17:t.next=20;break;case 19:e.setState((function(e){return{addData:"user already found"}}));case 20:setTimeout((function(){return e.setState((function(e){return{addData:""}}))}),8e3);case 21:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.userName,placeholder:"GitHub Username",onChange:function(t){return e.setState({userName:t.target.value})},required:!0}),r.a.createElement("button",null," Add Dev "),r.a.createElement("div",{className:"message"},this.state.addData))}}]),a}(r.a.Component),N=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={profiles:y},e.addNewProfile=function(t){e.state.profiles.some((function(e){return e.login===t.login}))||e.setState((function(e){return{profiles:[].concat(Object(c.a)(e.profiles),[t])}}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},this.props.title),r.a.createElement(E,{onSubmit:this.addNewProfile}),r.a.createElement(j,{profiles:this.state.profiles}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,{title:"Github Profile Cards"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.34d74268.chunk.js.map