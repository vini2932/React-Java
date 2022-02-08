import Titulo from "../Componentes/Titulo";
import Cards from "../Componentes/Cards";
import Menu from "../Componentes/Menu";
export default ()=>{

return(
    <>
    <Menu></Menu>
<Titulo titulo="Confira nossas melhores promoções"></Titulo>
<Cards
pacote1="Pacote de Viagem - Fortaleza + Beach Park - 2023" preco1="300,00" diaria1="5" promo1="600" 
porcentagem1="50" foto1="/Fotos/1_bp.jpg"


pacote2="Pacote de Viagem - Gramado+ Skyglass - 2023" preco2="315,00" diaria2="3" promo2="700" 
porcentagem2="55" foto2="/Fotos/53498_exterior_view_3.webp"

pacote3="Pacote de Viagem - Maragogi - Carnaval 2022" preco3="3000,00" diaria3="4" promo3="5000" 
porcentagem3="40" foto3="/Fotos/o-que-fazer-em-maragogi-3.jpg"

pacote4="Pacote de Viagem - Chapada Diamantina (Bahia) - 2023" preco4="500,00" diaria4="6" promo4="2000" 
porcentagem4="75" foto4="/Fotos/28_shutterstock_41365018___Piscina_subter__nea_dentro_de_cavernas___Parque_Nacional_da_Chapada_Diamantina__BA.jpg"


>
</Cards>
<Titulo titulo="Nossas melhores promoções internacionais"></Titulo>
<Cards
pacote1="Pacote de Viagem - Austrália (Sydney) - 2023" preco1="1500,00" diaria1="6" promo1="3000" 
porcentagem1="50" foto1="/Fotos/australia-sydney-opera-house.jpg"

pacote2="Pacote de Viagem Índia - 2023" preco2="2000,00" diaria2="8" promo2="5000" 
porcentagem2="75" foto2="/Fotos/india.jpg"

pacote3="Pacote de Viagem - Japão (Tóquio) - 2023 e 2024" preco3="3000,00" diaria3="7" promo3="1000" 
porcentagem3="70" foto3="/Fotos/viagens-personalizadas-para-o-japao.jpg"

pacote4="Pacote de Viagem - Aruba - 2023 e 2024" preco4="2000,00" diaria4="7" promo4="4000" 
porcentagem4="50" foto4="/Fotos/cabanas-aerial.jpg"
></Cards>


</>
);

}