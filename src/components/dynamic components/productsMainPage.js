import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const exListaDeProdutos = [{type: "instruments", name: "Violao"},{type: "instruments", name: "Guitarra"},{type: "instruments", name: "Bateria"},{type: "instruments", name: "Saxofone"},{type: "instruments", name: "Gaita"},{type: "instruments", name: "Pandeiro"},{type: "instruments", name: "Cavaco"},{type: "instruments", name: "Baixo"},{type: "instruments", name: "Banjo"},{type: "instruments", name: "Flauta"}]

export default function ListaDeProdutos(){

    const array = [...exListaDeProdutos]
    
    const i=1;
    const j=2;
    const k=3;  

    return (
        <Lista>
            <Produto>
                {array[i].name}
            </Produto>
            <Produto>
                {array[j].name}
            </Produto>
            <Produto>
                {array[k].name}
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