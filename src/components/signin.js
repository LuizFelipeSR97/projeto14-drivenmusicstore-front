import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/logo-driven-music-store-transparent.png";
import axios from 'axios'

export default function SignIn ({token}) {

    const navigate = useNavigate();

    function enviarFormulario(e){

        e.preventDefault();

        const inputUser = {email: e.target.email.value, password: e.target.password.value};
        
        axios.post("http://localhost:5000/sessions", inputUser).then(answer => {

        token = answer.data;

        navigate("/");

        console.log(token);

        }).catch(err => {

            if (err.response.status===401){
                alert("Usuário e/ou senha inválidos. Tente novamente.")
                return
            }
            console.error(err);
            alert("Erro ao fazer login! Consulte os logs.")
            return
        })
    }

    return (

    <Conteudo>
        <img src={logo} alt=""/>
        <Formulario onSubmit={enviarFormulario}>
            <input placeholder="E-mail" type="email" name="email" required/>
            <input placeholder="Senha" type="password" name="password" required/>
            <Botao>
                Entrar
            </Botao>
        </Formulario>
        <Link to={"/signup"}><p>Não tem uma conta? Cadastre-se agora!</p></Link>
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

const Formulario = styled.form`
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

    button{
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
    }
`

const Botao = styled.button`
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
