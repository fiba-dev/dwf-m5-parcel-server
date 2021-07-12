
import{initWelcome} from "./pages/welcome"
import{initPlay} from "./pages/play"
import { initselection } from "./pages/selection"
import { initResultado } from "./pages/resultado"


//router igual como se estuvo usando en clases anteriores

export function initRouter(container:Element)
{function goTo(path)
    {
      history.pushState({},"",path)
      handleRoute(path)

    }
    
    
    function handleRoute(route)
    { console.log("el handle route recibio una nueva ruta",route);
     
    const contenedorEl=document.querySelector(".contenedor");
    const routes =[
         {
            path:/\//,
            component:initWelcome
         },
        {  path:/\/welcome/,
            component:initWelcome
    
        },
        { path:/\/play/,
            component:initPlay

        },
        { path:/\/selection/,
            component:initselection

        },
        { path:/\/resultado/,
            component:initResultado
            

        },
       
    ]
    for (const i of routes) {
        if(i.path.test(route))
        {  const el = i.component({goTo:goTo});
            
            if(container.firstChild)
               {container.firstChild.remove();}
          container.appendChild(el);
        }
        
    }
    
    
    }
    handleRoute(location.pathname)
    window.onpopstate=function(){
        handleRoute(location.pathname)
    }
}