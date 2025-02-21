import Card from './Card'
import './Container.css'
import Caixa from './Caixa'
import { useState } from 'react'

const Container = () => {
    let estoque = [
        {
            id : 1,
            nome: 'Pescado',
            price: '30.00'
        },
        {
            id: 2,
            nome: 'Camarão sem casca',
            price: '45.00'
        },
        {
            id: 3,
            nome: 'file de dourada',
            price: '50.00'
        },
        {
            id: 4,
            nome: 'Camarão com casca',
            price: '55.00'
        }
    ]
    
    const [produto, setProduto] = useState(false)


    //f1 - essa funçaõ determina se um produto foi selecionadoou não
    //f1 - ele inicia falso pois nem um elemento foi selecionado
    const comprar = (mercadoria) => {
        console.log(mercadoria)
        setProduto(mercadoria)
    }


    return(
        <>
        {//f1 - aqui ela checa se nem um produto foi selecionado
        !produto ?(
        <main className="main">
                {estoque.map((produto) =>(
                    <div key={produto.id} className='card' id={produto.id}>
                        <Card produto = {produto} comprar = {comprar}/>
                    </div>
                ))}
        </main>
        //f1 caso ele tenha sido selecionado então renderizamos a tela do produto
        ):(
            <main>
                <Caixa produto = {produto} comprar = {comprar}/>
            </main>
        )}
        </>
    )
}

export default Container