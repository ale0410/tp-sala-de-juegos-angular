"use strict";(self.webpackChunktp_sala_de_juegos=self.webpackChunktp_sala_de_juegos||[]).push([[233],{5233:(st,m,u)=>{u.r(m),u.d(m,{JuegosModule:()=>at});var r=u(9808),l=u(5335),t=u(5e3),v=u(520);let _=(()=>{class o{constructor(e){this.httpClient=e,this.url="http://api.countrylayer.com/v2/all?access_key=",this.url1="https://restcountries.com/v2/all",this.url2="https://flagcdn.com/es/codes.json",this.urlPalabras="https://palabras-aleatorias-public-api.herokuapp.com/random",this.token="80ba5d7da42aaba1f6a6ae439fbd6be7"}getPaises(){return this.httpClient.get(this.url1)}getPalabras(){return this.httpClient.get(this.urlPalabras)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(v.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=u(1125),p=u(6893);const b=function(){return[""]};let d=(()=>{class o{constructor(){this.nombreJuego="",this.iniciarJuegoEvent=new t.vpe}ngOnInit(){}iniciarJuegoE(){this.iniciarJuegoEvent.emit()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-iniciar-juego"]],inputs:{nombreJuego:["nombre","nombreJuego"]},outputs:{iniciarJuegoEvent:"iniciarJuegoEvent"},decls:19,vars:3,consts:[[1,"container"],[1,"container-result"],[1,"d-flex","align-items-center","justify-content-center","container-card"],[1,"card","shadow","p-3","mb-5","bg-white","rounded",2,"width","25rem"],[1,"card-body"],[1,"card-title","text-center","text-uppercase"],[1,"divider-custom2"],[1,"divider-custom-line"],[1,"divider-custom-icon"],[1,"fa","fa-bullseye"],[1,"text-center","font-italic","mt-4","mb-4"],[1,"d-flex","justify-content-around"],[1,"btn","btn-custom",3,"click"],[1,"btn","btn-danger",3,"routerLink"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6),t._UZ(8,"div",7),t.TgZ(9,"div",8),t._UZ(10,"i",9),t.qZA(),t._UZ(11,"div",7),t.qZA(),t.TgZ(12,"h5",10),t._uU(13,"\xbfEst\xe1s listo?"),t.qZA(),t.TgZ(14,"div",11),t.TgZ(15,"button",12),t.NdJ("click",function(){return a.iniciarJuegoE()}),t._uU(16,"Iniciar"),t.qZA(),t.TgZ(17,"button",13),t._uU(18,"Salir"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Oqu(a.nombreJuego),t.xp6(11),t.Q6J("routerLink",t.DdM(2,b)))},directives:[l.rH],styles:[".container-result[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#2c3e50;opacity:.7;z-index:1}.container-card[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;z-index:2}.divider-custom2[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.divider-custom2[_ngcontent-%COMP%]   .divider-custom-line[_ngcontent-%COMP%]{width:30%;max-width:7rem;height:.25rem;background-color:#2c3e50;border-radius:1rem;border-color:#2c3e50}.divider-custom2[_ngcontent-%COMP%]   .divider-custom-line[_ngcontent-%COMP%]:first-child{margin-right:1rem}.divider-custom2[_ngcontent-%COMP%]   .divider-custom-line[_ngcontent-%COMP%]:last-child{margin-left:1rem}.divider-custom2[_ngcontent-%COMP%]   .divider-custom-icon[_ngcontent-%COMP%]{color:#2c3e50;font-size:2rem}.divider-custom2.divider-light[_ngcontent-%COMP%]   .divider-custom-line[_ngcontent-%COMP%]{background-color:#fff}.divider-custom2.divider-light[_ngcontent-%COMP%]   .divider-custom-icon[_ngcontent-%COMP%]{color:#fff}.btn-custom[_ngcontent-%COMP%]{background-color:#0c9}"]}),o})();function C(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t._UZ(3,"img",6),t.TgZ(4,"h3",7),t._uU(5,"Gan\xf3"),t.qZA(),t.qZA(),t.TgZ(6,"div",8),t.TgZ(7,"div",9),t.TgZ(8,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().flagGpIniciar=!1}),t._uU(9,"Continuar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function T(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t._UZ(3,"img",11),t.TgZ(4,"h3",7),t._uU(5,"Perdi\xf3"),t.qZA(),t.qZA(),t.TgZ(6,"div",8),t.TgZ(7,"div",9),t.TgZ(8,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().flagGpIniciar=!1}),t._uU(9,"Continuar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function x(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.jugador.ahorcado)}}function J(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.jugador.hitCarpincho)}}function j(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.jugador.mayorMenor)}}function M(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.jugador.preguntados)}}const P=function(){return[""]};function y(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",8),t.TgZ(3,"h5",12),t._uU(4,"Resultado"),t.qZA(),t.TgZ(5,"p",13),t._uU(6,"Jugador: "),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"p",13),t._uU(10,"Puntos: "),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.qZA(),t.TgZ(13,"p",14),t._uU(14,"Puntaje hist\xf3rico: "),t.YNc(15,x,2,1,"span",15),t.YNc(16,J,2,1,"span",15),t.YNc(17,j,2,1,"span",15),t.YNc(18,M,2,1,"span",15),t.qZA(),t.TgZ(19,"p",13),t._uU(20,"Puntaje total: "),t.TgZ(21,"span"),t._uU(22),t.qZA(),t.qZA(),t.TgZ(23,"div",9),t.TgZ(24,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().enviarEvento()}),t._uU(25,"Volver a jugar"),t.qZA(),t.TgZ(26,"button",16),t._uU(27,"Salir"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(8),t.Oqu(e.jugador.user),t.xp6(4),t.Oqu(e.jugador.puntosActuales),t.xp6(1),t.Q6J("ngSwitch",e.nombreJuego),t.xp6(2),t.Q6J("ngSwitchCase","Ahorcado"),t.xp6(1),t.Q6J("ngSwitchCase","Hit Carpincho"),t.xp6(1),t.Q6J("ngSwitchCase","Mayor o menor"),t.xp6(1),t.Q6J("ngSwitchCase","Preguntados"),t.xp6(4),t.Oqu(e.jugador.puntosTotales),t.xp6(4),t.Q6J("routerLink",t.DdM(9,P))}}let g=(()=>{class o{constructor(){this.flagGpIniciar=!1,this.flagG=!1,this.nombreJuego="",this.reiniciarJuegoEvent=new t.vpe,this.ganoPerdio=!0}ngOnInit(){}enviarEvento(){this.reiniciarJuegoEvent.emit()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-resultado"]],inputs:{flagGpIniciar:["flagGp","flagGpIniciar"],flagG:["flagGano","flagG"],jugador:["jugadorResult","jugador"],nombreJuego:["nombre","nombreJuego"]},outputs:{reiniciarJuegoEvent:"reiniciarJuegoEvent"},decls:5,vars:3,consts:[[1,"container"],[1,"container-result"],["class","d-flex align-items-center justify-content-center container-card",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-center","container-card"],[1,"card",2,"width","25rem"],[1,"card-header","d-flex","justify-content-center"],["src","../../../assets/icons/comprobado.png","alt","Ok"],[1,"card-title","text-center","text-uppercase","ml-5"],[1,"card-body"],[1,"d-flex","justify-content-around"],[1,"btn","btn-primary",3,"click"],["src","../../../assets/icons/cancelar.png","alt","No"],[1,"card-title","text-center","text-uppercase"],[1,"card-text"],[1,"card-text",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"btn","btn-primary",3,"routerLink"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.YNc(2,C,10,0,"div",2),t.YNc(3,T,10,0,"div",2),t.YNc(4,y,28,10,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",a.flagGpIniciar&&a.flagG),t.xp6(1),t.Q6J("ngIf",a.flagGpIniciar&&!a.flagG),t.xp6(1),t.Q6J("ngIf",!a.flagGpIniciar))},directives:[r.O5,r.RF,r.n9,l.rH],styles:[".container-result[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#000;opacity:.5;z-index:1}.container-card[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;z-index:2}.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:1.5rem;margin-top:1rem}img[_ngcontent-%COMP%]{width:20%}"]}),o})();function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-iniciar-juego",3),t.NdJ("iniciarJuegoEvent",function(){return t.CHM(e),t.oxw().iniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)}}function U(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",11),t.NdJ("click",function(){const n=t.CHM(e).$implicit;return t.oxw(2).seleccion(n)}),t._uU(2),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit;t.xp6(2),t.Oqu(e)}}function O(o,s){if(1&o&&(t.TgZ(0,"div",4),t.TgZ(1,"div"),t.TgZ(2,"h1",5),t._uU(3,"Preguntados"),t.qZA(),t.qZA(),t.TgZ(4,"div"),t.TgZ(5,"h2"),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t._UZ(8,"img",7),t.qZA(),t.TgZ(9,"div",8),t.YNc(10,U,3,1,"div",9),t.qZA(),t.TgZ(11,"div",10),t.TgZ(12,"h2"),t._uU(13,"ERRORES: "),t.TgZ(14,"span"),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(6),t.hij("PUNTOS: ",e.puntosActuales,""),t.xp6(2),t.s9C("src",e.paisSeleccionado.flag,t.LSH),t.s9C("alt",e.paisSeleccionado.translations.es),t.xp6(2),t.Q6J("ngForOf",e.arrayBtn),t.xp6(5),t.Oqu(e.errores)}}function E(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-resultado",12),t.NdJ("reiniciarJuegoEvent",function(){return t.CHM(e),t.oxw().reiniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)("flagGp",e.ganoPerdio)("flagGano",e.gano)("jugadorResult",e.jugador)}}let w=(()=>{class o{constructor(e,a,i){this.preguntadosSrv=e,this.jugadorSrv=a,this.authSrv=i,this.inicio=!1,this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.nombreJuego="Preguntados",this.listaJugadoresPuntaje=[],this.puntosActuales=0,this.puntosHistoricos=0,this.puntosTotales=0,this.puntosMayorMenor=0,this.puntosAhorcado=0,this.puntosHitC=0,this.referenciaIdColeccion="",this.errores=0,this.lista=[],this.index=0,this.alphaCode="",this.index1=0,this.index2=0,this.arrayBtn=[]}ngOnInit(){this.preguntadosSrv.getPaises().subscribe(e=>{this.lista=e,console.log(this.lista)}),this.obtenerJugador(),this.obtenerJugadoresPuntaje()}obtenerJugador(){this.authSrv.isLoggedIn().subscribe(e=>{this.user=e,console.log(this.user.email,this.user.uid)})}iniciarJuego(){this.inicio=!0,this.paisesAleatorio(),this.desordenarBotones()}reiniciarJuego(){this.errores=0,this.puntosActuales=0,this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.paisesAleatorio(),this.desordenarBotones()}finalizoJuego(){this.resultadocomp=!0,this.ganoPerdio=!0,this.gano=!1}paisesAleatorio(){this.lista.sort(()=>Math.random()-.5),this.index=Math.floor(Math.random()*this.lista.length),this.paisSeleccionado=this.lista[this.index],this.index1=Math.floor(Math.random()*(this.lista.length-20)),this.pais1=this.lista[this.index1],this.index2=Math.floor(Math.random()*(this.lista.length-10)),this.pais2=this.lista[this.index2]}desordenarBotones(){this.arrayBtn.push(this.paisSeleccionado.translations.es),this.arrayBtn.push(this.pais1.translations.es),this.arrayBtn.push(this.pais2.translations.es),this.arrayBtn.sort(()=>Math.random()-.5)}seleccion(e){e===this.paisSeleccionado.translations.es?this.puntosActuales++:(this.puntosActuales>0&&this.puntosActuales--,this.errores++),this.resetBotones(),this.errores<3?this.iniciarJuego():(this.altaResultados(),this.finalizoJuego())}resetBotones(){this.arrayBtn=[]}obtenerJugadoresPuntaje(){this.jugadorSrv.getAll("puntajes").then(e=>{e.subscribe(a=>{this.listaJugadoresPuntaje=a.map(i=>{let n=i.payload.doc.data();return n.uid=i.payload.doc.id,n})})})}altaResultados(){let e;this.listaJugadoresPuntaje.forEach(a=>{a.id==this.user.uid&&(e=a,this.referenciaIdColeccion=e.uid,this.puntosHistoricos=e.preguntados,this.puntosMayorMenor=e.mayorMenor,this.puntosAhorcado=e.ahorcado,this.puntosHitC=e.hitCarpincho,this.puntosTotales=e.puntosTotales)}),e?this.puntosHistoricos>this.puntosActuales?(this.gano=!1,this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosAhorcado,mayorMenor:this.puntosMayorMenor,preguntados:this.puntosHistoricos,hitCarpincho:this.puntosHitC,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.gano=!0,this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosAhorcado,mayorMenor:this.puntosMayorMenor,preguntados:this.puntosActuales,hitCarpincho:this.puntosHitC,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.gano=!0,this.jugador={id:this.user.uid,user:this.user.email,ahorcado:0,mayorMenor:0,preguntados:this.puntosActuales,hitCarpincho:0,puntosActuales:this.puntosActuales,puntosTotales:this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.alta(this.jugador,"puntajes"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(c.w),t.Y36(p.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-preguntados"]],decls:3,vars:3,consts:[[3,"nombre","iniciarJuegoEvent",4,"ngIf"],["class","container text-center",4,"ngIf"],[3,"nombre","flagGp","flagGano","jugadorResult","reiniciarJuegoEvent",4,"ngIf"],[3,"nombre","iniciarJuegoEvent"],[1,"container","text-center"],[1,"font-weight-bold","mb-4"],[1,"d-flex","justify-content-around","card-container"],[1,"rounded","mx-auto","d-block","shadow-lg","p-1","mb-5","bg-dark","rounded",2,"width","40%","height","200px",3,"src","alt"],[1,"d-flex","justify-content-between","botones","m-4"],[4,"ngFor","ngForOf"],[1,""],[1,"btn","btn-outline-primary",3,"click"],[3,"nombre","flagGp","flagGano","jugadorResult","reiniciarJuegoEvent"]],template:function(e,a){1&e&&(t.YNc(0,q,1,1,"app-iniciar-juego",0),t.YNc(1,O,16,5,"div",1),t.YNc(2,E,1,4,"app-resultado",2)),2&e&&(t.Q6J("ngIf",!a.inicio),t.xp6(1),t.Q6J("ngIf",a.inicio),t.xp6(1),t.Q6J("ngIf",a.resultadocomp))},directives:[r.O5,d,r.sg,g],styles:[".container-inicio[_ngcontent-%COMP%]{height:80vh}.container[_ngcontent-%COMP%]{margin-top:30px}"]}),o})();var f=u(4986),I=u(8306),S=u(3532);function A(o=0,s,e=f.P){let a=-1;return null!=s&&((0,S.K)(s)?e=s:a=s),new I.y(i=>{let n=function H(o){return o instanceof Date&&!isNaN(o)}(o)?+o-e.now():o;n<0&&(n=0);let h=0;return e.schedule(function(){i.closed||(i.next(h++),0<=a?this.schedule(void 0,a):i.complete())},n)})}function Z(o=0,s=f.z){return o<0&&(o=0),A(o,o,s)}function R(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-iniciar-juego",12),t.NdJ("iniciarJuegoEvent",function(){return t.CHM(e),t.oxw().iniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)}}function G(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.NdJ("click",function(){const n=t.CHM(e).$implicit;return t.oxw().golpeCarpincho(n)}),t.qZA()}2&o&&t.Q6J("ngClass","carpincho"==s.$implicit?"carpincho":"cuadrado")}function N(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-resultado",14),t.NdJ("reiniciarJuegoEvent",function(){return t.CHM(e),t.oxw().reiniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)("flagGp",e.ganoPerdio)("flagGano",e.gano)("jugadorResult",e.jugador)}}const k=function(o){return{color:o}};let F=(()=>{class o{constructor(e,a){this.jugadorSrv=e,this.authSrv=a,this.nombreJuego="Hit Carpincho",this.lista=["","","","","","","","carpincho","","","","","","","","","","","",""],this.tiempoRestante=60,this.tiempo=1e3,this.timer=Z(1e3),this.timerCarpincho=Z(this.tiempo),this.inicio=!1,this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.listaJugadoresPuntaje=[],this.puntosActuales=0,this.puntosHistoricos=0,this.puntosTotales=0,this.puntosMayorMenor=0,this.puntosPreguntados=0,this.puntosAhorcado=0,this.referenciaIdColeccion=""}ngOnInit(){this.obtenerJugador(),this.obtenerJugadoresPuntaje()}randomSquare(){this.lista=this.lista.sort(()=>Math.random()-.5)}countDown(){let e=this.timer.subscribe(()=>{this.tiempoRestante-=1,this.tiempoRestante<=0&&e.unsubscribe()})}iniciarJuego(){this.inicio=!0,this.countDown();let e=this.timerCarpincho.subscribe(()=>{this.randomSquare(),this.tiempoRestante<=0&&(e.unsubscribe(),this.altaResultados(),this.finalizarJuego())})}reiniciarJuego(){this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.tiempoRestante=60,this.puntosActuales=0,this.iniciarJuego()}finalizarJuego(){this.resultadocomp=!0,this.ganoPerdio=!0,this.altaResultados()}golpeCarpincho(e){"carpincho"==e&&this.puntosActuales++,this.puntosActuales>9&&this.puntosActuales<=19&&(this.tiempo=this.tiempo/2),this.puntosActuales>19&&this.puntosActuales<=29&&(this.tiempo=this.tiempo/3),this.puntosActuales>29&&this.puntosActuales<=39&&(this.tiempo=this.tiempo/4),this.puntosActuales>39&&this.puntosActuales<=49&&(this.tiempo=this.tiempo/5),this.puntosActuales>49&&this.puntosActuales<=59&&(this.tiempo=this.tiempo/6)}obtenerJugador(){this.authSrv.isLoggedIn().subscribe(e=>{this.user=e,console.log(this.user.email,this.user.uid)})}obtenerJugadoresPuntaje(){this.jugadorSrv.getAll("puntajes").then(e=>{e.subscribe(a=>{this.listaJugadoresPuntaje=a.map(i=>{let n=i.payload.doc.data();return n.uid=i.payload.doc.id,n})})})}altaResultados(){let e;this.listaJugadoresPuntaje.forEach(a=>{(a.id=this.user.uid)&&(e=a,this.referenciaIdColeccion=e.uid,this.puntosHistoricos=e.hitCarpincho,this.puntosMayorMenor=e.mayorMenor,this.puntosPreguntados=e.preguntados,this.puntosAhorcado=e.ahorcado,this.puntosTotales=e.puntosTotales)}),console.log(this.puntosHistoricos),e?this.puntosHistoricos>this.puntosActuales?(this.gano=!1,this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosAhorcado,mayorMenor:this.puntosMayorMenor,preguntados:this.puntosPreguntados,hitCarpincho:this.puntosHistoricos,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.gano=!0,this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosAhorcado,mayorMenor:this.puntosMayorMenor,preguntados:this.puntosPreguntados,hitCarpincho:this.puntosActuales,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:0,mayorMenor:0,preguntados:0,hitCarpincho:this.puntosActuales,puntosActuales:this.puntosActuales,puntosTotales:this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.alta(this.jugador,"puntajes"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.w),t.Y36(p.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-golpear-carpincho"]],decls:20,vars:8,consts:[[3,"nombre","iniciarJuegoEvent",4,"ngIf"],[1,"container","text-center"],[1,"text-secondary","text-uppercase","mb-0"],[1,"divider-custom"],[1,"divider-custom-line"],[1,"divider-custom-icon"],[1,"fa","fa-bullseye"],[3,"ngStyle"],[1,"grid","justify-content-center","col-3","m-3"],["class","",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"text-cente","mt-4"],[3,"nombre","flagGp","flagGano","jugadorResult","reiniciarJuegoEvent",4,"ngIf"],[3,"nombre","iniciarJuegoEvent"],[1,"",3,"ngClass","click"],[3,"nombre","flagGp","flagGano","jugadorResult","reiniciarJuegoEvent"]],template:function(e,a){1&e&&(t.YNc(0,R,1,1,"app-iniciar-juego",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"Hit Carpincho"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"div",4),t.TgZ(6,"div",5),t._UZ(7,"i",6),t.qZA(),t._UZ(8,"div",4),t.qZA(),t.TgZ(9,"div"),t.TgZ(10,"h3"),t._uU(11,"TIEMPO RESTANTE: "),t.TgZ(12,"span",7),t._uU(13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",8),t.YNc(15,G,1,1,"div",9),t.qZA(),t.TgZ(16,"div",10),t.TgZ(17,"h3"),t._uU(18),t.qZA(),t.qZA(),t.qZA(),t.YNc(19,N,1,4,"app-resultado",11)),2&e&&(t.Q6J("ngIf",!a.inicio),t.xp6(12),t.Q6J("ngStyle",t.VKq(6,k,a.tiempoRestante<=5?"red":"black")),t.xp6(1),t.Oqu(a.tiempoRestante),t.xp6(2),t.Q6J("ngForOf",a.lista),t.xp6(3),t.hij("PUNTOS: ",a.puntosActuales,""),t.xp6(1),t.Q6J("ngIf",a.resultadocomp))},directives:[r.O5,r.PC,r.sg,d,r.mk,g],styles:[".container[_ngcontent-%COMP%]{margin-top:1rem}.grid[_ngcontent-%COMP%]{width:40%;margin-left:30%!important;height:60%;display:flex;flex-wrap:wrap}.cuadrado[_ngcontent-%COMP%], .carpincho[_ngcontent-%COMP%]{height:100px;width:100px;border:solid black 1px;border-radius:3px;background-color:#7fffd4}.carpincho[_ngcontent-%COMP%]{background-image:url(carpincho.b0d828006e279dfa.jpg);background-size:cover}.carpincho[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),o})();function z(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-iniciar-juego",3),t.NdJ("iniciarJuegoEvent",function(){return t.CHM(e),t.oxw().iniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)}}function Q(o,s){1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",16),t.qZA())}function Y(o,s){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",8),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.s9C("src",e.cartaInvisible.imagenUrl,t.LSH)}}function L(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"div"),t.TgZ(2,"h1",5),t._uU(3,"Mayor o menor"),t.qZA(),t.qZA(),t.TgZ(4,"div"),t.TgZ(5,"h1"),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t._UZ(9,"img",8),t.qZA(),t.TgZ(10,"div",9),t.YNc(11,Q,2,0,"div",10),t.YNc(12,Y,2,1,"div",10),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().elegirAccion("mayor")}),t._uU(15,"MAYOR"),t.qZA(),t.TgZ(16,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().elegirAccion("igual")}),t._uU(17,"IGUAL"),t.qZA(),t.TgZ(18,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().elegirAccion("menor")}),t._uU(19,"MENOR"),t.qZA(),t.qZA(),t.TgZ(20,"div",15),t.TgZ(21,"h1"),t._uU(22,"ERRORES: "),t.TgZ(23,"span"),t._uU(24),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(6),t.hij("PUNTOS: ",e.puntosActuales,""),t.xp6(3),t.s9C("src",e.cartaVisible.imagenUrl,t.LSH),t.xp6(2),t.Q6J("ngIf",!e.carta),t.xp6(1),t.Q6J("ngIf",e.carta),t.xp6(12),t.Oqu(e.errores)}}function B(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-resultado",17),t.NdJ("reiniciarJuegoEvent",function(){return t.CHM(e),t.oxw().reiniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)("flagGp",e.ganoPerdio)("flagGano",e.gano)("jugadorResult",e.jugador)}}let D=(()=>{class o{constructor(e,a){this.jugadorSrv=e,this.userSrv=a,this.inicio=!1,this.carta=!1,this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.nombreJuego="Mayor o menor",this.listaCartas=[{palo:"oro",numero:1,imagenUrl:"../../../assets/imagenes/cartas/Oro/1_oro.png"},{palo:"oro",numero:2,imagenUrl:"../../../assets/imagenes/cartas/Oro/2_oro.png"},{palo:"oro",numero:3,imagenUrl:"../../../assets/imagenes/cartas/Oro/3_oro.png"},{palo:"oro",numero:4,imagenUrl:"../../../assets/imagenes/cartas/Oro/4_oro.png"},{palo:"oro",numero:5,imagenUrl:"../../../assets/imagenes/cartas/Oro/5_oro.png"},{palo:"oro",numero:6,imagenUrl:"../../../assets/imagenes/cartas/Oro/6_oro.png"},{palo:"oro",numero:7,imagenUrl:"../../../assets/imagenes/cartas/Oro/7_oro.png"},{palo:"oro",numero:8,imagenUrl:"../../../assets/imagenes/cartas/Oro/8_oro.png"},{palo:"oro",numero:9,imagenUrl:"../../../assets/imagenes/cartas/Oro/9_oro.png"},{palo:"oro",numero:10,imagenUrl:"../../../assets/imagenes/cartas/Oro/10_oro.png"},{palo:"oro",numero:11,imagenUrl:"../../../assets/imagenes/cartas/Oro/11_oro.png"},{palo:"oro",numero:12,imagenUrl:"../../../assets/imagenes/cartas/Oro/12_oro.png"},{palo:"copa",numero:1,imagenUrl:"../../../assets/imagenes/cartas/Copa/1_copa.png"},{palo:"copa",numero:2,imagenUrl:"../../../assets/imagenes/cartas/Copa/2_copa.png"},{palo:"copa",numero:3,imagenUrl:"../../../assets/imagenes/cartas/Copa/3_copa.png"},{palo:"copa",numero:4,imagenUrl:"../../../assets/imagenes/cartas/Copa/4_copa.png"},{palo:"copa",numero:5,imagenUrl:"../../../assets/imagenes/cartas/Copa/5_copa.png"},{palo:"copa",numero:6,imagenUrl:"../../../assets/imagenes/cartas/Copa/6_copa.png"},{palo:"copa",numero:7,imagenUrl:"../../../assets/imagenes/cartas/Copa/7_copa.png"},{palo:"copa",numero:8,imagenUrl:"../../../assets/imagenes/cartas/Copa/8_copa.png"},{palo:"copa",numero:9,imagenUrl:"../../../assets/imagenes/cartas/Copa/9_copa.png"},{palo:"copa",numero:10,imagenUrl:"../../../assets/imagenes/cartas/Copa/10_copa.png"},{palo:"copa",numero:11,imagenUrl:"../../../assets/imagenes/cartas/Copa/11_copa.png"},{palo:"copa",numero:12,imagenUrl:"../../../assets/imagenes/cartas/Copa/12_copa.png"},{palo:"espada",numero:1,imagenUrl:"../../../assets/imagenes/cartas/Espada/1_espada.png"},{palo:"espada",numero:2,imagenUrl:"../../../assets/imagenes/cartas/Espada/2_espada.png"},{palo:"espada",numero:3,imagenUrl:"../../../assets/imagenes/cartas/Espada/3_espada.png"},{palo:"espada",numero:4,imagenUrl:"../../../assets/imagenes/cartas/Espada/4_espada.png"},{palo:"espada",numero:5,imagenUrl:"../../../assets/imagenes/cartas/Espada/5_espada.png"},{palo:"espada",numero:6,imagenUrl:"../../../assets/imagenes/cartas/Espada/6_espada.png"},{palo:"espada",numero:7,imagenUrl:"../../../assets/imagenes/cartas/Espada/7_espada.png"},{palo:"espada",numero:8,imagenUrl:"../../../assets/imagenes/cartas/Espada/8_espada.png"},{palo:"espada",numero:9,imagenUrl:"../../../assets/imagenes/cartas/Espada/9_espada.png"},{palo:"espada",numero:10,imagenUrl:"../../../assets/imagenes/cartas/Espada/10_espada.png"},{palo:"espada",numero:11,imagenUrl:"../../../assets/imagenes/cartas/Espada/11_espada.png"},{palo:"espada",numero:12,imagenUrl:"../../../assets/imagenes/cartas/Espada/12_espada.png"},{palo:"basto",numero:1,imagenUrl:"../../../assets/imagenes/cartas/Basto/1_basto.png"},{palo:"basto",numero:2,imagenUrl:"../../../assets/imagenes/cartas/Basto/2_basto.png"},{palo:"basto",numero:3,imagenUrl:"../../../assets/imagenes/cartas/Basto/3_basto.png"},{palo:"basto",numero:4,imagenUrl:"../../../assets/imagenes/cartas/Basto/4_basto.png"},{palo:"basto",numero:5,imagenUrl:"../../../assets/imagenes/cartas/Basto/5_basto.png"},{palo:"basto",numero:6,imagenUrl:"../../../assets/imagenes/cartas/Basto/6_basto.png"},{palo:"basto",numero:7,imagenUrl:"../../../assets/imagenes/cartas/Basto/7_basto.png"},{palo:"basto",numero:8,imagenUrl:"../../../assets/imagenes/cartas/Basto/8_basto.png"},{palo:"basto",numero:9,imagenUrl:"../../../assets/imagenes/cartas/Basto/9_basto.png"},{palo:"basto",numero:10,imagenUrl:"../../../assets/imagenes/cartas/Basto/10_basto.png"},{palo:"basto",numero:11,imagenUrl:"../../../assets/imagenes/cartas/Basto/11_basto.png"},{palo:"basto",numero:12,imagenUrl:"../../../assets/imagenes/cartas/Basto/12_basto.png"}],this.mazoCartas=this.listaCartas,this.timerShow=A(1e3),this.listaJugadoresPuntaje=[],this.puntosActuales=0,this.puntosHistoricos=0,this.puntosTotales=0,this.puntosAhorcado=0,this.puntosPreguntados=0,this.puntosHitC=0,this.referenciaIdColeccion="",this.errores=0}ngOnInit(){this.obtenerJugador(),this.obtenerJugadoresPuntaje()}iniciarJuego(){this.inicio=!0,this.mezclarMazo(),this.seleccionCartas()}reiniciarJuego(){this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.puntosActuales=0,this.errores=0,this.mezclarMazo(),this.seleccionCartas()}obtenerJugador(){this.userSrv.isLoggedIn().subscribe(e=>{this.user=e})}mezclarMazo(){this.mazoCartas.sort(()=>Math.random()-.5)}seleccionCartas(){this.cartaVisible=this.mazoCartas[0],this.cartaInvisible=this.mazoCartas[1]}darVueltaCarta(){if(this.carta){let e=this.timerShow.subscribe(()=>{this.errores>=3||this.mazoCartas.length-1<2?(e.unsubscribe(),this.finalizarJuego()):(this.carta=!1,this.mazoCartas.splice(0,1),this.seleccionCartas())})}}elegirAccion(e){"mayor"==e?(this.carta=!0,this.cartaVisible.numero<this.cartaInvisible.numero?this.puntosActuales++:(this.puntosActuales>0&&this.puntosActuales--,this.errores++)):"igual"==e?(this.carta=!0,this.cartaVisible.numero==this.cartaInvisible.numero?this.puntosActuales++:(this.puntosActuales>0&&this.puntosActuales--,this.errores++)):(this.carta=!0,this.cartaVisible.numero>this.cartaInvisible.numero?this.puntosActuales++:(this.puntosActuales>0&&this.puntosActuales--,this.errores++)),this.darVueltaCarta()}finalizarJuego(){this.mazoCartas.length-1==1?(this.altaResultados(),this.resultadocomp=!0,this.ganoPerdio=!0,this.gano=!0):(this.altaResultados(),this.resultadocomp=!0,this.ganoPerdio=!0)}obtenerJugadoresPuntaje(){this.jugadorSrv.getAll("puntajes").then(e=>{e.subscribe(a=>{this.listaJugadoresPuntaje=a.map(i=>{let n=i.payload.doc.data();return n.uid=i.payload.doc.id,n})})})}altaResultados(){let e;this.listaJugadoresPuntaje.forEach(a=>{(a.id=this.user.uid)&&(e=a,this.referenciaIdColeccion=e.uid,this.puntosHistoricos=e.mayorMenor,this.puntosAhorcado=e.ahorcado,this.puntosPreguntados=e.preguntados,this.puntosHitC=e.hitCarpincho,this.puntosTotales=e.puntosTotales)}),console.log(this.puntosHistoricos),e?this.puntosHistoricos>this.puntosActuales?(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosAhorcado,mayorMenor:this.puntosHistoricos,preguntados:this.puntosPreguntados,hitCarpincho:this.puntosHitC,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosAhorcado,mayorMenor:this.puntosActuales,preguntados:this.puntosPreguntados,hitCarpincho:this.puntosHitC,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:0,mayorMenor:this.puntosActuales,preguntados:0,hitCarpincho:0,puntosActuales:this.puntosActuales,puntosTotales:this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.alta(this.jugador,"puntajes"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.w),t.Y36(p.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-mayor-menor"]],decls:3,vars:3,consts:[[3,"nombre","iniciarJuegoEvent",4,"ngIf"],["class","container text-center",4,"ngIf"],[3,"nombre","flagGp","flagGano","jugadorResult","reiniciarJuegoEvent",4,"ngIf"],[3,"nombre","iniciarJuegoEvent"],[1,"container","text-center"],[1,"font-weight-bold","mb-4"],[1,"d-flex","justify-content-around","card-container"],[1,"carta-visible"],["alt","",3,"src"],[1,"carta-dorso"],[4,"ngIf"],[1,"d-flex","justify-content-around","botones","m-4"],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-outline-warning",3,"click"],[1,"btn","btn-outline-success",3,"click"],[1,""],["src","../../../assets/imagenes/cartas/dorso.png","alt",""],[3,"nombre","flagGp","flagGano","jugadorResult","reiniciarJuegoEvent"]],template:function(e,a){1&e&&(t.YNc(0,z,1,1,"app-iniciar-juego",0),t.YNc(1,L,25,5,"div",1),t.YNc(2,B,1,4,"app-resultado",2)),2&e&&(t.Q6J("ngIf",!a.inicio),t.xp6(1),t.Q6J("ngIf",a.inicio),t.xp6(1),t.Q6J("ngIf",a.resultadocomp))},directives:[r.O5,d,g],styles:[".container-inicio[_ngcontent-%COMP%]{height:80vh}.container[_ngcontent-%COMP%]{margin-top:30px}"]}),o})();var W=u(5861);function V(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-iniciar-juego",13),t.NdJ("iniciarJuegoEvent",function(){return t.CHM(e),t.oxw().iniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("nombre",e.nombreJuego)}}function X(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",14),t.TgZ(1,"button",15),t.NdJ("click",function(){const n=t.CHM(e).$implicit;return t.oxw().attemptWithLetter(n)}),t._uU(2),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit;t.xp6(1),t.Q6J("disabled",e.disabled),t.xp6(1),t.Oqu(e.letra)}}function $(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-resultado",16),t.NdJ("reiniciarJuegoEvent",function(){return t.CHM(e),t.oxw().reiniciarJuego()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("flagGp",e.ganoPerdio)("nombre",e.nombreJuego)("flagGano",e.gano)("jugadorResult",e.jugador)}}function tt(o,s){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.qZA()),2&o){const e=s.$implicit;t.xp6(2),t.Oqu(e.user),t.xp6(2),t.Oqu(e.ahorcado),t.xp6(2),t.Oqu(e.mayorMenor),t.xp6(2),t.Oqu(e.preguntados),t.xp6(2),t.Oqu(e.hitCarpincho),t.xp6(2),t.Oqu(e.puntosTotales)}}const et=[{path:"ahorcado",component:(()=>{class o{constructor(e,a,i){this.palabrasSrv=e,this.jugadorSrv=a,this.authSrv=i,this.ALPHABET="A\xc1BCDE\xc9FGHI\xcdJKLMN\xd1O\xd3PQRSTU\xdaVWXYZ",this.MAX_ATTEMPTS=6,this.MASK_CHAR="_",this.nombreJuego="Ahorcado",this.inicio=!1,this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.letras=[],this.palabraOculta=[],this.intentosRestantes=6,this.palabraElegida="",this.listaJugadoresPuntaje=[],this.puntosActuales=0,this.puntosHistoricos=0,this.puntosTotales=0,this.puntosMayorMenor=0,this.puntosPreguntados=0,this.puntosHitC=0,this.referenciaIdColeccion="",this.listaDocumentos=[]}ngOnInit(){this.obtenerJugador(),this.obtenerJugadoresPuntaje()}obtenerPalabra(){var e=this;return(0,W.Z)(function*(){try{return yield e.palabrasSrv.getPalabras().subscribe(a=>{e.palabra=a,e.separaPalabra(e.palabra.body.Word),console.log(e.palabra.body.Word)})}catch(a){console.log("Error en obtenerPalabra",a)}})()}separaPalabra(e){e=e.toUpperCase();for(let a of e)this.palabraOculta.push({letra:a,hidden:!0})}obtenerJugador(){this.authSrv.isLoggedIn().subscribe(e=>{this.user=e,console.log(this.user.email,this.user.uid)})}iniciarJuego(){this.inicio=!0,this.obtenerPalabra(),this.setupLetras()}reiniciarJuego(){this.resultadocomp=!1,this.ganoPerdio=!1,this.gano=!1,this.palabraOculta=[],this.resetAttempts(),this.obtenerPalabra(),this.setupLetras()}playerWins(){for(let e of this.palabraOculta)if(e.hidden)return!1;return!0}playerLoses(){return this.intentosRestantes<=0}checkGameStatus(){this.playerWins()&&(this.puntosActuales=10*this.palabra.body.Word.length,this.altaResultados(),this.resultadocomp=!0,this.ganoPerdio=!0,this.gano=!0),this.playerLoses()&&(this.resultadocomp=!0,this.ganoPerdio=!0)}imagePath(){return"../../../assets/imagenes/Ahorcado/ahorcado_"+(this.MAX_ATTEMPTS-this.intentosRestantes)+".png"}setupLetras(){if(this.letras=[])for(let e of this.ALPHABET)this.letras.push({letra:e,disabled:!1})}resetAttempts(){this.intentosRestantes=this.MAX_ATTEMPTS}displayWord(){let e="";for(let a of this.palabraOculta)e+=a.hidden?this.MASK_CHAR:a.letra,e+=" ";return e}letterExistsInWord(e){for(let a of this.palabraOculta)if(a.letra===e)return!0;return!1}discoverLetter(e){this.palabraOculta.forEach(a=>{a.letra==e&&(a.hidden=!1)})}attemptWithLetter(e){let a=this.letras.indexOf(e);this.letras[a].disabled=!0,this.letterExistsInWord(e.letra)?this.discoverLetter(e.letra):this.intentosRestantes-=1,this.checkGameStatus()}obtenerJugadoresPuntaje(){this.jugadorSrv.getAll("puntajes").then(e=>{e.subscribe(a=>{this.listaJugadoresPuntaje=a.map(i=>{let n=i.payload.doc.data();return n.uid=i.payload.doc.id,n})})})}altaResultados(){let e;this.listaJugadoresPuntaje.forEach(a=>{(a.id=this.user.uid)&&(e=a,this.referenciaIdColeccion=e.uid,this.puntosHistoricos=e.ahorcado,this.puntosMayorMenor=e.mayorMenor,this.puntosPreguntados=e.preguntados,this.puntosHitC=e.hitCarpincho,this.puntosTotales=e.puntosTotales)}),console.log(this.puntosHistoricos),e?this.puntosHistoricos>this.puntosActuales?(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosHistoricos,mayorMenor:this.puntosMayorMenor,preguntados:this.puntosPreguntados,hitCarpincho:this.puntosHitC,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosActuales,mayorMenor:this.puntosMayorMenor,preguntados:this.puntosPreguntados,hitCarpincho:this.puntosHitC,puntosActuales:this.puntosActuales,puntosTotales:this.puntosTotales+this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.update(this.referenciaIdColeccion,"puntajes",this.jugador)):(this.jugador={id:this.user.uid,user:this.user.email,ahorcado:this.puntosActuales,mayorMenor:0,preguntados:0,hitCarpincho:0,puntosActuales:this.puntosActuales,puntosTotales:this.puntosActuales,fechaActualizacion:new Date},this.jugadorSrv.alta(this.jugador,"puntajes"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(c.w),t.Y36(p.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ahorcado"]],decls:19,vars:6,consts:[[3,"nombre","iniciarJuegoEvent",4,"ngIf"],[1,"container-fluid","ahorcado_main","mt-6"],["id","app",1,"row"],[1,"col-12","text-center","ahorcado"],[1,"text-success"],[1,"row"],[1,"col-8","text-center"],["alt","",1,"imagen-ahorcado",3,"src"],[1,"col-4"],[1,"displayed-word"],[1,"h4","text-danger"],["class","col-sm",4,"ngFor","ngForOf"],[3,"flagGp","nombre","flagGano","jugadorResult","reiniciarJuegoEvent",4,"ngIf"],[3,"nombre","iniciarJuegoEvent"],[1,"col-sm"],[1,"btn","btn-success","mt-4","btn-sm",3,"disabled","click"],[3,"flagGp","nombre","flagGano","jugadorResult","reiniciarJuegoEvent"]],template:function(e,a){1&e&&(t.YNc(0,V,1,1,"app-iniciar-juego",0),t.TgZ(1,"main",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5,"Ahorcado"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t._UZ(8,"img",7),t.qZA(),t.TgZ(9,"div",8),t.TgZ(10,"h3",9),t._uU(11,"Palabra: "),t._UZ(12,"br"),t._uU(13),t.qZA(),t.TgZ(14,"p",10),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",5),t.YNc(17,X,3,2,"div",11),t.qZA(),t.qZA(),t.YNc(18,$,1,4,"app-resultado",12)),2&e&&(t.Q6J("ngIf",!a.inicio),t.xp6(8),t.Q6J("src",a.imagePath(),t.LSH),t.xp6(5),t.Oqu(a.displayWord()),t.xp6(2),t.hij("Intentos restantes: ",a.intentosRestantes,""),t.xp6(2),t.Q6J("ngForOf",a.letras),t.xp6(1),t.Q6J("ngIf",a.resultadocomp))},directives:[r.O5,r.sg,d,g],styles:[".ahorcado_main[_ngcontent-%COMP%]{margin-top:1rem}img.imagen-ahorcado[_ngcontent-%COMP%]{height:50vh}"]}),o})()},{path:"mayor-menor",component:D},{path:"preguntados",component:w},{path:"golpear-carpincho",component:F},{path:"listado-puntajes",component:(()=>{class o{constructor(e){this.db=e,this.listadoPuntajes=[],this.carros=[{marca:"Audi",color:"verde",modelo:2001},{marca:"Ford",color:"amarillo",modelo:2013},{marca:"Mercedes",color:"gris",modelo:2008},{marca:"Mazda",color:"azul",modelo:2015},{marca:"Toyota",color:"rojo",modelo:2010},{marca:"Ford",color:"gris",modelo:2e3},{marca:"Mazda",color:"gris",modelo:2009},{marca:"Tesla",color:"amarillo",modelo:2004},{marca:"Mercedes",color:"amarillo",modelo:2005},{marca:"Nissan",color:"verde",modelo:2012}]}ngOnInit(){this.obtenerPuntajesjugador(),this.ordenar()}obtenerPuntajesjugador(){this.db.getAll("puntajes").then(e=>{e.subscribe(a=>{a.forEach(i=>{this.listadoPuntajes.push(i.payload.doc.data())}),this.ordenar()})})}ordenar(){this.listadoPuntajes.sort((e,a)=>a.puntosTotales-e.puntosTotales)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.w))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listado-puntajes"]],decls:22,vars:1,consts:[[1,"container","mt-4"],[1,"card"],[1,"card-body"],[1,"h3"],[1,"table","table-striped","mt-5"],[4,"ngFor","ngForOf"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"span",3),t._uU(4,"Puntajes"),t.qZA(),t.TgZ(5,"table",4),t.TgZ(6,"thead"),t.TgZ(7,"tr"),t.TgZ(8,"th"),t._uU(9,"Usuario"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Ahorcado"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Mayor o menor"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Preguntados"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Hit Carpincho"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Puntos totales"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"tbody"),t.YNc(21,tt,13,6,"tr",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(21),t.Q6J("ngForOf",a.listadoPuntajes))},directives:[r.sg],styles:[""]}),o})()}];let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(et)],l.Bz]}),o})(),at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,ot]]}),o})()}}]);