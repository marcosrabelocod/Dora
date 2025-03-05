import Card from './Card'
import './Container.css'
import Caixa from './Caixa'
import { useState } from 'react'

const Container = () => {
    let estoque = [
        {
            id : 1,
            nome: 'File de Gó',
            price: '10.00',
            img:'1.webp'
        },
        /*{
            id: 2,
            nome: 'Camarão sem casca',
            price: '45.00',
            img:'2.webp'
        }*/,
        {
            id: 3,
            nome: 'file de douradinha',
            price: '13.00',
            img:'3.jpg'
        },
        {
            id: 4,
            nome: 'Camarão Salgado',
            price: '35.00',
            img:'4.jpg'
        },
        {
            id: 5,
            nome: 'Camarão Rosa Medio',
            price: '45.00',
            img:'5.jpeg'
        },
        {
            id: 6,
            nome: 'Massa de caranguejo',
            price: '35.00',
            img:'6.webp'
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