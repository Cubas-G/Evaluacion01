import './style.css'
import { Nidorina, Nidoqueen, } from './Class'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

 <img src="./image/machoke.png" width="100" heiht="50">


  <h3>Hola soy  ${Nidorina.name}
mi id es de: ${Nidorina.id} </h3>



  <img src="./image/Blastoise.webp" width="100" heiht="50">
  <h3>Hola soy ${Nidoqueen.name}
  mi id es de: ${Nidoqueen.id}
  </h3>
`
