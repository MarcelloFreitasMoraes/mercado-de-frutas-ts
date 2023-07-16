import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import * as S from './styles'
import Checked from '../Checked'
import axios from 'axios'
import Button from '../Button'
import { Container } from '@/styles/Global'
import { ProdutoctsProps } from './types'
import Image from 'next/image'

export default function Products({ result, isLogged }:ProdutoctsProps) {    
    const [check, setCheck] = useState(false)

    const openChecked = () => {
        setCheck(prev => !prev)
    }

    const url = "https://mercado-de-fruta2-default-rtdb.firebaseio.com/frutas/checkout.json"

    const addCheckout = (data: { name: any; image: string | undefined; description: string | number | boolean | ReactPortal | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; price: string | number | boolean | ReactPortal | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined }) =>{
        axios.post(url, data).then((res) => {
            openChecked()
        })
    };

    return (
        <S.Content>
            <Container>
                <S.Grid>
                    {result?.map((item: { name: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | Key | null | undefined; image: string | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => {
                        return (
                            <S.Box key={item.name}>
                                <img src={item.image} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>

                                <S.Pricing>
                                    <sup>R$</sup><span>{item.price}</span>
                                </S.Pricing>
                                {isLogged ? (
                                    <Button
                                        onClick={() => {
                                            addCheckout(item)
                                        }}
                                        label="Adicionar ao Carrinho"
                                    />
                                ) : (
                                    <Button
                                        label="Logue para comprar"
                                        disabled
                                    />
                                )}
                            </S.Box>
                        )
                    })}

                </S.Grid>
                <Checked check={check} setCheck={setCheck} />
            </Container>
        </S.Content>
    )
}
