type choose="piedra"|"papel"|"tijera";
type game={
    computerPlay:choose,
    myPlay:choose
}

const state={
data:{
   currentGame:{
       myPlay:"",
       computerPlay:""
   },
   history:[]

},
//init para cuando inicia tome los datos del localstorage
init(){
  const currentGame=this.getState()
  console.log("este es history",currentGame.history)
  const localData=localStorage.getItem("saved-state")
  console.log("local data",JSON.parse(localData))
   if(JSON.parse(localData)!=null)
      currentGame.history=JSON.parse(localData);
  
  

}
,
//boton removescore que elimina los datos del history y el localstorage
removeScore(){
  localStorage.setItem("saved-state",null)
  const currentGame= this.getState()
  currentGame.history=[]

},
//set move que recibe movimiento del jugador y realiza un movimiento de la maquina añadiendolo a la history
setMove(move:string){
    const currentState=this.getState();
    currentState.currentGame.myPlay=move;
    let maquina=Math.floor(Math.random()*100);
    console.log("maquina",maquina)
    if(maquina>=0 && maquina<33)
      currentState.currentGame.computerPlay="tijera";
    if(maquina>=33&&maquina<66)
    currentState.currentGame.computerPlay="papel";
    if(maquina>=66 && maquina<=100)
    currentState.currentGame.computerPlay="piedra";

     console.log("movimientos","mi movimiento:",currentState.currentGame.myPlay,"maquina:",currentState.currentGame.computerPlay)
    this.pushHistory(currentState.currentGame.myPlay,currentState.currentGame.computerPlay)
    

},
//pushHistory donde guarda la history actual en el localStorage
pushHistory(myPlay:choose,computerPlay:choose)
{   const currentState=this.getState();
  console.log("historydelpush",currentState.history);
  
  console.log("currenstate",currentState)
  currentState.history.push({myPlay,computerPlay})
  localStorage.setItem("saved-state",JSON.stringify(currentState.history))

},
//Whowins dependiendo de la jugada del player y la maquina interpreta quien gano retornano "perdiste", "ganaste","empataste"
whoWins(myPlay:choose, computerPlay:choose)
{if(myPlay=="papel")
    { if(computerPlay=="papel")
          return "empataste";
          if(computerPlay=="piedra")
            return "ganaste"
            if(computerPlay=="tijera")
            return "perdiste";
     


    }
    if(myPlay=="tijera")
    { if(computerPlay=="papel")
          return "ganaste";
          if(computerPlay=="piedra")
            return "perdiste"
            if(computerPlay=="tijera")
            return "empataste";
     


    }
    if(myPlay=="piedra")
    { if(computerPlay=="papel")
          return "perdiste";
          if(computerPlay=="piedra")
            return "empataste";
            if(computerPlay=="tijera")
            return "ganaste";
     


    }


},
//getScore recorre el array del history clasificando quien gano y añade los puntos correspondiente a cada score
getScore()
{  let myScore=0;
    let computerScore=0;
    let empates=0;
    let history=state.data.history
    console.log("state",history)
    for (const key of history) {
       if(this.whoWins(key.myPlay,key.computerPlay)=="ganaste")
         myScore++;
       if(this.whoWins(key.myPlay,key.computerPlay)=="empataste")
         empates ++;
         if(this.whoWins(key.myPlay,key.computerPlay)=="perdiste")
         computerScore++
    }
   return{myScore,computerScore,empates}

},
//retorna toda la data
getState(){
    return this.data;
}

}

export{state}