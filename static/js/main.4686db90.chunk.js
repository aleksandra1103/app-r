(this["webpackJsonpprzykladowa-strona"]=this["webpackJsonpprzykladowa-strona"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),u=(a(29),a(9)),i=a(10),m=a(11),o=a(12),s=a(2),p=(a(30),a(31),a(14)),d=a.n(p),E=a(21),h=a.n(E),f=a(15),g=a.n(f),v=a(6),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.e,null,r.a.createElement(v.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:d.a,alt:"miasto"})}}),r.a.createElement(v.c,{path:"/products",render:function(){return r.a.createElement("img",{src:h.a,alt:"miasto"})}}),r.a.createElement(v.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:g.a,alt:"miasto"})}}),r.a.createElement(v.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:g.a,alt:"miasto"})}}),r.a.createElement(v.c,{render:function(){return r.a.createElement("img",{src:d.a,alt:"miasto"})}})))},b=(a(37),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),k=function(){var e=b.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("div",null,r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e)))},j=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},x=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione. Consectetur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione.Consectetur, tenetur!"},{id:2,title:"Czym jest paradoks fermiego",author:"Jan Kowalski",text:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione. Consectetur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione.Consectetur, tenetur!"},{id:3,title:"Ciemna materia?",author:"Jan J\xf3zef",text:"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione. Consectetur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione.Consectetur, tenetur!"}].map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e))})),q=function(){return r.a.createElement("div",{className:"home"},x)},w=["car","bike","motorcycle"],C=function(){var e=w.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h1",null,"Lista product\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},z=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},J=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},L=(a(38),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isEmpty:!1},e.handleSubmit=function(t){t.peventDefault(),e.setState({value:"",isEmpty:!0})},e.handleChange=function(t){t.target.value.length>0?e.setState({value:t.target.value,isEmpty:!1}):e.setState({value:t.target.value,isEmpty:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact"},r.a.createElement("form",null,r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(v.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony formularz. Czy napewno chcesz opu\u015bcic t\u0105 stron\u0119?"})))}}]),a}(n.Component)),N=function(){return r.a.createElement("div",null,"Nie ma takiej storny")},O=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlForm:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlForm:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.e,null,r.a.createElement(v.c,{path:"/",exact:!0,component:q}),r.a.createElement(v.c,{path:"/products",component:C}),r.a.createElement(v.c,{path:"/product/:id",component:J}),r.a.createElement(v.c,{path:"/contact",component:L}),r.a.createElement(v.c,{path:"/admin",component:O}),r.a.createElement(v.c,{component:N})))},F=(a(39),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(v.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stornie g\u0142\xf3wnej"))}}),r.a.createElement(v.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(v.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),P=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(k,null)),r.a.createElement("section",{className:"page"},r.a.createElement(S,null))),r.a.createElement("footer",null,r.a.createElement(F,null))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.4686db90.chunk.js.map