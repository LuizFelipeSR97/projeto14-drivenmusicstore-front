import styled from "styled-components";
import logo from "../media/logo-driven-music-store-transparent.png";
import pagamento from "../media/formas-pagamento.png";
import {useState} from 'react'
import MenuRender from "./dynamic components/menuRender";

export default function Main ({token}) {

    const [showMenu, setShowMenu] = useState(false)

    console.log(showMenu)

    return (
    <>
        <Header>
            <Left>
                <MenuRender showMenu={showMenu} setShowMenu={setShowMenu}/>
                <ion-icon name="menu-outline" onClick={()=>showMenu=(!showMenu)}/>
            </Left>
            <Right>
                <input placeholder="Pesquisar" />
                <div className="pesquisar">
                    <ion-icon name="search-outline"/>
                </div>
                <ion-icon name="cart-outline"/>
            </Right>
        </Header>
        <Conteudo>
        <img src={logo} alt=""/>
            <Categorias>
                <p>INSTRUMENTOS</p>
                <div className="divisao" />
                <p>ACESSÓRIOS</p>
                <div className="divisao" />
                <p>DISCOS</p>
                <div className="divisao" />
                <p>AULAS</p>
            </Categorias>
        </Conteudo>
        <Footer>
            <Secao>
                <h1>CONTATOS</h1>
                <h2>TELEFONE:</h2>
                <h3>(99) 3003-4004</h3>
                <h3>(99) 3003-5005</h3>
                <h2>WHATSAPP:</h2>
                <h3>(99) 99999-9999</h3>
                <h2>E-MAIL:</h2>
                <h3>vendas@drivenmusicstore.com</h3>
            </Secao>
            <Secao>
                <h1>LOJA</h1>
                <h3>MINHA CONTA</h3>
                <h3>MEUS PEDIDOS</h3>
                <h3>SOBRE A LOJA</h3>
                <h3>TROCAS E DEVOLUÇÕES</h3>
            </Secao>
            <Secao>
                <h1>FORMAS DE PAGAMENTO</h1>
                <img src={pagamento} alt=""/>
            </Secao>
        </Footer>
    </>   
    )
}

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

const Conteudo = styled.div`
    padding-top: 50px;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: 200px;
        width: 500px;
        margin: 40px 0;
    }
`

const Categorias = styled.div`
    background-color: #d61b69;
    margin: 10px;
    color: #FFFFFF;
    font-size: 25px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    .divisao{
        background-color: #FFFFFF;
        width: 2px;
        height: 60%;
        margin: 0 20px;
    }

    p{
        cursor: pointer;
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: #FFFFFF;
    width: 100%;
    height: 100px;
    padding-right: 20px;
    padding-left: 20px;
`

const Secao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: blue;
    color: #FFFFFF;
    width: 30%;
    height: 100px;

    img{
        height: 150px;
        width: 150px;
    }
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
`