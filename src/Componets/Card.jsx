import './Card.css'
import { useState } from 'react'
const Card = ({produto, comprar}) => {
    //retornamos a classe para que ela seja renderizada na parte de compras
    const fazerCompra = () =>{
        comprar(produto)
    }

    return(
        <div className='conteudo'>
            <div>
                <div className="image">

                </div >
                <div className="price">
                    <span className='produto'>{produto.nome}</span><br/>
                    {produto.price}R$
                </div>
            </div>
            <button onClick={fazerCompra} className='btn choise'>Escolher</button>
        </div>
    )
}

export default Card