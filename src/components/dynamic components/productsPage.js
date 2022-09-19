import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";

export default function ListaDeProdutosCompleta({params}){

    function addToCart(item){
        //post na colecao carrinho com os itens escolhidos
        //objeto contendo o id do usuario e id do produto
        if (localStorage.getItem("token")===""){
            alert("Por favor, faça o login para poder adicionar um produto ao carrinho!")
            return
        }
        alert("Fazer funcao pra adicionar ao carrinho")
    }

    const [lista, setLista] = useState([])
    //const type = "disc"
    let type;

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

        }).catch(err => {

            console.error(err)
            alert("Erro ao renderizar produtos! Consulte os logs.")
            return
        })

    },[]);
    
    return (
        (lista.length===0)
        ?
        <Lista>
            <h4>Pedimos desculpas, esta página ainda está sendo construída. Agradecemos pela paciência! </h4>                  
        </Lista>
        :
        <Lista>
            {lista.map(product => 
                <Produto>
                    <img src={product.url}/>
                    <h1>{product.name}</h1>
                    <h2>R${product.price},00</h2>
                    <Botao onClick={()=>addToCart(product)}>Comprar</Botao>
                </Produto>
            )}            
        </Lista>
    )
}

const Lista = styled.div`
    color: #FFFFFF;
    font-size: 25px;
    width: 800px;
    flex-wrap: wrap;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;

    a:-webkit-any-link {
        text-decoration: none;
        cursor: pointer;
    }

    h4{
        color: #000000;
        margin: 300px 0;
        text-align: center;
    }
`

const Produto = styled.div`
    background-color: #ebecf0;
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