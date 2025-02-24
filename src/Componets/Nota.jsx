import './Nota.css'
import { useState } from 'react'

const Nota = ({pedido, resetPedido}) =>{
    const [mensagem, setMensagem] = useState(
        `Pedido de: ${pedido.nome}%0A
        quantidade: ${pedido.quantidade}kg%0A
        valor de: ${pedido.valor}R$%0A
        `
    )
    return(
        <div className='janela'>
                <div className='Nota'>
                Pedido de: {pedido.nome} <br />
                quantidade: {pedido.quantidade}kg<br />
                valor de: {pedido.valor}R$
                </div>
                <div className='botoes'>
                    <button onClick={resetPedido} className='btn btn-outline-info'>voltar</button>
                    <a className='btn pedir' href={`https://wa.me/+5591983222276?text=${mensagem}`}>Confirmar</a>
                </div>
        </div>
    )
}
export default Nota