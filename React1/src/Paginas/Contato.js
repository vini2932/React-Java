import '../Css/Contato.css'
import Menu from '../Componentes/Menu';
export default ()=>{
return(
    < >
    <Menu></Menu>
    <main style={{backgroundColor:"black"}}>
    
    <h1>Entre em contato conosco </h1>
   <h5>Preenchendo o formulario abaixo</h5>

    <div className="alternative">
       <span></span>
    </div>

    <form action="">
        <label for="nome">
            <span>Nome</span>
            <input type="text" id="nome" name="nome"/>
        </label>

        <label for="email">
            <span>E-mail</span>
            <input type="email" id="email" name="email"/>
        </label>

        <label for="mensagem" style={{display: "inline; margin-top: 30px;"}}>
         <span>   Escreva a sua mensagem abaixo</span>
            
        </label>
        <textarea name="mensagem" id="mensagem" cols="50" rows="10"></textarea>
        <input type="submit" value="Enviar" id="button"/>
    </form>
</main>

</>

);
}