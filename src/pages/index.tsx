import Head from 'next/head'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Search from '@/global/components/Search'
import Slider from '@/global/components/Slider'
import Products from '@/global/components/Products'
import { API } from '@/config/api'

export default function Home({ isLogged }: { isLogged: boolean }) {
    const [search, setSearch] = useState<string>('')
    const [result, setResult] = useState<[string, unknown][]>()

    useEffect(() => {
        axios.get(API).then((res) => {
            const filterProducts = Object.entries(res?.data)?.filter((item) => {
                return item !== null
            })
            setResult(filterProducts)
        })
    }, [])

    return (
        <>
            <Head>
                <title>Mercado Fruta | Página Inicial</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Search setSearch={setSearch} search={search} />

            <Slider />

            <Products result={result?.[0]?.[1]} isLogged={isLogged} />
        </>
    )
}
