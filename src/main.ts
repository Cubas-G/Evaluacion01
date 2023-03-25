import './style.css'
import { Machoke, Blastoise, } from './Class'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

 <img src="./image/machoke.png" width="100" heiht="50">


  <h3>Hola soy  ${Machoke.name}
mi id es de: ${Machoke.id} </h3>



  <img src="./image/Blastoise.webp" width="100" heiht="50">
  <h3>Hola soy ${Blastoise.name}
  mi id es de: ${Blastoise.id}
  </h3>
`
