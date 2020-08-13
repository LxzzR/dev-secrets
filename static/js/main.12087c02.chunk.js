(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(12),l=a.n(r),o=(a(19),a(13)),i=a(2),c=a(3),m=a(5),u=a(4),p=a(7),d=a.n(p);a(21);d.a.initializeApp({apiKey:"AIzaSyAv4yn5_YF4yWXC08mhsQsgZHzneHpk3mQ",authDomain:"lizzproject5.firebaseapp.com",databaseURL:"https://lizzproject5.firebaseio.com",projectId:"lizzproject5",storageBucket:"lizzproject5.appspot.com",messagingSenderId:"161316336238",appId:"1:161316336238:web:361db54da2709a17cbac7f",measurementId:"G-7Z18S98M76"});var h=d.a,g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInput=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.displayMessage(e.state.inputValue),e.setState({inputValue:""})},e.state={inputValue:""},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"messageForm",action:"/",onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"message"},"Leave your message here:"),n.a.createElement("textarea",{type:"text",id:"message",placeholder:"Your message here...",minLength:"5",onChange:this.handleInput,value:this.state.inputValue,required:!0}),n.a.createElement("div",{className:"btnWrapper"},n.a.createElement("button",{type:"button",onClick:this.props.displayPrompts},"Need a prompt?"),n.a.createElement("button",{type:"submit",className:"postMsg"},"Post Message"),n.a.createElement("button",{type:"button",className:"showSecrets",onClick:this.props.handleShowMsgs},"Just take me to the secrets..")))}}]),a}(s.Component),b=function(e){var t=e.displayMessage,a=e.displayPrompts,s=e.handleShowMsgs;return n.a.createElement("header",null,n.a.createElement("div",{className:"pageWrapper"},n.a.createElement("div",{className:"headingWrapper"},n.a.createElement("h1",null,n.a.createElement("span",null,"<"),"Dev Secrets",n.a.createElement("span",null,"\u2044>"))),n.a.createElement("div",{className:"intro"},n.a.createElement("p",null,'The antidote to imposter syndrome is talking about it and knowing that you\'re not alone. Dev Secrets is an anonymous message board for devs inspired by "Post Secret".'," "),n.a.createElement("p",null,"Leave an anonymous message to inspire other devs or unload some stress, then take a peak into the inner world of other coders who are just like you.")),n.a.createElement(g,{displayMessage:t,displayPrompts:function(){return a(!0)},handleShowMsgs:s})))},f=function(e){var t=e.hidePrompts;return n.a.createElement("section",{className:"prompts",tabIndex:"0",onClick:function(){return t(!1)}},n.a.createElement("div",{className:"promptsModal"},n.a.createElement("h2",null,"Message Prompts"),n.a.createElement("ul",null,n.a.createElement("li",null,"What are your dev + career related fears?"),n.a.createElement("li",null,"What advice can you share for other developers?"),n.a.createElement("li",null,"Tell us something about your dev journey no one knows."),n.a.createElement("li",null,"What are you most proud of as a developer?")),n.a.createElement("button",{type:"button",className:"backButton",onClick:function(){return t(!1)}},"Back"),n.a.createElement("button",{className:"faBack","aria-label":"go back",onClick:function(){return t(!1)}},n.a.createElement("i",{className:"far fa-times-circle"}))))};var v=function(e){var t=e.message,a=e.className,s=e.font;return n.a.createElement("div",{className:"message ".concat(a)},n.a.createElement("p",{className:s},t))},E=["white","yellow","green","blue","purple"],y=["annie","reenie","amatic","sueEllen","swanky","arial","nanum","neucha","architects","amatic"],k=function(e){return e[Math.floor(Math.random()*e.length)]},M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).displayMessage=function(t){var a=Object(o.a)(e.state.messages),s=k(E),n=k(y);a.push({message:t,color:s,font:n}),e.setState({messages:a,isHeaderVisible:!1,isMsgVisible:!0}),h.database().ref().push(t)},e.displayPrompts=function(t){e.setState({isPromptsVisible:t})},e.resetPage=function(){e.setState({isHeaderVisible:!0,isMsgVisible:!1})},e.handleShowMsgs=function(){e.setState({isHeaderVisible:!1,isMsgVisible:!0})},e.state={messages:[{}],isHeaderVisible:!0,isMsgVisible:!1,isPromptsVisible:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=[],s=t.val();for(var n in s)a.push({message:s[n],color:k(E),font:k(y)});e.setState({messages:a})}))}},{key:"render",value:function(){return n.a.createElement("div",null,this.state.isHeaderVisible&&n.a.createElement(b,{displayMessage:this.displayMessage,displayPrompts:this.displayPrompts,handleShowMsgs:this.handleShowMsgs}),this.state.isMsgVisible&&n.a.createElement("main",null,n.a.createElement("section",{className:"messages pageWrapper"},n.a.createElement("div",{className:"messageHeading"},n.a.createElement("h2",null,"Dev Secrets..."),n.a.createElement("div",{className:"btnWrapper"},n.a.createElement("button",{onClick:this.resetPage},"Post Again"))),this.state.messages.map((function(e,t){var a=e.message,s=e.color,r=e.font;return console.log(a),n.a.createElement(v,{message:a,key:t,className:s,font:r})})))),this.state.isPromptsVisible&&n.a.createElement(f,{hidePrompts:this.displayPrompts}))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.12087c02.chunk.js.map