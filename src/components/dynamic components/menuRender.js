import styled from "styled-components"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const token="d967786c-7963-419a-b3eb-2f7c598f9095"

export default function MenuRender ({showMenu, setShowMenu}) {

    const navigate = useNavigate();

    function endSession(){

        alert("sessao encerrada");

        setShowMenu(false)

        /* const config = {headers: 
        {
            authorization: "d967786c-7963-419a-b3eb-2f7c598f9095"
        }}

        axios.delete("http://localhost:5000/sessions", config).then(answer => {

        setShowMenu(false)

        navigate("/");

        }).catch(err => {

            console.error(err)

            if (err.response.status===401){
                alert("Usuário e/ou senha inválidos. Tente novamente.")
                return
            }
            console.error(err);
            alert("Erro ao fazer login! Consulte os logs.")
            return
        }) */
    }

    if (!showMenu){
        return (
            <Menu>
                <ion-icon name="menu-outline" onClick={()=>setShowMenu(!showMenu)}/>
            </Menu>
        )
    }

    return (
        <Menu>
            <ion-icon name="menu-outline" onClick={()=>setShowMenu(!showMenu)}/>
            <MenuBar>
                <h1>Olá, Fulano</h1>
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
    background-color: #FFFFFF;
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
`