(this.webpackJsonppart2_2=this.webpackJsonppart2_2||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(15),o=t.n(c),i=t(3),s=t(0),u=function(e){var n=e.handler,t=e.val;return Object(s.jsx)("input",{className:"form-control",onChange:n,value:t})},d=function(e){var n=e.handler,t=e.subHandler,r=e.name,a=e.number;return Object(s.jsxs)("form",{onSubmit:n,method:"post",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"name",children:"name:"}),Object(s.jsx)("input",{id:"name",className:"form-control",onChange:t,placeholder:"XYZ ",name:"pName",value:r})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"number",children:"number:"}),Object(s.jsx)("input",{id:"number",className:"form-control",placeholder:"9623500000",maxLength:"10",name:"pNumber",value:a,onChange:t})]}),Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})})]})},l=t(4),b=t.n(l),m="/api/persons",j=function(){return b.a.get(m).then((function(e){return e.data}))},f=function(e){return b.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return b.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},O=function(e){var n=e.persons,t=e.setHandler;return Object(s.jsx)("div",{className:"bg-light p-2",children:n.map((function(e){return Object(s.jsxs)("div",{className:"d-flex justify-content-between align-content-center mb-2",children:[Object(s.jsxs)("div",{children:[" ",e.name," ",e.number," "]}),Object(s.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return r=e.id,void(!0===window.confirm("Do You want to delete it?")&&p(r).then(t(n.filter((function(e){return e.id!==r})))));var r},children:"Delete"})]},e.id)}))})},x=function(e){var n=e.error,t=e.nml;return t?Object(s.jsxs)("p",{style:{color:"green",padding:"5px",border:"2px solid green"},children:[" ",t," "]}):n?Object(s.jsxs)("p",{style:{color:"red",padding:"5px",border:"2px solid red"},children:[" ",n," "]}):Object(s.jsx)(s.Fragment,{children:" "})},v=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],b=o[1],m=Object(r.useState)(""),p=Object(i.a)(m,2),v=p[0],g=p[1],N=Object(r.useState)(""),w=Object(i.a)(N,2),y=w[0],S=w[1],k=Object(r.useState)(""),C=Object(i.a)(k,2),E=C[0],H=C[1],A=Object(r.useState)(""),D=Object(i.a)(A,2),I=D[0],J=D[1];Object(r.useEffect)((function(){j().then((function(e){return a(e)}))}),[]);var Y=""===y?t:t.filter((function(e){var n=new RegExp(y,"i");if(-1!==e.name.search(n))return e}));return Object(s.jsxs)("div",{className:"container bg-info pt-3 mt-3 rounded",children:[Object(s.jsx)("h2",{className:"bg-dark text-info p-2",children:"Phonebook"}),Object(s.jsx)(x,{error:I,nml:E}),Object(s.jsx)(u,{handler:function(e){S(e.target.value)},val:y}),Object(s.jsx)("h3",{className:"mt-2",children:"Add a new"}),Object(s.jsx)(d,{handler:function(e){e.preventDefault();var n={name:l,number:v};t.forEach((function(e){if(e.name===l){window.confirm("".concat(l," is already added to phonebook, want to replace with new one?"))?j().then((function(e){e.forEach((function(e){if(e.name===l){var r=e.id;h(r,n).then((function(e){a(t.map((function(n){return n.name!==l?n:e}))),H("Changed ".concat(l)),b(""),g("")})).catch((function(n){var r="Information of ".concat(e.name," has already been removed");J(r),a(t.map((function(n){return n.name!==e.name}))),setTimeout((function(){return J("")}),5e3)}))}}))})):(b(""),g(""))}else f(n).then((function(e){a(t.concat(e)),H("Added ".concat(e.name)),b(""),g("")})).catch((function(e){console.log(e.response.data),J(e.response.data)}))}))},subHandler:function(e){var n=e.target.name,t=e.target.value;"pName"===n?b(t):g(t)},name:l,number:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(O,{persons:Y,setHandler:a})]})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.16524e4b.chunk.js.map