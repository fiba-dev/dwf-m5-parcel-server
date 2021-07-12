export function init(){
  class BotonBlue extends  HTMLElement{
   constructor(){
       super();
       this.render();
   }
    
render(){
    const shadow= this.attachShadow({mode:"open"});
    const button= document.createElement("button");
    button.textContent=this.textContent;
    const style = document.createElement("style");
    button.className="boton";

    style.innerHTML=` 
    .boton{
      font-family: 'Odibee Sans', cursive;
      font-size:64px;
        height:87px;
        width:100%;
        background: #006CFC;
        color:white;
        
        border: 10px solid #001997;
        box-sizing: border-box;
        border-radius: 10px; 

    }
         

    `;
    

    shadow.appendChild(button);
    shadow.appendChild(style)

}



     


  }

  customElements.define("button-blue",BotonBlue)


}
