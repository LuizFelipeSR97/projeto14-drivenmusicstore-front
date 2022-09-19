import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/logo-driven-music-store-transparent.png";
import axios from 'axios';
import React from 'react';

export default function SignUp () {

    const navigate = useNavigate();

    function enviarFormulario(e){

        e.preventDefault();

        if (e.target.password.value!==e.target.passwordVerification.value){
            alert ("A senha digitada e a confirmação são diferentes. Digite novamente.");
            e.target.passwordVerification.value="";
            return
        }

        const user = {name: e.target.name.value, email: e.target.email.value, password: e.target.password.value};

        axios.post("https://back-projeto-drivenmusicstore.herokuapp.com/users", user).then(() => {
            navigate("/signin");
            }).catch(err => {
                if (err.response.status===409){
                    alert("Esse e-mail já está em uso. Crie uma nova conta ou faça o login com o e-mail cadastrado.")
                    return
                }
                console.error(err);
                alert("Erro ao fazer cadastro. Consulte os logs.")
            })
    }

    return (
    <Conteudo>
        <img src={logo} alt=""/>
        <Formulario onSubmit={enviarFormulario}>
            <input placeholder="Nome" type="text" name="name" required/>
            <input placeholder="E-mail" type="email" name="email" required/>
            <input placeholder="Senha" type="password" name="password" required/>
            <input placeholder="Confirme a senha" type="password" name="passwordVerification" required/>
            <Botao>
                Entrar
            </Botao>
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
`

const Botao = styled.button`
    height: 40px;
    width: 200px;
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
