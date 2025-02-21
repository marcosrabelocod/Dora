import './Caixa.css'

const Caixa = ({produto, comprar}) =>{
    const fazerCompra = () =>{
        comprar(false)
    }
    return(
        <div className='Caixa'>
            <div className='header'>
                <div className="icon"></div>{produto.nome}
            </div>
            <form className='formulario'>
                <div>
                    Preço: {produto.price}R$/ 0.5kg <br />
                    Quantidade: <input type="number" name="" id="peso" placeholder='peso'/>.kg<br />

                </div>
                <div className='botoes'>
                    <button onClick={fazerCompra} className='btn btn-outline-info'>voltar</button>
                <input type="submit" value="Pedir" className='btn pedir'/>
                </div>
            </form>
        </div>
    )
}

export default Caixa