import React from 'react'
import '../Css/index.css'

export default props =>{

    return (
        <div id="organizar">
  <div id="alinhar" >
    <div  id="cards">
        <div id="promo" >
            <p id="disconto">-{props.porcentagem1}%</p>
        </div>
      <a href=""><img src={props.foto1} alt="" id="imagempromo"/> </a>
</div>

<div id="borda" id="imagempromo" >
        <h3 >{props.pacote1}</h3>
        <p>📆 {props.diaria1} diarias</p>
        <p>🥩 Café da manhã incluso</p>
        <p> <del>De R$ {props.promo1}</del></p>
        <strong><p id="preco">R$ {props.preco1}</p></strong>
    </div>
    </div>



<div id="alinhar">
       <div  id="cards">
        <div id="promo" >
            <p id="disconto">-{props.porcentagem2}%</p>
        </div>
      <a href=""><img src={props.foto2} alt="" id="imagempromo"/> </a>
</div>

<div id="borda" id="imagempromo" >
        <h3 >{props.pacote2}</h3>
        <p>📆  {props.diaria2} diarias</p>
        <p>🥩 Café da manhã incluso</p>
        <p> <del>De R$ {props.promo2}</del></p>
        <strong><p id="preco">R${props.preco2}</p></strong>
    </div>
    </div>

    <div id="alinhar">
        <div  id="cards">
         <div id="promo" >
             <p id="disconto">-{props.porcentagem3}%</p>
         </div>
       <a href=""><img src={props.foto3} alt="" id="imagempromo"/> </a>
 </div>
 
 <div id="borda" id="imagempromo" >
         <h3 >{props.pacote3}</h3>
         <p>📆 {props.diaria3} diarias</p>
         <p>🥩 Café da manhã incluso</p>
         <p> <del>De R$ {props.promo3}</del></p>
         <strong><p id="preco">R${props.preco3}</p></strong>
     </div>
     </div>


     <div id="alinhar">
        <div  id="cards">
         <div id="promo" >
             <p id="disconto">-{props.porcentagem4}%</p>
         </div>
       <a href=""><img src={props.foto4}alt="" id="imagempromo"/> </a>
 </div>
 
 <div id="borda" id="imagempromo" >
         <h3 >{props.pacote4}</h3>
         <p>📆 {props.diaria4} diarias</p>
         <p>🥩 Café da manhã incluso</p>
         <p> <del>De R$ {props.promo4}</del></p>
         <strong><p id="preco">R${props.preco4}</p></strong>
    </div>

</div>
</div>
    
       
        
       );
}