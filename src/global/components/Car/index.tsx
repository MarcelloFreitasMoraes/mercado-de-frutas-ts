import React, { useEffect } from 'react'
import * as S from './styles'
import { PDFDownloadLink } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js'
import PdfDocument from '../ReportPdf'
import { FaTrash } from 'react-icons/fa'
import { Container } from '@/styles/Global'
import { CarProps, ErrorMessageProps } from './types'
import Image from 'next/image'
import Back from '../Back'
import Empty from '../../../../public/empty.png'
import { LoadingComponent } from '../Loading'

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
    return (
        <S.Error
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '5.1%',
            }}
        >
            <Image src={Empty} alt={'empty'} />
            <Back />
        </S.Error>
    )
}

const Car: React.FC<CarProps> = ({
    data,
    setFruitsSelected,
    fruitsSelected,
    onDelete,
    isEmpty,
    loading,
}) => {
    useEffect(() => {
        if (data) {
            const newArray = data && data?.map((item) => item[1])
            setFruitsSelected(newArray.filter((item) => item?.id !== 'lock'))
        }
    }, [data])

    const prices = fruitsSelected?.map((som: { price: string }) => {
        return parseFloat(som?.price?.replace(',', '.'))
    })

    const totalCheckout = prices?.reduce((acumulado: number, x: number) => {
        return acumulado + x
    }, 0)

    const total = totalCheckout?.toString().replace('.', ',')

    if (isEmpty) {
        return <ErrorMessage />
    }

    if (loading) {
        return <LoadingComponent />
    }

    return (
        <S.Details>
            <Container>
                <S.Grid>
                    <S.Wrapper>
                        {data?.map((fruit, index) => {
                            return (
                                <S.Content key={index}>
                                    <S.Product>
                                        <Image
                                            src={fruit[1]?.image}
                                            alt={fruit[1]?.name}
                                            width={250}
                                            height={200}
                                        />
                                    </S.Product>

                                    <S.Detail>
                                        <S.Heading>
                                            <h2>{fruit[1]?.name}</h2>
                                            <p>{fruit[1]?.description}</p>
                                        </S.Heading>

                                        <S.Price>
                                            <sup>R$</sup>
                                            <span>{fruit[1]?.price}</span>
                                        </S.Price>

                                        <S.Buttons>
                                            <span>Quantidade:</span>
                                            <span>1</span>
                                            <span
                                                onClick={() =>
                                                    onDelete(fruit[0])
                                                }
                                            >
                                                <FaTrash size={16} />
                                            </span>
                                        </S.Buttons>
                                    </S.Detail>
                                </S.Content>
                            )
                        })}
                    </S.Wrapper>

                    <S.Aside>
                        <S.Heading>
                            <h1>Valor da Compra</h1>
                        </S.Heading>

                        {fruitsSelected &&
                            fruitsSelected.map((products: any) => {
                                return (
                                    <React.Fragment key={products?.id}>
                                        <S.Items>
                                            <S.ListProducts>
                                                <li>
                                                    <span>[1x] </span>
                                                    {products?.name}oi
                                                </li>
                                            </S.ListProducts>

                                            <S.ListProducts>
                                                <li>
                                                    <span>
                                                        <sup>R$</sup>
                                                        {products?.price}
                                                    </span>
                                                </li>
                                            </S.ListProducts>
                                        </S.Items>
                                    </React.Fragment>
                                )
                            })}

                        <S.Finish>
                            <S.Total>
                                <h3>Total: </h3>

                                <div>
                                    <sup>R$</sup>
                                    <span>{total}</span>
                                </div>
                            </S.Total>

                            <div>
                                <PDFDownloadLink
                                    document={
                                        <PdfDocument
                                            data={fruitsSelected}
                                            total={total}
                                        />
                                    }
                                    fileName="boleto.pdf"
                                >
                                    {({ loading }: { loading: boolean }) =>
                                        loading
                                            ? 'Loading document...'
                                            : 'Finalizar Compra'
                                    }
                                </PDFDownloadLink>
                            </div>
                        </S.Finish>
                    </S.Aside>
                </S.Grid>
            </Container>
        </S.Details>
    )
}

export default Car
