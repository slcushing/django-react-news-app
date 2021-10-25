(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),r=a.n(s),i=(a(30),a(31),a(2)),l=a(3),o=a.n(l),j=a(7),b=a(6),u=a(5),d=(a(33),a(24)),h=a(8),m=a(25),p=a(0),O=["isAuth"];var x=function(e){var t=e.isAuth,a=Object(m.a)(e,O);return t?Object(p.jsx)(u.b,Object(h.a)({},a)):Object(p.jsx)(u.a,{to:"/login"})},v=a(9);var f=function(e){var t;return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"/",children:"News App"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(p.jsxs)("ul",(t={className:"navbar-nav ml-auto"},Object(v.a)(t,"className","container d-flex justify-content-end"),Object(v.a)(t,"id","main-nav"),Object(v.a)(t,"children",[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/",children:" Home "})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/login",children:" Login "})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/registration",children:" Register "})}),e.isAuth&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/create",children:" Submit Article "})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"articles/myarticles",children:"My Articles"})})]}),e.isAdmin&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"articles/admin",children:"Admin"})})})]),t))})]})})},g=a(11),y=a.n(g);var N=Object(u.i)((function(e){var t=Object(n.useState)({username:"",email:"",password1:"",password2:""}),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(null),i=Object(b.a)(r,2),l=(i[0],i[1]);function d(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(v.a)({},a,n))}))}function m(e){console.warn(e)}function O(){return(O=Object(j.a)(o.a.mark((function t(a){var n,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c.password1===c.password2){t.next=5;break}l("Passwords do not match."),t.next=19;break;case 5:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSFRToken":y.a.get("csrftoken")},body:JSON.stringify(c)},t.next=8,fetch("/rest-auth/registration/",n).catch(m);case 8:if(s=t.sent){t.next=13;break}console.log(s),t.next=19;break;case 13:return t.next=15,s.json();case 15:r=t.sent,y.a.set("Authorization","Token ".concat(r.key)),e.setIsAuth(!0),e.history.push("/");case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsxs)("form",{className:"mt-3 col-6",onSubmit:function(e){return O.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter Username",onChange:d,required:!0,name:"username",value:c.username})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter Email",onChange:d,required:!0,name:"email",value:c.email})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"Enter Password",onChange:d,required:!0,name:"password1",value:c.password1})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"Confirm Password",onChange:d,required:!0,name:"password2",value:c.password2})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Register"})]})}));var w=Object(u.i)((function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(b.a)(t,2),c=a[0],s=a[1];function r(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(v.a)({},a,n))}))}function i(e){console.warn(e)}function l(){return(l=Object(j.a)(o.a.mark((function t(a){var n,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":y.a.get("csrftoken")},body:JSON.stringify(c)},t.next=4,fetch("/rest-auth/login/",n).catch(i);case 4:if(s=t.sent){t.next=9;break}console.log(s),t.next=15;break;case 9:return t.next=11,s.json();case 11:r=t.sent,y.a.set("Authorization","Token ".concat(r.key)),e.setIsAuth(!0),e.history.push("/");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsxs)("form",{className:"mt-3 col-6",onSubmit:function(e){return l.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",onChange:r,required:!0,name:"username",value:c.username})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:r,required:!0,name:"password",value:c.password})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-success",children:"Login"})]})}));var k=Object(u.i)((function(e){var t=Object(n.useState)({alias:"",avatar:null}),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),l=i[0],u=i[1];function d(e){console.warn(e)}function m(){return(m=Object(j.a)(o.a.mark((function t(a){var n,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(n=new FormData).append("alias",c.alias),n.append("avatar",c.avatar),s={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken")},body:n},t.next=7,fetch("/api_v1/accounts/",s).catch(d);case 7:if(r=t.sent){t.next=12;break}console.log(r),t.next=16;break;case 12:return t.next=14,r.json();case 14:t.sent,e.history.push("/");case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"ProfileForm",children:Object(p.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(p.jsx)("input",{type:"text",name:"alias",value:c.alias,onChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(h.a)(Object(h.a)({},c),{},Object(v.a)({},a,n)))}}),Object(p.jsx)("input",{type:"file",name:"avatar",onChange:function(e){var t=e.target.files[0];s(Object(h.a)(Object(h.a)({},c),{},{avatar:t}));var a=new FileReader;a.onloadend=function(){u(a.result)},a.readAsDataURL(t)}}),c.avatar&&Object(p.jsx)("img",{src:l,alt:""}),Object(p.jsx)("button",{type:"submit",children:"Save Profile"})]})})}));var S=Object(u.i)((function(e){var t=Object(n.useState)({image:null,title:"",body:"",category:""}),a=Object(b.a)(t,2),c=a[0],s=a[1],r=function(e){var t=e.target,a=t.name,n=t.value;s(Object(h.a)(Object(h.a)({},c),{},Object(v.a)({},a,n)))};function i(e){console.warn(e)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(j.a)(o.a.mark((function t(a){var n,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(n=new FormData).append("image",c.image),n.append("title",c.title),n.append("body",c.body),n.append("category",c.category),n.append("status",a.target.value),s={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken")},body:n},t.next=10,fetch("/api_v1/articles/",s).catch(i);case 10:if(r=t.sent){t.next=15;break}console.log(r),t.next=19;break;case 15:return t.next=17,r.json();case 17:t.sent,e.history.push("/");case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)("form",{className:"mt-3 col-6",children:[Object(p.jsxs)("div",{className:"form-group text-left mb-2",children:[Object(p.jsx)("label",{htmlFor:"image",children:"Image"}),Object(p.jsx)("input",{type:"file",name:"image",onChange:function(e){var t=e.target.files[0];s(Object(h.a)(Object(h.a)({},c),{},{image:t})),(new FileReader).readAsDataURL(t)}})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-2",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title"}),Object(p.jsx)("input",{type:"text",name:"title",value:c.title,onChange:r})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-2",children:[Object(p.jsx)("label",{htmlFor:"body",children:"Body"}),Object(p.jsx)("input",{type:"text",name:"body",value:c.body,onChange:r})]}),Object(p.jsxs)("select",{onChange:r,name:"category",value:c.category,children:[Object(p.jsx)("option",{children:"Open this select menu"}),Object(p.jsx)("option",{value:"NEWS",children:"News"}),Object(p.jsx)("option",{value:"HLTH",children:"Health"}),Object(p.jsx)("option",{value:"SPRT",children:"Sports"}),Object(p.jsx)("option",{value:"TECH",children:"Tech"}),Object(p.jsx)("option",{value:"OPIN",children:"Opinion"})]}),Object(p.jsx)("button",{type:"submit",value:"DFT",onClick:l,children:"Save as Draft"}),Object(p.jsx)("button",{type:"submit",value:"SUBM",onClick:l,children:"Submit for Review"})]})}));var T=Object(u.i)((function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(u.h)(),l={draft:"DFT",submitted:"SUBM",published:"PUBL",rejected:"REJ"};Object(n.useEffect)((function(){var t=e.match.params.status,a="/api_v1/articles/?status=ALL";function n(){return(n=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(a="/api_v1/articles/?status=".concat(l[t])),function(){n.apply(this,arguments)}()}),[r]);var d=c.map((function(e){return Object(p.jsxs)("div",{className:"article",children:[Object(p.jsx)("img",{className:"fit-picture",src:e.image,alt:""}),Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("p",{children:e.body}),Object(p.jsx)("p",{children:e.status})]},e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsxs)("ul",{className:"navbar-nav",id:"secondary-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/myarticles/",children:"ALL"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/myarticles/draft",children:"DRAFT"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/myarticles/submitted",children:"SUBMITTED"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/myarticles/published",children:"PUBLISHED"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/myarticles/rejected",children:"REJECTED"})})]})})}),Object(p.jsx)("section",{className:"my-article-section",children:d})]})}));var C=Object(u.i)((function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(u.h)(),l={news:"NEWS",health:"HLTH",sports:"SPRT",tech:"TECH",opinion:"OPIN"};Object(n.useEffect)((function(){var t=e.match.params.category,a="/api_v1/articles/";function n(){return(n=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("articles",n),s(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(a="/api_v1/articles/?category=".concat(l[t])),function(){n.apply(this,arguments)}()}),[r]);var d=c.map((function(e){return Object(p.jsxs)("div",{className:"article",children:[Object(p.jsx)("img",{className:"fit-picture",src:e.image,alt:""}),Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("p",{children:e.username}),Object(p.jsx)("p",{children:e.body})]},e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:"home-header",children:"Thoughtful Media Collective"}),Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsxs)("ul",{className:"navbar-nav",id:"secondary-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/news",children:"News"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/health",children:"Health"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/sports",children:"Sports"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/tech",children:"Tech"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/opinion",children:"Opinion"})})]})})}),Object(p.jsx)("section",{className:"article-section",children:d})]})}));var F=Object(u.i)((function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(u.h)(),l={draft:"DFT",submitted:"SUBM",published:"PUBL",rejected:"REJ"};function d(e){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"X-CSRFToken":y.a.get("csfrtoken")},body:c.article},e.next=4,fetch("/api_v1/articles/",a);case 4:if(n=e.sent){e.next=9;break}console.log(n),e.next=12;break;case 9:return e.next=11,n.json();case 11:e.sent;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken")},body:c.article},e.next=4,fetch("/api_v1/articles/",a);case 4:if(n=e.sent){e.next=9;break}console.log(n),e.next=12;break;case 9:return e.next=11,n.json();case 11:e.sent;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var t=e.match.params.status,a="/api_v1/articles/?status=ALL";function n(){return(n=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(a="/api_v1/articles/?status=".concat(l[t])),function(){n.apply(this,arguments)}()}),[r]);var x=c.map((function(e){return Object(p.jsxs)("div",{className:"article",children:[Object(p.jsx)("img",{className:"fit-picture",src:e.image,alt:""}),Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("p",{children:e.username}),Object(p.jsx)("p",{children:e.body}),Object(p.jsx)("p",{children:e.status}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary mt-3",name:"SUBM",value:"PUBL",onClick:d,children:" Publish "}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary mt-3",name:"SUBM",value:"REJ",onClick:m,children:" Reject "})]},e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsxs)("ul",{className:"navbar-nav",id:"secondary-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/admin/",children:"ALL"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/admin/submitted",children:"SUBMITTED"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/admin/published",children:"PUBLISHED"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/articles/admin/rejected",children:"REJECTED"})})]})})}),Object(p.jsx)("section",{className:"admin-article-section",children:x})]})}));var A=Object(u.i)((function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(b.a)(s,2),i=r[0],l=(r[1],Object(u.g)());return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/");case 2:e.sent.ok?c(!0):c(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),null===a?Object(p.jsx)(d.a,{animation:"grow",variant:"primary"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{isAuth:a}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/registration",children:Object(p.jsx)(N,{isAuth:a,setIsAuth:c})}),Object(p.jsx)(u.b,{path:"/login",children:Object(p.jsx)(w,{isAuth:a,setIsAuth:c})}),Object(p.jsx)(x,{path:"/profile",isAuth:a,children:Object(p.jsx)(k,{})}),Object(p.jsx)(x,{path:"/articles/create",isAuth:a,children:Object(p.jsx)(S,{})}),Object(p.jsx)(x,{path:"/articles/myarticles/:status?",isAuth:a,children:Object(p.jsx)(T,{})}),Object(p.jsx)(u.b,{path:"/articles/admin/:status?",isAdmin:i,children:Object(p.jsx)(F,{})}),Object(p.jsx)(u.b,{path:"/:category?",children:Object(p.jsx)(C,{})})]})]})})),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(A,{})})}),document.getElementById("root")),E()}},[[40,1,2]]]);
//# sourceMappingURL=main.9c99493f.chunk.js.map