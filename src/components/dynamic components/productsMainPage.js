import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListaDeProdutos(){

    useEffect(() => {

        axios.get(`https://back-projeto-drivenmusicstore.herokuapp.com/products`).then( answer => {

            if (params.type==="instrumentos"){
                type = "instrument"
            } else if (params.type==="acessorios"){
                type = "accessory"
            } else if (params.type==="discos"){
                type = "disc"
            } else if (params.type==="aulas"){
                type = "class"
            } 
            
            setLista(answer.data.filter(p=>p.type===type))
            setLista(lista.sort(() => Math.random() - 0.5))

        }).catch(err => {

            console.error(err)
            alert("Erro ao renderizar produtos! Consulte os logs.")
            return
        })

    },[]);
    
    const i=0;
    const j=1;
    const k=2;

    return (
        <Lista>
            <Produto>
                {lista[i].name}
            </Produto>
            <Produto>
                {lista[j].name}
            </Produto>
            <Produto>
                {lista[k].name}
            </Produto>
            <Link to="/products?type=discos"><Botao>
                Ver mais
            </Botao></Link>
        </Lista>
    )

}

const Lista = styled.div`
    background-color: #ebecf0;
    color: #FFFFFF;
    font-size: 25px;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 40px 0 40px;

    a:-webkit-any-link {
        text-decoration: none;
        color: #C42673;
        cursor: pointer;
    }
`

const Produto = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    font-size: 25px;
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    border-radius: 10px;
`

const Botao = styled.div`
    background-color: black;
    color: #FFFFFF;
    font-size: 18px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    a:-webkit-any-link {
        text-decoration: none;
        color: #C42673;
        font-weight: 700;
        cursor: pointer;
    }
`