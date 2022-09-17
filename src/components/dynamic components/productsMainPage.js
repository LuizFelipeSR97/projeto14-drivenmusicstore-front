import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const exListaDeProdutos = [{type: "instruments", name: "Violao"},{type: "instruments", name: "Guitarra"},{type: "instruments", name: "Bateria"},{type: "instruments", name: "Saxofone"},{type: "instruments", name: "Gaita"},{type: "instruments", name: "Pandeiro"},{type: "instruments", name: "Cavaco"},{type: "instruments", name: "Baixo"},{type: "instruments", name: "Banjo"},{type: "instruments", name: "Flauta"}]

export default function ListaDeProdutos(){

    const [showProducts, setShowProducts] = useState([])
    const [exListaDeProdutos2, setExListaDeProdutos2] = useState([...exListaDeProdutos])

    const array = [...exListaDeProdutos]

        if (array.lenght<3){
            alert ("Adicione mais produtos na lista.")
            return
        }

            let i,j,k;

            i=Math.trunc((Math.random() * (10 - 1) + 1));
            j=i;
            k=i;

        while (j===i){
            j=Math.trunc((Math.random() * (10 - 1) + 1));
        }

        while (k===i || k===j){
            k=Math.trunc((Math.random() * (10 - 1) + 1));
        }

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
            <Link to="/products"><Botao>
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