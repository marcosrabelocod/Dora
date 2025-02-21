import './Nota.css'
import { useState } from 'react'

const Nota = ({pedido, resetPedido}) =>{
    const [mensagem, setMensagem] = useState(
        `Pedido de: ${pedido.nome}\n
        quantidade: ${pedido.quantidade}kg\n
        valor de: ${pedido.valor}R$\n
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
                    <a className='btn pedir' href={`https://web.whatsapp.com/send?phone={+5591991186199}&text=${mensagem}`}>Confirmar</a>
                </div>
        </div>
    )
}

export default Nota