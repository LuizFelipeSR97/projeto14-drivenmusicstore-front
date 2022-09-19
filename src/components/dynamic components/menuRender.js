import styled from "styled-components"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

export default function MenuRender ({showMenu, setShowMenu}) {

    const navigate = useNavigate();

    async function endSession(){

        const token = localStorage.getItem("token")
        const config = {headers: {"Authorization": `Bearer ${token}`}}

        await axios.delete("http://localhost:5000/sessions", config).then(answer => {

        localStorage.setItem("token","");
        localStorage.setItem("userId","");
        localStorage.setItem("userName","");
        localStorage.setItem("userEmail","");
        window.location.reload(false);

        }).catch(err => {

            console.error(err);
            alert("Erro ao se deslogar! Consulte os logs.")
            return
        })
    }

    if (!showMenu){
        return (
            <Menu>
                <ion-icon name="menu-outline" onClick={()=>setShowMenu(!showMenu)}/>
            </Menu>
        )
    }

    return (
        (localStorage.getItem("token")==="")?
        <Menu>
            <ion-icon name="menu-outline" onClick={()=>setShowMenu(!showMenu)}/>
            <MenuBar>
                <Link to={"/signin"}><h4>Fazer login</h4></Link>
            </MenuBar>
        </Menu>
        :
        <Menu>
            <ion-icon name="menu-outline" onClick={()=>setShowMenu(!showMenu)}/>
            <MenuBar>
                <h1>Olá, {localStorage.getItem("userName")}</h1>
                <h2>Minha conta</h2>
                <h2>Meus pedidos</h2>
                <h3 onClick={endSession}>Finalizar sessão</h3>
            </MenuBar>
        </Menu>
    )

}

const Menu = styled.div`
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

const MenuBar = styled.div `
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    background-color: #ebecf0;
    position: fixed;
    top: 50px;
    width: 180px;
    height: 220px;
    z-index: 1;

    h1{
        color: #d61b69;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    h2{
        color: #d61b69;
        margin-bottom: 10px;
    }

    h3{
        margin-top: 50px;
        font-weight: 600;
        color: #d61b69;
        cursor: pointer;
    }

    h4{
        margin-top: 90px;
        margin-left: 20px;
        font-weight: 600;
        font-size: 18px;
        color: #d61b69;
        cursor: pointer;
    }

    a:-webkit-any-link {
        text-decoration: none;
        color: #C42673;
        font-weight: 700;
        cursor: pointer;
    }
`