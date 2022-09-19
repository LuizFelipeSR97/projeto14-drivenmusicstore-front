import styled from "styled-components"
import MenuRender from "./dynamic components/menuRender"
import {useState} from 'react'
import {Link, useParams} from "react-router-dom"
import logoAlternativo from '../media/logo-driven-music-store-transparent-alternative.png'
import pagamento from "../media/formas-pagamento.png";

import ListaDeProdutosCompleta from "./dynamic components/productsPage"

export default function Products(){

    const [showMenu, setShowMenu] = useState(false);
    const params = useParams();

    return (
        <FullPage>
            <Header>
                <Left>
                    <MenuRender showMenu={showMenu} setShowMenu={setShowMenu}/>
                </Left>
                <Right>
                    <Link to="/"><img src={logoAlternativo}/></Link>
                    <input placeholder="Pesquisar" />
                    <div className="pesquisar">
                        <ion-icon name="search-outline"/>
                    </div>
                    <ion-icon name="cart-outline"/>
                </Right>
            </Header>
            <Conteudo>
                <Categorias>
                    <Link to="/products/instrumentos"><p>INSTRUMENTOS</p></Link>
                    <div className="divisao" />
                    <Link to="/products/acessorios"><p>ACESSÓRIOS</p></Link>
                    <div className="divisao" />
                    <Link to="/products/discos"><p>DISCOS</p></Link>
                    <div className="divisao" />
                    <Link to="/products/aulas"><p>AULAS</p></Link>
                </Categorias>
                <ListaDeProdutosCompleta params={params}/>
            </Conteudo>
            <Footer>
                <Secao>
                    <h1>CONTATOS</h1>
                    <h2>TELEFONE:</h2>
                    <h3>(99) 3003-4004 / (99) 3003-5005</h3>
                    <h2>WHATSAPP:</h2>
                    <h3>(99) 99999-9999</h3>
                    <h2>E-MAIL:</h2>
                    <h3>vendas@drivenmusicstore.com</h3>
                </Secao>
                <Separador />
                <Secao>
                    <h1>LOJA</h1>
                    <h4>MINHA CONTA</h4>
                    <h4>MEUS PEDIDOS</h4>
                    <h4>SOBRE A LOJA</h4>
                    <h4>TROCAS E DEVOLUÇÕES</h4>
                </Secao>
                <Separador />
                <Secao>
                    <h1>FORMAS DE PAGAMENTO</h1>
                    <img src={pagamento} alt=""/>
                </Secao>
            </Footer>
        </FullPage>
    )

}

const FullPage = styled.div`
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;

    a:-webkit-any-link {
        text-decoration: none;
        color: #FFFFFF;
        cursor: pointer;
    }
`

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f975ac;
    width: 100%;
    height: 50px;

`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #FFFFFF;
    height: 100%;

    ion-icon{
        margin: 10px;
        color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #FFFFFF;
    height: 100%;
    width: auto;
    padding-right: 10px;

    input {
        width: 250px;
        height: 25px;
        border: solid 1px #FFFFFF;
        border-radius: 2px;
        padding-left: 10px;
        color: #000000;
        font-size: 15px;
    }

    input::placeholder {
        color: #000000;
        font-size: 15px;
    }

    p {
        cursor: pointer;
        font-size: 15px;
    }

    ion-icon{
        color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-left: 20px;
    }

    .pesquisar{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 29px;
        width: 35px;
        background-color: #d61b69;
        border: solid 1px #d61b69;
        border-radius: 5px;
        margin-right: 20px;
        margin-left: -2px;
        cursor: pointer;
    }

    .pesquisar ion-icon{
        color: white;
        width: 20px;
        height: 20px;
        margin: 0;
    }

    img{
        height: 30px;
        width: 90px;
        margin-right: 70px;
        margin-top: 5px;
    }
`

const Conteudo = styled.div`
    padding-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    margin-top: 40px;
`

const Categorias = styled.div`
    background-color: #d61b69;
    margin-top: 10px;
    color: #FFFFFF;
    font-size: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .divisao{
        background-color: #FFFFFF;
        width: 2px;
        height: 60%;
        margin: 0 30px;
    }

    p{
        cursor: pointer;
    }

    a:-webkit-any-link {
        text-decoration: none;
        color: #FFFFFF;
        cursor: pointer;
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: #FFFFFF;
    width: 100vw;
    height: 220px;
    box-sizing: border-box;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 30px;
`

const Secao = styled.div`
    box-sizing: border-box;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #FFFFFF;
    width: 30%;
    height: 100%;

    img{
        height: 120px;
        width: 160px;
        margin-left: 20px;
        margin-top: 5px;
    }

    h1{
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 10px;
        cursor: default;
    }

    h2{
        margin: 2px 0;
        font-size: 15px;
        font-weight: 600;
        cursor: default;
    }

    h3{
        font-size: 14px;
        font-weight: 400;
        margin-top: 3px;
        margin-bottom: 8px;
        cursor: default;
    }

    h4{
        margin: 2px 0;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
    }
`

const Separador = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    height: 80%;
    width: 2px;
    background-color:#D61B69;
`