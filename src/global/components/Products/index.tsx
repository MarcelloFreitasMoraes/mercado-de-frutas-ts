import { useState } from 'react'
import * as S from './styles'
import Checked from '../Checked'
import axios from 'axios'
import Button from '../Button'
import { Container } from '@/styles/Global'
import { ProdutoctsProps } from './types'
import Image from 'next/image'
import { CHECK } from '@/config/api'

export default function Products({ result, isLogged }: ProdutoctsProps) {
    const [check, setCheck] = useState<boolean>(false)

    const openChecked = () => {
        setCheck((prev) => !prev)
    }

    const addCheckout = (data: {
        name: string
        image: string
        description: string
        price: string
    }) => {
        axios.post(CHECK, data)
        .then((res) => {
          openChecked()
        })
        .catch((error) => {
          alert('Ocorreu um erro ao adicionar o item ao carrinho.')
          console.error(error)
        })
      
    }

    return (
        <S.Content>
            <Container>
                <S.Grid>
                    {result?.map(
                        (item: {
                            name: string
                            image: string
                            description: string
                            price: string
                        }) => (
                            <S.Box key={item?.name}>
                                <Image
                                    src={item?.image}
                                    alt={item?.image}
                                    width={200}
                                    height={200}
                                />
                                <h2>{item?.name}</h2>
                                <p>{item?.description}</p>

                                <S.Pricing>
                                    <sup>R$</sup>
                                    <span>{item?.price}</span>
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
                    )}
                </S.Grid>
            </Container>
            <Checked check={check} setCheck={setCheck} />
        </S.Content>
    )
}
