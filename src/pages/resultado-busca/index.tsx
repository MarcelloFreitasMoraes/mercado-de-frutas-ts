import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { API } from '../../../config/api'
import Search from '@/global/components/Search'
import { Container } from '@/styles/Global'
import Products from '@/global/components/Products'

export default function Home({ isLogged }: { isLogged: boolean }) {
    const [search, setSearch] = useState<string>('')
    const [data, setData] = useState<any[]>([])
    const [result, setResult] = useState<any[]>([])

    const router = useRouter()
    const { fruta } = router.query

    useEffect(() => {
        axios.get(API).then((res) => {
            const filterProducts: any[] = Object.entries(res.data).filter(
                (n) => {
                    return n !== null
                }
            )
            setData(filterProducts)
        })
    }, [])

    useEffect(() => {
        if (fruta) {
            const filtered = data?.[0]?.[1]?.filter(
                (item: { name: (string | string[])[] }) => {
                    if (item?.name?.indexOf(fruta) !== -1) {
                        return true
                    }
                    return false
                }
            )
            setResult(filtered)
        }
    }, [data, fruta])

    const Title = styled.h1``

    return (
        <>
            <Head>
                <title>Mercado Fruta | Página Inicial</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Search setSearch={setSearch} search={search} />

            <Container>
                {result?.length > 0 ? (
                    <Title>Resultados para {fruta}</Title>
                ) : (
                    <p>Não há resultados</p>
                )}
            </Container>

            <Products result={result} isLogged={isLogged} />
        </>
    )
}
