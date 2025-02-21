import './Caixa.css'
import { useState } from 'react'

const Caixa = ({produto, comprar}) =>{
    const fazerCompra = () =>{
        comprar(false)
    }

    const [pedido, setPedido] = useState(false)
    const [peso, setPeso] = useState("0.5")
    const [valor, setValor] = useState(produto.price)

    const calcular = (e) => {
        let novoPeso = e.target.value 
        setPeso(novoPeso)
        setValor(novoPeso * 2 * produto.price)
    }
    const somar = () => {
        let novoPeso = Number(peso) + 0.5
        setPeso(novoPeso)
        setValor(novoPeso * 2 * produto.price)
    }
    const subtrair = () => {
        let novoPeso = Number(peso) - 0.5
        setPeso(novoPeso)
        setValor(novoPeso * 2 * produto.price)
    }

    //funçaõ para envaminhar o form para a confirmação
    const gerarPedido = (event) =>{
        event.preventDefault()
        
    }

    return(
        <>
        {
        !pedido?(
        <div className='Caixa'>
            <div className='header'>
                <div className="icon"></div>{produto.nome}
            </div>
            <form className='formulario' onSubmit={gerarPedido}>
                <div className='perguntas'>
                    <label className='Quantidade'>
                        Preço: {produto.price}R$/ 0.5kg <br />
                        Quantidade: 
                        <input type="number" name="quantidade" id="peso" placeholder='peso'
                        onChange={calcular} value={peso}/>.kg
                        <button onClick={somar} className='operador soma'>&#43;</button>
                        <button onClick={subtrair} className='operador subtrai'>&#8722;</button>
                        <br />
                    </label>
                    <span>Total = {valor}</span>

                </div>
                <div className='botoes'>
                    <button onClick={fazerCompra} className='btn btn-outline-info'>voltar</button>
                <input type="submit" value="Pedir" className='btn pedir'/>
                </div>
            </form>
        </div>
            ):(
                <div>
                <h1>pedido</h1>
                {pedido}
                </div>
            )}
        </>
    )
}

export default Caixa