import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Theme } from '@/styles/themes/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/Global'
import Header from '@/global/components/Header'
import Footer from '@/global/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
    const [isLogged, setIsLogged] = useState<string | null>()
    const tema = Theme

    useEffect(() => {
        return setIsLogged(localStorage.getItem('Logged'))
    }, [])
    const router = useRouter()

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    href="./logo.png"
                    type="image/x-icon"
                />
            </Head>
            <ThemeProvider theme={tema}>
                <GlobalStyle />
                <Header isLogged={isLogged} />
                <Component
                    key={router.asPath}
                    {...pageProps}
                    isLogged={isLogged}
                />
                <Footer />
            </ThemeProvider>
        </>
    )
}
