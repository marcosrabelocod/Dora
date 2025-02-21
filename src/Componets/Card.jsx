import './Card.css'
const Card = ({produto, comprar}) => {
    //retornamos a classe para que ela seja renderizada na parte de compras
    const fazerCompra = () =>{
        comprar(produto)
    }

    return(
        <>
            <div className="image">

            </div>
            <div className="price">
                <span className='produto'>{produto.nome}</span><br/>
                {produto.price}R$
            </div>
            <button onClick={fazerCompra} className='btn choise'>Escolher</button>
        </>
    )
}

export default Card