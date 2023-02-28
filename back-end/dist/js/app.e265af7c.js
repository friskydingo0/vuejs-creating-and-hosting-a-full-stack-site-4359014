(function(){"use strict";var t={3330:function(t,r,n){var e=n(9242),o=n(3396);const a={class:"page-wrap"};function s(t,r,n,e,s,i){const c=(0,o.up)("NavBar"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{user:s.user},null,8,["user"]),(0,o._)("div",a,[(0,o.Wm)(u,{user:s.user},null,8,["user"])])],64)}var i=n(9125);const c={class:"nav-bar"},u={class:"logo-wrap"},d=["src"],l={class:"nav-buttons-wrap"},p=(0,o._)("button",null,"Shopping Cart",-1);function m(t,r,n,e,a,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(i,{to:"/products",class:"products-link"},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o._)("img",{src:a.logo},null,8,d)])])),_:1}),(0,o._)("div",l,[n.user?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.kq)("",!0),(0,o.Wm)(i,{to:"/cart"},{default:(0,o.w5)((()=>[p])),_:1})])])}var g=n.p+"img/logo-hexagon.d2768201.svg",h={name:"NavBar",props:["user"],data(){return{logo:g}},methods:{signOut(){const t=(0,i.v0)();(0,i.w7)(t)}}},f=n(89);const v=(0,f.Z)(h,[["render",m]]);var w=v,I={name:"App",components:{NavBar:w},data(){return{user:null}},created(){const t=(0,i.v0)();(0,i.Aj)(t,(t=>{this.user=t}))}};const y=(0,f.Z)(I,[["render",s]]);var k=y,b=n(2483);const _=(0,o._)("h1",null,"Shopping Cart",-1),C={key:0},D=(0,o._)("button",{class:"checkout-button"},"Proceed to Checkout",-1),P={key:1};function O(t,r,n,e,a,s){const i=(0,o.up)("ShoppingCartList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[_,a.cartItems.length>0?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(i,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"]),D])):(0,o.kq)("",!0),0===a.cartItems.length?((0,o.wg)(),(0,o.iD)("div",P," You current have no items in your cart! ")):(0,o.kq)("",!0)],64)}var S=n(6943),Z=n(7139);const F=["src"],$={class:"details-wrap"},A=["onClick"];function N(t,r,n,e,a,s){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.products,(r=>((0,o.wg)(),(0,o.iD)("div",{class:"product-container",key:r.id},[(0,o._)("img",{class:"product-image",src:r.imageUrl},null,8,F),(0,o._)("div",$,[(0,o._)("h3",null,(0,Z.zw)(r.name),1),(0,o._)("p",null,(0,Z.zw)(r.price),1)]),(0,o._)("button",{onClick:n=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,A)])))),128)}var j={name:"ShoppingCartList",props:["products"]};const T=(0,f.Z)(j,[["render",N]]);var H=T,R={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:H},data(){return{cartItems:[]}},watch:{async user(t){if(console.log("Changed!"),console.log(t),t){const r=await S.Z.get(`/api/users/${t.uid}/cart`),n=r.data;this.cartItems=n}}},methods:{async removeFromCart(t){const r=await S.Z["delete"](`/api/users/${this.user.uid}/cart/${t}`),n=r.data;this.cartItems=n}},async created(){if(console.log(this.user),this.user){const t=await S.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const z=(0,f.Z)(R,[["render",O]]);var B=z;const E=(0,o._)("h1",null,"Products",-1);function L(t,r,n,e,a,s){const i=(0,o.up)("ProductsList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[E,(0,o.Wm)(i,{products:a.products},null,8,["products"])],64)}const W={class:"grid-wrap"},Y=["src"],q={class:"product-name"},x={class:"product-price"},U=(0,o._)("button",null,"View Details",-1);function K(t,r,n,e,a,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",W,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"product-item",key:t.id},[(0,o._)("img",{src:t.imageUrl},null,8,Y),(0,o._)("h3",q,(0,Z.zw)(t.name),1),(0,o._)("p",x,(0,Z.zw)(t.price),1),(0,o.Wm)(i,{to:"/products/"+t.id},{default:(0,o.w5)((()=>[U])),_:2},1032,["to"])])))),128))])}var G={name:"ProductsList",props:["products"]};const M=(0,f.Z)(G,[["render",K]]);var Q=M,J={name:"ProductsPage",components:{ProductsList:Q},data(){return{products:[]}},async created(){const t=await S.Z.get("/api/products"),r=t.data;this.products=r}};const V=(0,f.Z)(J,[["render",L]]);var X=V;const tt={key:0},rt={class:"img-wrap"},nt=["src"],et={class:"product-details"},ot={class:"price"},at={key:1,class:"grey-button"},st={key:1};function it(t,r,n,e,a,s){const i=(0,o.up)("NotFoundPage");return a.product?((0,o.wg)(),(0,o.iD)("div",tt,[(0,o._)("div",rt,[(0,o._)("img",{src:a.product.imageUrl},null,8,nt)]),(0,o._)("div",et,[(0,o._)("h1",null,(0,Z.zw)(a.product.name),1),(0,o._)("h3",ot,(0,Z.zw)(a.product.price),1),n.user&&!s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"}," Add to cart ")):(0,o.kq)("",!0),n.user&&s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",at," Item is already in cart ")):(0,o.kq)("",!0),n.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))}," Sign in to add to cart "))])])):((0,o.wg)(),(0,o.iD)("div",st,[(0,o.Wm)(i)]))}function ct(t,r,n,e,a,s){return(0,o.wg)(),(0,o.iD)("h1",null,"404: Page Not Found")}var ut={name:"NotFoundPage"};const dt=(0,f.Z)(ut,[["render",ct]]);var lt=dt,pt={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:[]}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},watch:{async user(t){if(t){const r=await S.Z.get(`/api/users/${t.uid}/cart`),n=r.data;this.cartItems=n}}},methods:{async addToCart(){await S.Z.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),r=(0,i.v0)(),n={url:"<THE URL OF THE APPLICATION YOU CREATED IN THE RENDER DASHBOARD>",handleCodeInApp:!0};await(0,i.oo)(r,t,n),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},components:{NotFoundPage:lt},async created(){const t=(0,i.v0)();if((0,i.JB)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,i.P6)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await S.Z.get(`/api/products/${this.$route.params.productId}`),n=r.data;if(this.product=n,this.user){const t=await S.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const mt=(0,f.Z)(pt,[["render",it]]);var gt=mt,ht=n(7795);const ft={apiKey:"AIzaSyBQ6ak2u7zhyRRBf2iNF9jGxsPQjKtkGg0",authDomain:"vue-site-301f8.firebaseapp.com",projectId:"vue-site-301f8",storageBucket:"vue-site-301f8.appspot.com",messagingSenderId:"127414253778",appId:"1:127414253778:web:645d4ec8ef61a2e22b550b"};(0,ht.ZF)(ft),(0,e.ri)(k).use(b.p7({history:b.PO("/"),routes:[{path:"/cart",component:B},{path:"/products",component:X},{path:"/products/:productId",component:gt},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:lt}]})).mount("#app")}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(r,e,o,a){if(!e){var s=1/0;for(d=0;d<t.length;d++){e=t[d][0],o=t[d][1],a=t[d][2];for(var i=!0,c=0;c<e.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](e[c])}))?e.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[e,o,a]}}(),function(){n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,{a:r}),r}}(),function(){n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,a,s=e[0],i=e[1],c=e[2],u=0;if(s.some((function(r){return 0!==t[r]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var d=c(n)}for(r&&r(e);u<s.length;u++)a=s[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},e=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(3330)}));e=n.O(e)})();
//# sourceMappingURL=app.e265af7c.js.map