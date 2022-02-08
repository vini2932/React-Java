import {Link} from 'react-router-dom'
export default (props)=>{

    return(
        <nav style={{position: "absolute",top: "10px",right: "60px"}}>
        <ul>
        <li><strong><Link to="/" style={{color: "orange"}}>Home</Link></strong></li>
            <li><strong><Link to="/Promocoes" style={{color: "orange"}}>Promoções</Link></strong></li>
            <li><strong><Link to="/Destino" style={{color: "orange"}}>Destinos</Link></strong></li>
            <li><strong><Link to="/Contato" style={{color: "orange"}}>Contato</Link></strong></li>
       
        </ul>
    </nav>

    );


    }
