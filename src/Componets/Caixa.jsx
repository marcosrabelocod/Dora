import './Caixa.css'
import { useState } from 'react'
import Nota from './Nota'

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
        setPedido ( {
            nome: produto.nome,
            quantidade: peso,
            valor: valor
            
        })
    }
    const resetPedido = () =>{
        setPedido(false)
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
                    
                    Preço: {produto.price}R$/ 0.5kg <br />
                    <label className='quantidade'>
                        Quantidade:
                        <input type="number" name="quantidade" id="peso" placeholder='peso'
                        onChange={calcular} value={peso}/>.kg
                        <div>
                        <button onClick={somar} type='button' className='operador soma'>&#43;</button>
                        <button onClick={subtrair} type='button' className='operador subtrai'>&#8722;</button>
                        </div>
                        <br />
                    </label>
                    <span>Total = {valor} R$</span>

                </div>
                <div className='botoes'>
                    <button onClick={fazerCompra} className='btn btn-outline-info'>voltar</button>
                <input type="submit" value="Pedir" className='btn pedir'/>
                </div>
            </form>
        </div>
            ):(
                <Nota pedido={pedido} resetPedido = {resetPedido}/>
            )}
        </>
    )
}

export default Caixa