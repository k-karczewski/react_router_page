(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.33a5b374.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.b31c04b8.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.448805cb.jpg"},,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=(a(28),a(9)),u=a(10),m=a(12),o=a(11),s=(a(29),a(3)),p=a(1),d=a(14),E=a.n(d),h=a(21),f=a.n(h),g=a(15),b=a.n(g),v=(a(30),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:E.a,alt:"miasto"})}}),r.a.createElement(p.c,{path:"/products",render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(p.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:b.a,alt:"miasto"})}}),r.a.createElement(p.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:b.a,alt:"miasto"})}}),r.a.createElement(p.c,{render:function(){return r.a.createElement("img",{src:E.a,alt:"miasto"})}})))}),x=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:"40px"}},r.a.createElement("h3",{style:{marginBottom:"3px",textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:"10px",fontSize:"12px"}},a),r.a.createElement("p",{style:{fontSize:"16px"}},n))},y=[{id:1,title:"Czym jest teoria strun?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."},{id:2,title:"Czym jest paradoks fermiego?",author:"Jan Kowalski",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."},{id:3,title:"Czym jest czarna dziura",author:"Janusz Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."},{id:4,title:"Czym jest ciemna energia?",author:"Gra\u017cyna Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."}],j=function(){var e=y.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},k=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},z=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"strona produkt\xf3w"),r.a.createElement(k,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"},"Powr\xf3t do listy produktu"))},w=(a(36),["car","bike","motorcycle"]),J=function(){var e=w.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},N=(a(37),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(p.a,{when:this.state.value,message:"Masz niezapisane zmiany. \r Czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),a}(n.Component)),C=function(){return r.a.createElement(p.c,{render:function(){return r.a.createElement(p.b,{to:"/login"})}})},O=function(){return r.a.createElement("div",null,"nie ma takiej strony")},S=function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",null,"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,component:j}),r.a.createElement(p.c,{path:"/products",component:J}),r.a.createElement(p.c,{path:"/product/:id",component:z}),r.a.createElement(p.c,{path:"/contact",component:N}),r.a.createElement(p.c,{path:"/admin",component:C}),r.a.createElement(p.c,{path:"/login",component:S}),r.a.createElement(p.c,{component:O})))},M=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),F=function(){var e=M.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},L=(a(39),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(p.c,{path:"/",exact:!0,render:function(){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(p.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(p.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),P=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(F,null)),r.a.createElement("section",{className:"page"},r.a.createElement(q,null))),r.a.createElement("footer",null,r.a.createElement(L,null))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.982ee272.chunk.js.map