import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListaDeProdutos(){

    const [lista, setLista] = useState([]);
    const [prod1, setProd1] = useState({"url": "https://urupes.sp.gov.br/sio/admin/modulos/unidades-publicas/anexos/casa_lar_de_urupes-1640784506.jpg",
    "name": "",
    "type": "",
    "price": 0,
    "description": ""});
    const [prod2, setProd2] = useState({"https://urupes.sp.gov.br/sio/admin/modulos/unidades-publicas/anexos/casa_lar_de_urupes-1640784506.jpg": "",
    "name": "",
    "type": "",
    "price": 0,
    "description": ""});
    const [prod3, setProd3] = useState({"https://urupes.sp.gov.br/sio/admin/modulos/unidades-publicas/anexos/casa_lar_de_urupes-1640784506.jpg": "",
    "name": "",
    "type": "",
    "price": 0,
    "description": ""});

    function addToCart(item){
        //post na colecao carrinho com os itens escolhidos
        //objeto contendo o id do usuario e id do produto
        if (localStorage.getItem("token")===""){
            alert("Por favor, faça o login para poder adicionar um produto ao carrinho!")
            return
        }
        alert("Fazer funcao pra adicionar ao carrinho")
    }


    useEffect(() => {

        axios.get(`https://back-projeto-drivenmusicstore.herokuapp.com/products`).then( answer => {

            setLista(answer.data);
            setProd1(lista[0]);
            setProd1(lista[1]);
            setProd1(lista[2]);

            /* setLista(lista.sort(() => Math.random() - 0.5)) */
            console.log(lista)

        }).catch(err => {

            console.error(err)
            alert("Erro ao renderizar produtos! Consulte os logs.")
            return
        })

    },[]);

    return (
        (lista===[])
        ?
            <Lista>
                <Produto>
                    Adicionar produtos a lista
                </Produto>
                <Produto>
                    Adicionar produtos a lista
                </Produto>
                <Produto>
                    Adicionar produtos a lista
                </Produto>
                <Link to="/products/discos"><Botao>
                    Ver mais
                </Botao></Link>
            </Lista>
        :
            <Lista>
                <Produto>
                    Produto 1
                </Produto>
                <Produto>
                    Produto 2
                </Produto>
                <Produto>
                    Produto 3
                </Produto>
                <Link to="/products/discos"><Botao>
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

/* const Produto = styled.div`
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
` */

const Produto = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    width: 250px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    border-radius: 10px;

    img{
        margin-top: 20px;
        height: 200px;
        width: 200px;
    }

    h1{
        font-size: 20px;
        margin: 20px;
    }

    h2{
        font-size: 25px;
        font-weight: 700;
    }
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

const BotaoComprar = styled.div`
    background-color: #d61b69;
    color: #FFFFFF;
    font-size: 18px;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;

    a:-webkit-any-link {
        text-decoration: none;
        color: #C42673;
        font-weight: 700;
        cursor: pointer;
    }
`