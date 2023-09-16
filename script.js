const colorsElement = document.getElementById('colors');
const lenguajeElement = document.getElementById('lenguaje'); //el id del elemento es para localizar 
// trabajarlo con JS no para pasar informacion

const tituloElemt = document.getElementById('titulo')

colorsElement.addEventListener('click', e => {

/* ****** Este bloque se trabajo con id en el html ********

  if(e.target.id.includes('rojo')){
    console.log(e.target.id.substring(0,4));

 }else{
     // console.log(e.target.id)
  }

 console.dir(e.target)

  console.log(e.target.dataset.color) 
  
  
  */


  //*  ******  Este bloque se trabajo con data ******** 
  
  if(e.target.dataset.number === '1'){

   console.log(`Este es el primer boton ${e.target.dataset.color}`)

  }else{
   console.log(` Este es el segundo boton  ${e.target.dataset.color} `)
  }
  
  // */
   
})


const lenguajeObj = {
   es: 'Soy un titulo',
   in:'I am a title ',
   fr: 'En frances'
}

const cambiarLenguaje = e => {

   const lenguaje = e.target.dataset.lenguaje;
   tituloElemt.textContent = lenguajeObj[lenguaje];
   console.log(lenguaje)

}
lenguajeElement.addEventListener('click', cambiarLenguaje)









