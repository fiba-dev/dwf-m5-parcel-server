const fondoURL= require("url:../../components/img/fondo.png")
import {initRouter} from "../../router"

export function initWelcome(params)
{
    const div = document.createElement("div")
    const style=document.createElement("style");
    //html
    div.innerHTML=`
    <div class="contenedor">
    <div class="menu"> 
    <custom-text class="texto" variant="title"> Piedra Papel o Tijera </custom-text>
    <button-blue class="boton" >EMPEZAR</button-blue>
    </div>
    <footer class="footer">
    <img-piedra class="pied"></img-piedra>
    <img-papel class="pied"></img-papel>
    <img-tijera class="pied"></img-tijera>
    
    
    
    </footer>
    </div>
    
    
    `;
    //style
    style.innerHTML=` 
    
    .contenedor{
        display:flex;
        flex-direction:column;
        padding-left:34px;
        padding-right:34px;
        height: 100vh;
        justify-content: space-between;
        align-items:center;
       
        background-image: url(${fondoURL})
    }
    .texto{
      width:284px;
      height:204px;
    }
    .menu{
        margin-top:100px;
        display:flex;
        flex-direction:column;
        height:500px;
        justify-content: space-between
    }
    .pied{
      display:flex;

      width:200px;
      justify-content: center;
    }
    .footer{
      
      bottom:0px;
      width:100%;
      height:300px;
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      align-items: flex-end;


    }
    `
    
  div.appendChild(style)

 //boton para navegar a la siguiente pagina donde da instrucciones "/play"
  const btn=div.querySelector(".boton")
  console.log(btn)
  btn.addEventListener("click",()=>{
    params.goTo("/play")
  })
  






  return div
}