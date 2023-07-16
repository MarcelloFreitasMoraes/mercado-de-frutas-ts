import Head from 'next/head'
import axios from "axios";
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { API } from '../../../config/api';
import Search from '@/global/components/Search';
import { product_card } from '@/global/components/Products/data';
import { Container } from '@/styles/Global';
import Products from '@/global/components/Products';

export default function Home({isLogged}) {
  const [search, setSearch] = useState()
  const [data, setData] = useState< [string, unknown][]>()
  const [result, setResult] = useState();

  const router = useRouter()
  const { fruta } = router.query

  useEffect(() => {
    axios.get(API).then((res) => {

      const filterProducts = (Object.entries(res.data))?.filter(n =>{
        return n !== null 
      })
      setData(filterProducts);
    });
  }, []);


  useEffect(() => {
    const filtered = data?.[0]?.[1]?.filter((item: { name: (string | string[] | undefined)[]; }) => {
    
      if (item?.name?.indexOf(fruta) !== -1) {      
        return true; 
      }
      return false;
    });
    setResult(filtered);
    
  }, [data]);  

  const Title = styled.h1``

  return (
    <>
      <Head>
        <title>Mercado Fruta | Página Inicial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search data={product_card} setSearch={setSearch} search={search} />

      <Container>
       {result?.length > 0 ? (<Title>Resultados para {fruta !== -1}</Title>) : (<>não há reultados</>)} 
      </Container>

      <Products result={result} isLogged={isLogged} />
    </>
  )
}
