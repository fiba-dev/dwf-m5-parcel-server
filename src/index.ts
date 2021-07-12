import {init as text} from "./components/text"
import {initRouter} from "./router"
import{init as button} from "./components/button";

import{init as piedra} from "./components/piedra"
import{init as papel} from "./components/papel"
import{init as tijera} from "./components/tijera"
import{init as contador} from "./components/contador";
import{state} from "./state"




(function(){
    state.init();
    const root = document.querySelector(".root")
    initRouter(root);
    button();
    text();
    piedra();
    papel();
    tijera();
    contador();
    



})();