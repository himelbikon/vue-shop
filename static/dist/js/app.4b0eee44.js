(function(t){function e(e){for(var n,o,s=e[0],i=e[1],l=e[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var t,e=0;e<a.length;e++){for(var c=a[e],n=!0,s=1;s<c.length;s++){var i=c[s];0!==r[i]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;a.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"0c29":function(t,e,c){"use strict";c("0cc4")},"0cc4":function(t,e,c){},"19b3":function(t,e,c){},2085:function(t,e,c){"use strict";c("19b3")},"23e5":function(t,e,c){},"3ba8":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r={class:"main-app"};function a(t,e,c,a,o,s){var i=Object(n["z"])("Header"),l=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])("div",r,[Object(n["i"])(i),Object(n["g"])("main",null,[Object(n["i"])(l)])])}var o=c("1da1"),s=(c("96cf"),c("ac1f"),c("1276"),c("bc3a")),i=c.n(s),l=function(t){return Object(n["v"])("data-v-6a5c781c"),t=t(),Object(n["t"])(),t},u={class:"dbg text-white d-flex justify-content-between py-2 px-3"},d={class:"d-inline"},b=l((function(){return Object(n["g"])("img",{src:"https://himelbikon.pythonanywhere.com/static/images/logo1.png",alt:""},null,-1)})),p={class:"d-inline-block m-0 p-0"},m={class:"p-3 d-flex justify-content-end"},f=l((function(){return Object(n["g"])("i",{class:"far fa-window-close"},null,-1)})),g=[f],O={class:"p-3"},j=Object(n["h"])(" Home "),h={class:"p-3"},v=Object(n["h"])(" About us "),y={key:0,class:"p-3"},k=Object(n["h"])(" User "),w={class:"sub-menu-1 text-center my-2 px-2 py-3 shadow"},x={class:"ls-none m-0 p-0"},I=Object(n["h"])("Profile"),P=l((function(){return Object(n["g"])("hr",null,null,-1)})),C={class:""},$=l((function(){return Object(n["g"])("li",{class:"p-3"},[Object(n["g"])("a",{href:"#"}," Contact ")],-1)})),S={key:1,class:"p-3"},_=Object(n["h"])(" Login "),B={class:"p-3"},H=l((function(){return Object(n["g"])("i",{class:"fas fa-shopping-cart"},null,-1)})),q=l((function(){return Object(n["g"])("i",{class:"fas fa-bars"},null,-1)})),R=[q];function F(t,e,c,r,a,o){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("header",null,[Object(n["g"])("nav",u,[Object(n["g"])("div",d,[Object(n["i"])(s,{to:{name:"home"}},{default:Object(n["F"])((function(){return[b]})),_:1})]),Object(n["g"])("div",p,[Object(n["g"])("ul",{class:"d-flex mx-3 ls-none main-menu my-0 p-0",style:Object(n["o"])({right:a.menuRight})},[Object(n["g"])("li",m,[Object(n["g"])("button",{class:"btn mobile text-white",onClick:e[0]||(e[0]=function(){return o.menuHandler&&o.menuHandler.apply(o,arguments)})},g)]),Object(n["g"])("li",O,[Object(n["i"])(s,{to:{name:"home"}},{default:Object(n["F"])((function(){return[j]})),_:1})]),Object(n["g"])("li",h,[Object(n["i"])(s,{to:{name:"about"}},{default:Object(n["F"])((function(){return[v]})),_:1})]),t.$store.state.token?(Object(n["s"])(),Object(n["f"])("li",y,[k,Object(n["g"])("div",w,[Object(n["g"])("ul",x,[Object(n["g"])("li",null,[Object(n["i"])(s,{to:{name:"profile"}},{default:Object(n["F"])((function(){return[I]})),_:1})]),P,Object(n["g"])("li",C,[Object(n["g"])("button",{class:"btn text-white btn-nav",onClick:e[1]||(e[1]=function(){return o.logoutHandler&&o.logoutHandler.apply(o,arguments)})}," Logout ")])])])])):Object(n["e"])("",!0),$,t.$store.state.token?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("li",S,[Object(n["i"])(s,{to:{name:"login"}},{default:Object(n["F"])((function(){return[_]})),_:1})])),Object(n["g"])("li",B,[Object(n["i"])(s,{to:{name:"cart"}},{default:Object(n["F"])((function(){return[H,Object(n["h"])(" ("+Object(n["B"])(o.cartLen)+") ",1)]})),_:1})])],4)]),Object(n["g"])("button",{class:"btn mobile text-white",onClick:e[2]||(e[2]=function(){return o.menuHandler&&o.menuHandler.apply(o,arguments)})},R)])])}var N="-390px",z={name:"Header",data:function(){return{menuRight:N}},watch:{$route:function(t,e){t!=e&&(this.menuRight=N)}},mounted:function(){},methods:{menuHandler:function(){this.menuRight===N?this.menuRight="-22px":this.menuRight=N},logoutHandler:function(){this.$store.state.token="",this.$store.commit("logginOut")}},computed:{cartLen:function(){return this.$store.state.cart.length}}},E=(c("8dc1"),c("6b0d")),J=c.n(E);const L=J()(z,[["render",F],["__scopeId","data-v-6a5c781c"]]);var T=L,U={name:"App",components:{Header:T},watch:{$route:function(t,e){t!=e&&window.scroll(0,0)}},mounted:function(){this.$store.state.token||(console.log("check auth"),this.$store.commit("initializeStore"),this.getProfile())},methods:{getProfile:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/users/profile").then((function(e){t.$store.state.user=e.data.email.split("@")[0]})).catch((function(){t.$store.commit("logginOut")}));case 2:case"end":return e.stop()}}),e)})))()}}};c("2085");const D=J()(U,[["render",a]]);var G=D,A=(c("d3b7"),c("6c02")),V=(c("e9c4"),c("4de4"),c("a434"),c("5502")),M=Object(V["a"])({state:{token:"",user:"",url:"himelbikon.pythonanywhere.com",cart:[]},mutations:{initializeStore:function(t){localStorage.getItem("token")&&(t.token=JSON.parse(localStorage.getItem("token"))),localStorage.getItem("cart")&&(t.cart=JSON.parse(localStorage.getItem("cart")))},loggingIn:function(t,e){t.token=e.access,localStorage.setItem("token",JSON.stringify(t.token))},logginOut:function(t){t.token="",t.user="",localStorage.removeItem("token")},addToCart:function(t,e){var c=t.cart.filter((function(t){return t.product.id===e.product.id}));if(c.length)for(var n=0;n<t.cart.length;n++)t.cart[n].product.id===e.product.id&&(t.cart[n].quantity+=e.quantity);else t.cart.push(e);localStorage.setItem("cart",JSON.stringify(t.cart))},increaseCart:function(t,e){for(var c=0;c<t.cart.length;c++)t.cart[c].product.id===e&&(t.cart[c].quantity+=1);localStorage.setItem("cart",JSON.stringify(t.cart))},decreaseCart:function(t,e){for(var c=0;c<t.cart.length;c++)t.cart[c].product.id===e&&(t.cart[c].quantity>1?t.cart[c].quantity-=1:t.cart.splice(c,1));localStorage.setItem("cart",JSON.stringify(t.cart))},deleteFromCart:function(t,e){for(var c=0;c<t.cart.length;c++)t.cart[c].product.id===e&&t.cart.splice(c,1);localStorage.setItem("cart",JSON.stringify(t.cart))},clearCart:function(t){t.cart=[],localStorage.setItem("cart",JSON.stringify(t.cart))}},actions:{},modules:{}}),Q={class:"home-page"};function Y(t,e,c,r,a,o){var s=Object(n["z"])("HeadBanner"),i=Object(n["z"])("LatestProducts");return Object(n["s"])(),Object(n["f"])("div",Q,[Object(n["g"])("section",null,[Object(n["i"])(s)]),Object(n["g"])("section",null,[Object(n["i"])(i)])])}var Z=c("e296"),W=c.n(Z),K=function(t){return Object(n["v"])("data-v-7279c913"),t=t(),Object(n["t"])(),t},X={class:"head-banner bg-light py-5"},tt=K((function(){return Object(n["g"])("div",{class:"container"},[Object(n["g"])("div",{class:"row"},[Object(n["g"])("div",{class:"col-12 col-md-6"},[Object(n["g"])("div",{class:"text p-5"},[Object(n["h"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit velit voluptatem. Aliquam architecto pariatur harum molestias facilis reiciendis nam corporis. "),Object(n["g"])("div",null,[Object(n["g"])("button",{class:"my-3 btn dbg text-white"},"Shop Now")])])]),Object(n["g"])("div",{class:"col-12 col-md-6"},[Object(n["g"])("img",{class:"img-fluid",src:W.a,alt:""})])])],-1)})),et=[tt];function ct(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",X,et)}var nt={name:"head-banner",methods:{}};c("0c29");const rt=J()(nt,[["render",ct],["__scopeId","data-v-7279c913"]]);var at=rt,ot={class:"latest-products"},st={class:"container my-3"},it={class:"row"};function lt(t,e,c,r,a,o){var s=Object(n["z"])("HeadTitle"),i=Object(n["z"])("ProductCard");return Object(n["s"])(),Object(n["f"])("div",ot,[Object(n["i"])(s,{title:"Latest Products"}),Object(n["g"])("div",st,[Object(n["g"])("div",it,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.latestProducts,(function(t){return Object(n["s"])(),Object(n["d"])(i,{key:t.id,product:t},null,8,["product"])})),128))])])])}var ut={class:"head-title my-5"},dt={class:"text-center py-3"};function bt(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",ut,[Object(n["g"])("h1",dt,Object(n["B"])(c.title),1)])}var pt={name:"head-title",props:{title:String}};const mt=J()(pt,[["render",bt]]);var ft=mt,gt=(c("99af"),c("b0c0"),{class:"col-6 col-md-3 my-2"}),Ot={class:"product-card shadow"},jt=["src"],ht={key:1,src:"https://via.placeholder.com/500x500",alt:"",class:"img-fluid"},vt={class:"my-2 p-3"};function yt(t,e,c,r,a,o){var s=this,i=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",gt,[Object(n["g"])("div",Ot,[Object(n["g"])("div",null,[Object(n["i"])(i,{to:{name:"singleProduct",params:{id:c.product.id}}},{default:Object(n["F"])((function(){return[c.product.image?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:"".concat(s.$store.state.url).concat(c.product.image),alt:"",class:"img-fluid w-100"},null,8,jt)):(Object(n["s"])(),Object(n["f"])("img",ht))]})),_:1},8,["to"])]),Object(n["g"])("div",vt,[Object(n["g"])("div",null,[Object(n["i"])(i,{to:{name:"singleProduct",params:{id:c.product.id}}},{default:Object(n["F"])((function(){return[Object(n["g"])("strong",null,Object(n["B"])(c.product.name),1)]})),_:1},8,["to"])]),Object(n["g"])("div",null,"Price: $"+Object(n["B"])(c.product.price),1)])])])}var kt={name:"product-card",props:{product:Object}};const wt=J()(kt,[["render",yt]]);var xt=wt,It={name:"latest-products",data:function(){return{latestProducts:[]}},components:{HeadTitle:ft,ProductCard:xt},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/shop").then((function(e){t.latestProducts=e.data})).catch((function(t){t.response?console.log(JSON.stringify(t.response.data)):console.log("Something went wrong!")}));case 2:case"end":return e.stop()}}),e)})))()}}};const Pt=J()(It,[["render",lt]]);var Ct=Pt,$t={name:"home",mounted:function(){},components:{HeadBanner:at,LatestProducts:Ct}};const St=J()($t,[["render",Y]]);var _t=St,Bt={class:"about-page"},Ht={class:"btn btn-danger"};function qt(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",Bt,[Object(n["g"])("button",Ht," About "+Object(n["B"])(this.$store.state.authCheck)+" "+Object(n["B"])(this.$store.state.isAuthenticated),1)])}var Rt={name:"about"};const Ft=J()(Rt,[["render",qt]]);var Nt=Ft,zt=function(t){return Object(n["v"])("data-v-223b303b"),t=t(),Object(n["t"])(),t},Et={class:"login-page"},Jt={class:"container"},Lt={class:"row d-flex justify-content-center"},Tt={class:"col-10 col-md-6 col-lg-4 bg-white pt-5 pb-4 my-5 rounded"},Ut=zt((function(){return Object(n["g"])("div",null,[Object(n["g"])("h3",{class:"fw-bold text-center mb-5"},"Login")],-1)})),Dt={class:"mb-3"},Gt=zt((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1)})),At={class:"mb-3"},Vt=zt((function(){return Object(n["g"])("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1)})),Mt={key:0,class:"alert alert-danger my-0"},Qt=zt((function(){return Object(n["g"])("button",{type:"submit",class:"btn btn-primary w-100 my-3"}," Submit ",-1)})),Yt={key:1,class:"alert alert-success py-1"},Zt=zt((function(){return Object(n["g"])("p",{class:"text-center mt-2"},[Object(n["h"])(" Don't have any account? "),Object(n["g"])("a",{href:"#"},"Register")],-1)}));function Wt(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",Et,[Object(n["g"])("div",Jt,[Object(n["g"])("div",Lt,[Object(n["g"])("div",Tt,[Object(n["g"])("form",{class:"px-3 pt-3 pb-0",onSubmit:e[2]||(e[2]=Object(n["H"])((function(){return o.loginHandler&&o.loginHandler.apply(o,arguments)}),["prevent"]))},[Ut,Object(n["g"])("div",Dt,[Gt,Object(n["G"])(Object(n["g"])("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.email=t})},null,512),[[n["D"],a.email]])]),Object(n["g"])("div",At,[Vt,Object(n["G"])(Object(n["g"])("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.password=t})},null,512),[[n["D"],a.password]])]),a.errors.length?(Object(n["s"])(),Object(n["f"])("div",Mt,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.errors,(function(t){return Object(n["s"])(),Object(n["f"])("div",{key:t},Object(n["B"])(t),1)})),128))])):Object(n["e"])("",!0),Qt,a.success?(Object(n["s"])(),Object(n["f"])("div",Yt,Object(n["B"])(a.success),1)):Object(n["e"])("",!0),Zt],32)])])])])}var Kt={data:function(){return{email:"",password:"",errors:[],success:""}},mounted:function(){this.$store.state.token&&this.$router.push({name:"home"})},methods:{loginHandler:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.errors=[],t.success="",""!==t.email){e.next=6;break}t.errors.push("Enter your email!"),e.next=13;break;case 6:if(""!==t.password){e.next=10;break}t.errors.push("Enter your password!"),e.next=13;break;case 10:return c={email:t.email,password:t.password},e.next=13,i.a.post("/users/login",c).then((function(e){t.success="Login successful!",t.$store.commit("loggingIn",e.data),t.$router.push({name:"home"})})).catch((function(e){if(e.response){for(var c in e.response.data)t.errors.push("".concat(e.response.data[c]));console.log(JSON.stringify(e.response.data))}else e.message&&(t.error.push("Something went wrong. Please try later!"),console.log(JSON.stringify(e)))}));case 13:case"end":return e.stop()}}),e)})))()}}};c("a684");const Xt=J()(Kt,[["render",Wt],["__scopeId","data-v-223b303b"]]);var te=Xt,ee={class:"profile-page"};function ce(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",ee,"This is profile")}var ne={name:"profile",data:function(){return{test:""}},mounted:function(){},methods:{}};const re=J()(ne,[["render",ce]]);var ae=re,oe=function(t){return Object(n["v"])("data-v-7f1b554b"),t=t(),Object(n["t"])(),t},se={class:"single-product"},ie={class:"container"},le={class:"row"},ue={class:"col-12 col-md-6 my-3"},de={class:"image-side d-flex justify-content-center"},be={key:0,src:"https://via.placeholder.com/500x500",alt:"",class:"img-fluid w-75"},pe=["src"],me={class:"row d-flex justify-content-center"},fe={class:"col-2 m-0 p-0"},ge=["src"],Oe={class:"col-2 m-0 p-0"},je=["src"],he={class:"col-2 m-0 p-0"},ve=["src"],ye={class:"col-2 m-0 p-0"},ke=["src"],we={class:"col-2 m-0 p-0"},xe=["src"],Ie={class:"col-12 col-md-6 my-3"},Pe={class:"my-5"},Ce={key:0},$e={class:"input-group my-5 w-75"},Se={key:0},_e=oe((function(){return Object(n["g"])("small",null,"You can increase, decrease or delete this product from cart page.",-1)})),Be=[_e],He={class:"row my-3"};function qe(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",se,[Object(n["g"])("div",ie,[Object(n["g"])("div",le,[Object(n["g"])("div",ue,[Object(n["g"])("div",de,[a.product.image?(Object(n["s"])(),Object(n["f"])("img",{key:1,src:this.$store.state.url+a.bigImg,alt:"",class:"img-fluid w-75"},null,8,pe)):(Object(n["s"])(),Object(n["f"])("img",be))]),Object(n["g"])("div",me,[Object(n["g"])("div",fe,[a.product.image?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:this.$store.state.url+a.product.image,alt:"",class:"img-fluid",onClick:e[0]||(e[0]=function(t){return o.changeImage(a.product.image)})},null,8,ge)):Object(n["e"])("",!0)]),Object(n["g"])("div",Oe,[a.product.image2?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:this.$store.state.url+a.product.image2,alt:"",class:"img-fluid",onClick:e[1]||(e[1]=function(t){return o.changeImage(a.product.image2)})},null,8,je)):Object(n["e"])("",!0)]),Object(n["g"])("div",he,[a.product.image3?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:this.$store.state.url+a.product.image3,alt:"",class:"img-fluid",onClick:e[2]||(e[2]=function(t){return o.changeImage(a.product.image3)})},null,8,ve)):Object(n["e"])("",!0)]),Object(n["g"])("div",ye,[a.product.image4?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:this.$store.state.url+a.product.image4,alt:"",class:"img-fluid",onClick:e[3]||(e[3]=function(t){return o.changeImage(a.product.image4)})},null,8,ke)):Object(n["e"])("",!0)]),Object(n["g"])("div",we,[a.product.image5?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:this.$store.state.url+a.product.image5,alt:"",class:"img-fluid",onClick:e[4]||(e[4]=function(t){return o.changeImage(a.product.image5)})},null,8,xe)):Object(n["e"])("",!0)])])]),Object(n["g"])("div",Ie,[Object(n["g"])("h3",null,Object(n["B"])(a.product.name),1),Object(n["g"])("div",Pe,"Price: $"+Object(n["B"])(a.product.price),1),o.isIncart?(Object(n["s"])(),Object(n["f"])("div",Ce," This product is already in cart! ("+Object(n["B"])(o.isIncart[0].quantity)+") ",1)):Object(n["e"])("",!0),Object(n["g"])("div",$e,[Object(n["G"])(Object(n["g"])("input",{type:"number",min:"1",class:"form-control","aria-describedby":"button-addon2","onUpdate:modelValue":e[5]||(e[5]=function(t){return a.quantity=t})},null,512),[[n["D"],a.quantity]]),Object(n["g"])("button",{class:"btn btn-df",type:"button",id:"button-addon2",onClick:e[6]||(e[6]=function(t){return o.addTocart()})}," Add To Cart "),o.isIncart?(Object(n["s"])(),Object(n["f"])("div",Se,Be)):Object(n["e"])("",!0)])])]),Object(n["g"])("div",He,Object(n["B"])(a.product.details),1)])])}var Re={name:"single-product",data:function(){return{product:{},quantity:1,bigImg:""}},mounted:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/shop/".concat(t.$route.params.id)).then((function(e){t.product=e.data,t.bigImg=e.data.image})).catch((function(t){console.log(JSON.stringify(t.response.data))}));case 2:case"end":return e.stop()}}),e)})))()},changeImage:function(t){this.bigImg=t},addTocart:function(){var t={product:this.product,quantity:this.quantity};this.$store.commit("addToCart",t)}},computed:{isIncart:function(){var t=this,e=this.$store.state.cart.filter((function(e){return e.product.id===t.product.id}));return!!e.length&&e}}};c("8f54");const Fe=J()(Re,[["render",qe],["__scopeId","data-v-7f1b554b"]]);var Ne=Fe,ze=function(t){return Object(n["v"])("data-v-4633b3fe"),t=t(),Object(n["t"])(),t},Ee={class:"cart"},Je=ze((function(){return Object(n["g"])("h3",{class:"text-center my-2"},"Cart Items",-1)})),Le={class:"container"},Te={class:"table"},Ue=ze((function(){return Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},"#"),Object(n["g"])("th",{scope:"col"},"Product"),Object(n["g"])("th",{scope:"col"},"Price"),Object(n["g"])("th",{scope:"col"},"Quantity"),Object(n["g"])("th",{scope:"col"},"Full Price"),Object(n["g"])("th",{scope:"col"},"Action")])],-1)})),De={scope:"row"},Ge=["onClick"],Ae=["onClick"],Ve=["onClick"],Me={class:"container"},Qe={class:"row d-flex justify-content-end"},Ye={class:"col-4 border rounded p-3"},Ze=Object(n["h"])("Checkout");function We(t,e,c,r,a,o){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",Ee,[Je,Object(n["g"])("div",Le,[Object(n["g"])("table",Te,[Ue,Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(this.$store.state.cart,(function(t,e){return Object(n["s"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("th",De,Object(n["B"])(e+1),1),Object(n["g"])("td",null,Object(n["B"])(t.product.name),1),Object(n["g"])("td",null,"$"+Object(n["B"])(t.product.price),1),Object(n["g"])("td",null,[Object(n["g"])("button",{class:"btn btn-sm btn-light",onClick:function(e){return o.decreaseCart(t.product.id)}}," - ",8,Ge),Object(n["h"])(" "+Object(n["B"])(t.quantity)+" ",1),Object(n["g"])("button",{class:"btn btn-sm btn-light",onClick:function(e){return o.increaseCart(t.product.id)}}," + ",8,Ae)]),Object(n["g"])("td",null,"$"+Object(n["B"])(t.quantity*t.product.price),1),Object(n["g"])("td",null,[Object(n["g"])("button",{class:"btn btn-danger btn-sm",onClick:function(e){return o.deleteFromCart(t.product.id)}}," x ",8,Ve)])])})),128))])])]),Object(n["g"])("div",Me,[Object(n["g"])("div",Qe,[Object(n["g"])("div",Ye,[Object(n["g"])("div",null,"Total: $"+Object(n["B"])(o.totalCartPrice),1),Object(n["i"])(s,{to:{name:"checkout"},class:"btn btn-df mt-3 text-white"},{default:Object(n["F"])((function(){return[Ze]})),_:1})])])])])}c("d81d");var Ke={name:"cart",components:{},methods:{increaseCart:function(t){this.$store.commit("increaseCart",t)},decreaseCart:function(t){this.$store.commit("decreaseCart",t)},deleteFromCart:function(t){this.$store.commit("deleteFromCart",t)}},computed:{totalCartPrice:function(){var t=0;return this.$store.state.cart.map((function(e){t+=e.product.price*e.quantity})),t}}};c("db11");const Xe=J()(Ke,[["render",We],["__scopeId","data-v-4633b3fe"]]);var tc=Xe,ec=function(t){return Object(n["v"])("data-v-fde7bc80"),t=t(),Object(n["t"])(),t},cc={class:"checkout-page"},nc=ec((function(){return Object(n["g"])("h3",{class:"text-center my-2"},"Checkout",-1)})),rc={class:"container"},ac={class:"row"},oc={class:"col-12 col-md-6"},sc={class:"mb-3"},ic=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Frist Name",-1)})),lc={class:"mb-3"},uc=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Last Name",-1)})),dc={class:"mb-3"},bc=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1)})),pc={class:"mb-3"},mc=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Phone",-1)})),fc={class:"mb-3"},gc=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Address",-1)})),Oc={class:"mb-3"},jc=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Zip Code",-1)})),hc={class:"mb-3"},vc=ec((function(){return Object(n["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Place",-1)})),yc=ec((function(){return Object(n["g"])("hr",null,null,-1)})),kc={ref:"paypal"},wc=ec((function(){return Object(n["g"])("hr",null,null,-1)})),xc={class:"col-12 col-md-6"},Ic={class:"table"},Pc=ec((function(){return Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},"#"),Object(n["g"])("th",{scope:"col"},"Product"),Object(n["g"])("th",{scope:"col"},"Price"),Object(n["g"])("th",{scope:"col"},"Quantity"),Object(n["g"])("th",{scope:"col"},"Full Price")])],-1)})),Cc={scope:"row"},$c={class:"mx-5"};function Sc(t,e,c,r,a,o){return Object(n["s"])(),Object(n["f"])("div",cc,[nc,Object(n["g"])("div",rc,[Object(n["g"])("div",ac,[Object(n["g"])("div",oc,[Object(n["g"])("form",null,[Object(n["g"])("div",sc,[ic,Object(n["G"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.first_name=t})},null,512),[[n["D"],a.first_name]])]),Object(n["g"])("div",lc,[uc,Object(n["G"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.last_name=t})},null,512),[[n["D"],a.last_name]])]),Object(n["g"])("div",dc,[bc,Object(n["G"])(Object(n["g"])("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.email=t})},null,512),[[n["D"],a.email]])]),Object(n["g"])("div",pc,[mc,Object(n["G"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.phone=t})},null,512),[[n["D"],a.phone]])]),Object(n["g"])("div",fc,[gc,Object(n["G"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.address=t}),maxlength:"250"},null,512),[[n["D"],a.address]])]),Object(n["g"])("div",Oc,[jc,Object(n["G"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(t){return a.zipcode=t})},null,512),[[n["D"],a.zipcode]])]),Object(n["g"])("div",hc,[vc,Object(n["G"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=function(t){return a.place=t}),maxlength:"250"},null,512),[[n["D"],a.place]])]),yc,Object(n["g"])("div",kc,null,512),wc])]),Object(n["g"])("div",xc,[Object(n["g"])("table",Ic,[Pc,Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(this.$store.state.cart,(function(t,e){return Object(n["s"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("th",Cc,Object(n["B"])(e+1),1),Object(n["g"])("td",null,Object(n["B"])(t.product.name),1),Object(n["g"])("td",null,"$"+Object(n["B"])(t.product.price),1),Object(n["g"])("td",null,Object(n["B"])(t.quantity),1),Object(n["g"])("td",null,"$"+Object(n["B"])(t.quantity*t.product.price),1)])})),128))])]),Object(n["g"])("div",$c,"Total: $"+Object(n["B"])(o.totalCartPrice),1)])])])])}var _c={name:"checkout",data:function(){return{loaded:!1,paidFor:!1,cart:[],items:[],first_name:"",last_name:"",email:"",phone:"",address:"",zipcode:"",place:"",token:"Ecommerce_",errors:[],totalPrice:0}},mounted:function(){this.cart=this.$store.state.cart,this.totalPrice=this.priceCounter(),this.generateToken(),this.collectItems(),this.mountPaypal()},computed:{totalCartPrice:function(){var t=0;return this.cart.map((function(e){t+=e.product.price*e.quantity})),t}},methods:{mountPaypal:function(){var t=document.createElement("script");t.src="https://www.paypal.com/sdk/js?client-id=AbzYFUyRQHaRRb0NQ6vsehobiGBGwcFjcJBlMIxrfbzy_mFH4nklge6-raop0Nk9YW2Ryulu9Z0yPI_z",t.addEventListener("load",this.setLoaded),document.body.appendChild(t)},setLoaded:function(){var t=this;this.loaded=!0,window.paypal.Buttons({createOrder:function(e,c){return c.order.create({purchase_units:[{description:t.token,amount:{currency_code:"USD",value:t.totalPrice}}]})},onApprove:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(c,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.order.capture();case 2:r=e.sent,t.data,t.paidFor=!0,console.log(r),t.orderHandler();case 7:case"end":return e.stop()}}),e)})));function c(t,c){return e.apply(this,arguments)}return c}(),onError:function(t){console.log(t)}}).render(this.$refs.paypal)},orderHandler:function(){var t=this,e={first_name:this.first_name,last_name:this.last_name,email:this.email,phone:this.phone,address:this.address,zipcode:this.zipcode,place:this.place,token:this.token,paid_amount:this.totalPrice,items:this.items};i.a.post("orders/",e).then((function(){t.$router.push({name:"home"}),t.$store.commit("clearCart")})).catch((function(e){if(e.response){for(var c in e.response.data)t.errors.push("".concat(e.response.data[c]));console.log(JSON.stringify(e.response.data))}else e.message&&(t.error.push("Something went wrong. Please try later!"),console.log(JSON.stringify(e)))}))},collectItems:function(){var t=this;this.cart.map((function(e){var c={product:e.product.id,price:e.product.price,quantity:e.quantity};t.items.push(c)}))},priceCounter:function(){var t=0;return this.cart.map((function(e){t+=e.product.price*e.quantity})),t},generateToken:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",e="",c=0;c<20;c++)e+=t[this.random(0,t.length)];this.token+=e},random:function(t,e){return Math.floor(Math.random()*(e-t))+t}}};c("de57");const Bc=J()(_c,[["render",Sc],["__scopeId","data-v-fde7bc80"]]);var Hc=Bc,qc=[{path:"/",name:"home",component:_t},{path:"/about",name:"about",component:Nt},{path:"/login",name:"login",component:te},{path:"/profile",name:"profile",component:ae,meta:{requireLogin:!0}},{path:"/shop/:id/",name:"singleProduct",component:Ne},{path:"/cart",name:"cart",component:tc},{path:"/checkout",name:"checkout",component:Hc,meta:{requireLogin:!0}}],Rc=Object(A["a"])({history:Object(A["b"])(),routes:qc});Rc.beforeEach((function(t,e,c){t.matched.some((function(t){return t.meta.requireLogin}))&&!M.state.token?c({name:"login",query:{to:t.path}}):c()}));var Fc=Rc;c("ab8b"),c("7b17"),c("7d05");i.a.defaults.baseURL="himelbikon.pythonanywhere.com/api",localStorage.getItem("token")&&(i.a.defaults.headers.common={Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}),Object(n["c"])(G).use(Fc).use(M).mount("#app")},"7d05":function(t,e,c){},"8dc1":function(t,e,c){"use strict";c("eb5d")},"8f54":function(t,e,c){"use strict";c("23e5")},9085:function(t,e,c){},a684:function(t,e,c){"use strict";c("9085")},baab:function(t,e,c){},db11:function(t,e,c){"use strict";c("3ba8")},de57:function(t,e,c){"use strict";c("baab")},e296:function(t,e,c){t.exports=c.p+"img/png.983df018.png"},eb5d:function(t,e,c){}});
//# sourceMappingURL=app.4b0eee44.js.map