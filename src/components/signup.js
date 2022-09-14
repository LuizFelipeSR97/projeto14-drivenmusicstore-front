import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/logo-driven-music-store-transparent.png"

export default function SignIn () {

    return (
    <Conteudo>
        <img src={logo}/>
        <Formulario>
            <input placeholder="Nome" name="nome"/>
            <input placeholder="E-mail" name="email"/>
            <input placeholder="Senha" name="senha"/>
            <input placeholder="Confirme a senha" name="confirmacao-senha"/>
            <Botao>Cadastrar</Botao>
        </Formulario>
        <Link to={"/signin"}><p>Já tem uma conta? Faça o login agora!</p></Link>
    </Conteudo>   
    )
}

const Conteudo = styled.div`
    background-color: #efd0e2;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img{
        height: 150px;
        margin-bottom: 50px;
    }

    p{
        margin-top: 20px;
    }

    a:-webkit-any-link {
        text-decoration: none;
        color: #C42673;
        font-weight: 700;
        cursor: pointer;
    }
`

const Formulario = styled.div`
    background-color: #blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        width: 250px;
        height: 40px;
        margin: 5px;
        padding-left: 15px;
        color: black;
        font-size: 20px;
        border: solid 1px black;
        border-radius: 3px;
    }

    input::placeholder{
        color: black;
        font-size: 20px;        
    }
`

const Botao = styled.div`
    height: 30px;
    width: 150px;
    margin: 10px 0;
    background-color: #F8428F;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-top: 30px;
    border: solid 1px #F8428F;
    border-radius: 3px;
    cursor: pointer;
`
