import React from 'react'
import Cards from'../Componentes/Cards'
import Titulo from '../Componentes/Titulo' 
import Mini from '../Componentes/Minicards'
import Destaque from '../Componentes/Destaque'
import Menu from'../Componentes/Menu'

export default ()=>{


    return(

        <>
  <Destaque></Destaque>
  <Menu></Menu>
    <Titulo titulo="Hoteis e Pacotes pelo o menor preço venha conferir"></Titulo>
    <Mini></Mini>
    <Titulo titulo="Venha conferir nossas promoções"></Titulo>
<Cards pacote1="Pacote de Viagem - Fortaleza + Beach Park - 2023" preco1="300,00" diaria1="5" promo1="600" 
porcentagem1="50" foto1="/Fotos/1_bp.jpg"


pacote2="Pacote de Viagem - Japão (Tóquio) - 2023 e 2024" preco2="3000,00" diaria2="7" promo2="1000" 
porcentagem2="70" foto2="/Fotos/viagens-personalizadas-para-o-japao.jpg"

pacote3="Pacote de Viagem - Chapada Diamantina (Bahia) - 2023" preco3="500,00" diaria3="6" promo3="2000" 
porcentagem3="75" foto3="/Fotos/28_shutterstock_41365018___Piscina_subter__nea_dentro_de_cavernas___Parque_Nacional_da_Chapada_Diamantina__BA.jpg"

pacote4="Pacote de Viagem Índia - 2023" preco4="2000,00" diaria4="8" promo4="5000" 
porcentagem4="75" foto4="/Fotos/india.jpg"

></Cards>
<Cards
pacote1="Pacote de Viagem - São Luís + Lençóis Maranhenses - 2022" preco1="800,00" diaria1="6" promo1="1000" 
porcentagem1="20"  foto1="/Fotos/014LCM-IM2101-lencois-maranhenses-768.jpg"

pacote2="Pacote de Viagem - Austrália (Sydney) - 2023" preco2="1500,00" diaria2="6" promo2="3000" 
porcentagem2="50" foto2="/Fotos/australia-sydney-opera-house.jpg"

pacote3="Pacote de Viagem - Aruba - 2023 e 2024" preco3="2000,00" diaria3="7" promo3="4000" 
porcentagem3="50" foto3="/Fotos/cabanas-aerial.jpg"

pacote4="Pacote de Viagem - Gramado+ Skyglass - 2023" preco4="315,00" diaria4="3" promo4="700" 
porcentagem4="55" foto4="/Fotos/53498_exterior_view_3.webp"

></Cards>

<Titulo titulo="Venha cair na folia"></Titulo>
<Cards
pacote1="Pacote de Viagem - Recife - Carnaval 2022" preco1="1500,00" diaria1="6" promo1="2500" 
porcentagem1="40"  foto1="/Fotos/20210922182454450793e.jpg"

pacote2="Pacote de Viagem - Cabo Frio - Carnaval 2022" preco2="3000,00" diaria2="10" promo2="5000" 
porcentagem2="40" foto2="/Fotos/cf2.jpg"

pacote3="Pacote de Viagem - João Pessoa - Carnaval 2022" preco3="3000,00" diaria3="4" promo3="5000" 
porcentagem3="40" foto3="/Fotos/csm_CARNAVAL-JP-31-01-2020_15e75e14ff.png"

pacote4="Pacote de Viagem - Maragogi - Carnaval 2022" preco4="3000,00" diaria4="4" promo4="5000" 
porcentagem4="40" foto4="/Fotos/o-que-fazer-em-maragogi-3.jpg"




></Cards>




<Cards
pacote1="Pacote de Viagem - Gramado ou Canela - Carnaval 2022" preco1="3000,00" diaria1="3" promo1="5000" 
porcentagem1="40"  foto1="/Fotos/9_carnaval.webp"

pacote2="Pacote de Viagem - Itacaré - Carnaval 2022" preco2="3000,00" diaria2="7" promo2="5000" 
porcentagem2="40" foto2="/Fotos/FB_IMG_15828247545581771.webp"

pacote3="Pacote de Viagem - Porto de Galinhas - Carnaval 2022" preco3="3000,00" diaria3="4" promo3="6000" 
porcentagem3="50" foto3="/Fotos/1_ba270120026_16606888.webp"

pacote4="Pacote de Viagem - Brasília - Carnaval 2022" preco4="2000,00" diaria4="3" promo4="4000" 
porcentagem4="40" foto4="Fotos/1_54a553c239a288ce4bcfd4439240952e.webp"



></Cards>
</>
    );
}