"use strict";(self.webpackChunklanding_page=self.webpackChunklanding_page||[]).push([[390],{390:(We,z,y)=>{y.r(z),y.d(z,{ProjectsModule:()=>$e});var w=y(814),I=y(472),s=y(946),B=y(96),de=y(715),ue=y(592),pe=y(328),he=y(181),S=y(398),q=y(716),fe=y(535);class M{}class O{}class b{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const o=t.slice(0,r),a=o.toLowerCase(),i=t.slice(r+1).trim();this.maybeSetNormalizedName(o,a),this.headers.has(a)?this.headers.get(a).push(i):this.headers.set(a,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof b?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new b;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof b?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const o=("a"===e.op?this.headers.get(t):void 0)||[];o.push(...r),this.headers.set(t,o);break;case"d":const a=e.value;if(a){let i=this.headers.get(t);if(!i)return;i=i.filter(u=>-1===a.indexOf(u)),0===i.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(e,t){const r=(Array.isArray(t)?t:[t]).map(a=>a.toString()),o=e.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(e,o)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class ye{encodeKey(e){return V(e)}encodeValue(e){return V(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const ge=/%(\d[a-f0-9])/gi,ve={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function V(n){return encodeURIComponent(n).replace(ge,(e,t)=>ve[t]??e)}function N(n){return`${n}`}class C{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ye,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function me(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(o=>{const a=o.indexOf("="),[i,u]=-1==a?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,a)),e.decodeValue(o.slice(a+1))],c=t.get(i)||[];c.push(u),t.set(i,c)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],o=Array.isArray(r)?r.map(N):[N(r)];this.map.set(t,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const o=e[r];Array.isArray(o)?o.forEach(a=>{t.push({param:r,value:a,op:"a"})}):t.push({param:r,value:o,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new C({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(N(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const o=r.indexOf(N(e.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class be{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function K(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function G(n){return typeof Blob<"u"&&n instanceof Blob}function Z(n){return typeof FormData<"u"&&n instanceof FormData}class x{constructor(e,t,r,o){let a;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function Ce(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,a=o):a=r,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params)),this.headers||(this.headers=new b),this.context||(this.context=new be),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=t;else{const u=t.indexOf("?");this.urlWithParams=t+(-1===u?"?":u<t.length-1?"&":"")+i}}else this.params=new C,this.urlWithParams=t}serializeBody(){return null===this.body?null:K(this.body)||G(this.body)||Z(this.body)||function Ee(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof C?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Z(this.body)?null:G(this.body)?this.body.type||null:K(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof C?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,o=e.responseType||this.responseType,a=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,u=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let c=e.headers||this.headers,m=e.params||this.params;const P=e.context??this.context;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce((g,v)=>g.set(v,e.setHeaders[v]),c)),e.setParams&&(m=Object.keys(e.setParams).reduce((g,v)=>g.set(v,e.setParams[v]),m)),new x(t,r,a,{params:m,headers:c,context:P,reportProgress:u,responseType:o,withCredentials:i})}}var h=(()=>((h=h||{})[h.Sent=0]="Sent",h[h.UploadProgress=1]="UploadProgress",h[h.ResponseHeader=2]="ResponseHeader",h[h.DownloadProgress=3]="DownloadProgress",h[h.Response=4]="Response",h[h.User=5]="User",h))();class j{constructor(e,t=200,r="OK"){this.headers=e.headers||new b,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class D extends j{constructor(e={}){super(e),this.type=h.ResponseHeader}clone(e={}){return new D({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class R extends j{constructor(e={}){super(e),this.type=h.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new R({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class $ extends j{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function _(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let W=(()=>{class n{constructor(t){this.handler=t}request(t,r,o={}){let a;if(t instanceof x)a=t;else{let c,m;c=o.headers instanceof b?o.headers:new b(o.headers),o.params&&(m=o.params instanceof C?o.params:new C({fromObject:o.params})),a=new x(t,r,void 0!==o.body?o.body:null,{headers:c,context:o.context,params:m,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const i=(0,B.of)(a).pipe((0,pe.b)(c=>this.handler.handle(c)));if(t instanceof x||"events"===o.observe)return i;const u=i.pipe((0,he.h)(c=>c instanceof R));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return u.pipe((0,S.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return u.pipe((0,S.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return u.pipe((0,S.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return u.pipe((0,S.U)(c=>c.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new C).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,o={}){return this.request("PATCH",t,_(o,r))}post(t,r,o={}){return this.request("POST",t,_(o,r))}put(t,r,o={}){return this.request("PUT",t,_(o,r))}}return n.\u0275fac=function(t){return new(t||n)(s.LFG(M))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();function ee(n,e){return e(n)}function we(n,e){return(t,r)=>e.intercept(t,{handle:o=>n(o,r)})}const Pe=new s.OlP(""),H=new s.OlP(""),te=new s.OlP("");function xe(){let n=null;return(e,t)=>{null===n&&(n=((0,s.f3M)(Pe,{optional:!0})??[]).reduceRight(we,ee));const r=(0,s.f3M)(s.HDt),o=r.add();return n(e,t).pipe((0,q.x)(()=>r.remove(o)))}}let ne=(()=>{class n extends M{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,s.f3M)(s.HDt)}handle(t){if(null===this.chain){const o=Array.from(new Set([...this.injector.get(H),...this.injector.get(te,[])]));this.chain=o.reduceRight((a,i)=>function Re(n,e,t){return(r,o)=>t.runInContext(()=>e(r,a=>n(a,o)))}(a,i,this.injector),ee)}const r=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe((0,q.x)(()=>this.pendingTasks.remove(r)))}}return n.\u0275fac=function(t){return new(t||n)(s.LFG(O),s.LFG(s.lqb))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();const Me=/^\)\]\}',?\n/;let se=(()=>{class n{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new s.vHH(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,de.D)(r.\u0275loadImpl()):(0,B.of)(null)).pipe((0,fe.w)(()=>new ue.y(a=>{const i=r.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((d,p)=>i.setRequestHeader(d,p.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const d=t.detectContentTypeHeader();null!==d&&i.setRequestHeader("Content-Type",d)}if(t.responseType){const d=t.responseType.toLowerCase();i.responseType="json"!==d?d:"text"}const u=t.serializeBody();let c=null;const m=()=>{if(null!==c)return c;const d=i.statusText||"OK",p=new b(i.getAllResponseHeaders()),T=function Oe(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(i)||t.url;return c=new D({headers:p,status:i.status,statusText:d,url:T}),c},P=()=>{let{headers:d,status:p,statusText:T,url:X}=m(),f=null;204!==p&&(f=typeof i.response>"u"?i.responseText:i.response),0===p&&(p=f?200:0);let A=p>=200&&p<300;if("json"===t.responseType&&"string"==typeof f){const U=f;f=f.replace(Me,"");try{f=""!==f?JSON.parse(f):null}catch(le){f=U,A&&(A=!1,f={error:le,text:f})}}A?(a.next(new R({body:f,headers:d,status:p,statusText:T,url:X||void 0})),a.complete()):a.error(new $({error:f,headers:d,status:p,statusText:T,url:X||void 0}))},g=d=>{const{url:p}=m(),T=new $({error:d,status:i.status||0,statusText:i.statusText||"Unknown Error",url:p||void 0});a.error(T)};let v=!1;const J=d=>{v||(a.next(m()),v=!0);let p={type:h.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(p.total=d.total),"text"===t.responseType&&i.responseText&&(p.partialText=i.responseText),a.next(p)},k=d=>{let p={type:h.UploadProgress,loaded:d.loaded};d.lengthComputable&&(p.total=d.total),a.next(p)};return i.addEventListener("load",P),i.addEventListener("error",g),i.addEventListener("timeout",g),i.addEventListener("abort",g),t.reportProgress&&(i.addEventListener("progress",J),null!==u&&i.upload&&i.upload.addEventListener("progress",k)),i.send(u),a.next({type:h.Sent}),()=>{i.removeEventListener("error",g),i.removeEventListener("abort",g),i.removeEventListener("load",P),i.removeEventListener("timeout",g),t.reportProgress&&(i.removeEventListener("progress",J),null!==u&&i.upload&&i.upload.removeEventListener("progress",k)),i.readyState!==i.DONE&&i.abort()}})))}}return n.\u0275fac=function(t){return new(t||n)(s.LFG(w.JF))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();const L=new s.OlP("XSRF_ENABLED"),oe=new s.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),ie=new s.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class ae{}let Ae=(()=>{class n{constructor(t,r,o){this.doc=t,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,w.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return n.\u0275fac=function(t){return new(t||n)(s.LFG(w.K0),s.LFG(s.Lbi),s.LFG(oe))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();function Ie(n,e){const t=n.url.toLowerCase();if(!(0,s.f3M)(L)||"GET"===n.method||"HEAD"===n.method||t.startsWith("http://")||t.startsWith("https://"))return e(n);const r=(0,s.f3M)(ae).getToken(),o=(0,s.f3M)(ie);return null!=r&&!n.headers.has(o)&&(n=n.clone({headers:n.headers.set(o,r)})),e(n)}var l=(()=>((l=l||{})[l.Interceptors=0]="Interceptors",l[l.LegacyInterceptors=1]="LegacyInterceptors",l[l.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",l[l.NoXsrfProtection=3]="NoXsrfProtection",l[l.JsonpSupport=4]="JsonpSupport",l[l.RequestsMadeViaParent=5]="RequestsMadeViaParent",l[l.Fetch=6]="Fetch",l))();function E(n,e){return{\u0275kind:n,\u0275providers:e}}function je(...n){const e=[W,se,ne,{provide:M,useExisting:ne},{provide:O,useExisting:se},{provide:H,useValue:Ie,multi:!0},{provide:L,useValue:!0},{provide:ae,useClass:Ae}];for(const t of n)e.push(...t.\u0275providers);return(0,s.MR2)(e)}const ce=new s.OlP("LEGACY_INTERCEPTOR_FN");let _e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[je(E(l.LegacyInterceptors,[{provide:ce,useFactory:xe},{provide:H,useExisting:ce,multi:!0}]))]}),n})(),Be=(()=>{class n{constructor(){this.card={title:"",description:"",imgUrl:"",action:""}}open(t){window.open(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-card-visualization"]],inputs:{card:"card"},decls:3,vars:4,consts:[[1,"normal_text"],[1,"card",3,"click"]],template:function(t,r){1&t&&(s.TgZ(0,"p",0),s._uU(1),s.qZA(),s.TgZ(2,"div",1),s.NdJ("click",function(){return r.open(r.card.action)}),s.qZA()),2&t&&(s.xp6(1),s.Oqu(r.card.title),s.xp6(1),s.Jzz("background-image: url(",r.card.imgUrl,");"))},styles:[".normal_text[_ngcontent-%COMP%]{color:#e7e7e7;font-size:16px;margin-top:42px}.card[_ngcontent-%COMP%]{background-color:#e7e7e7;width:24rem;height:13rem;position:relative;background-size:cover;cursor:pointer}"]}),n})();function qe(n,e){if(1&n&&(s.TgZ(0,"div",3),s._UZ(1,"app-card-visualization",4),s.qZA()),2&n){const t=e.$implicit;s.xp6(1),s.Q6J("card",t)}}let Ve=(()=>{class n{constructor(){this.data={header:"",cards:[]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-list-card-visualization"]],inputs:{data:"data"},decls:4,vars:2,consts:[[1,"header"],[1,"row",2,"margin-bottom","64px"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[3,"card"]],template:function(t,r){1&t&&(s.TgZ(0,"p",0),s._uU(1),s.qZA(),s.TgZ(2,"div",1),s.YNc(3,qe,2,1,"div",2),s.qZA()),2&t&&(s.xp6(1),s.Oqu(r.data.header),s.xp6(2),s.Q6J("ngForOf",r.data.cards))},dependencies:[w.sg,Be],styles:[".header[_ngcontent-%COMP%]{color:#efefef;font-weight:700;font-size:24px;margin-top:62px}"]}),n})();function Ke(n,e){1&n&&s._UZ(0,"app-list-card-visualization",6),2&n&&s.Q6J("data",e.$implicit)}const Ge=[{path:"",component:(()=>{class n{constructor(t){this.http=t,this.contentList=[],this.http.get("./../../../assets/projects.json").subscribe(r=>{console.log(r),this.contentList=r})}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(W))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-projects"]],decls:17,vars:1,consts:[[1,"container"],[1,"row",2,"margin-left","16px"],["routerLink","",1,"button_action"],[2,"color","yellow"],[1,"normal_text"],[3,"data",4,"ngFor","ngForOf"],[3,"data"]],template:function(t,r){1&t&&(s.TgZ(0,"div",0)(1,"div",1)(2,"button",2),s._uU(3,"back"),s.qZA(),s.TgZ(4,"p",3),s._uU(5,"PAGE IN CONSTRUCTION!"),s.qZA(),s.TgZ(6,"p",4)(7,"b"),s._uU(8,"+7 years"),s.qZA(),s._uU(9," working as Software Engineer with expertise using "),s.TgZ(10,"b"),s._uU(11,"Kotlin, Java, C#, TypeScript"),s.qZA(),s._uU(12," and "),s.TgZ(13,"b"),s._uU(14,"Dart"),s.qZA(),s._uU(15,". I also love Game and Graphic Design constantly working in Personal Projects for continuous learn process like this page "),s.qZA(),s.YNc(16,Ke,1,1,"app-list-card-visualization",5),s.qZA()()),2&t&&(s.xp6(16),s.Q6J("ngForOf",r.contentList))},dependencies:[w.sg,I.rH,Ve],styles:[".button_action[_ngcontent-%COMP%]{border:1px solid white;border-radius:90px;background-color:#09111400;color:#fff;padding:12px;margin-top:32px;width:100px}.normal_text[_ngcontent-%COMP%]{color:#e7e7e7;font-size:16px;margin-top:62px}.big_text[_ngcontent-%COMP%]{color:#efefef;font-weight:700;font-size:32px}"]}),n})()}];let Ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[I.Bz.forChild(Ge),I.Bz]}),n})(),$e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[w.ez,Ze,_e]}),n})()}}]);