import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import * as S from "./styles";
import { PDFDownloadLink } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import PdfDocument from '../ReportPdf';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { Container } from "@/styles/Global";
import { CarProps } from "./types";
import Image from "next/image";

export default function Car({ data, del, setDel, fruitsSelected, setFruitsSelected }: CarProps) {

  useEffect(() => {
    if (data) {
      const newArray = data && data?.map((item: string[]) => item[1]);
      setFruitsSelected(newArray.filter((item: string) => item !== 'lock'));
    }
  }, [data]);

  const prices = fruitsSelected?.map((som: { price: string; }) => {
    return parseFloat(som.price.replace(',', '.'));
  });

  const totalCheckout = prices?.reduce((acumulado: number, x: number) => {
    return acumulado + x;
  });

  const total = totalCheckout?.toString().replace('.', ',');

  const delet = (id: string) => {
    axios
      .delete(
        `https://mercado-de-fruta2-default-rtdb.firebaseio.com/frutas/checkout/${id}.json`
      )
      .then(() => {
        alert("fruta excluída");
        setDel(!del);

        // Atualize o estado para remover o item excluído da lista
        setFruitsSelected((prevFruitsSelected: any[]) =>
          prevFruitsSelected.filter((fruit) => fruit.id !== id)
        );
      })
      .catch(() => alert("fruta não excluída"));
  };

  return (
    <S.Details>
      <Container>
        <S.Grid>
          <S.Wrapper>
            {data &&
              data.map((fruit, index) => {
                return (
                  <S.Content key={index}>
                    <S.Product>
                      <Image src={fruit[1]?.image} alt={fruit[1]?.name} width={250} height={200} />
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
                        <span onClick={() => delet(fruit[0])}>
                          <FaTrash size={16} />
                        </span>
                      </S.Buttons>
                    </S.Detail>
                  </S.Content>
                );
              })}
          </S.Wrapper>

          <S.Aside>
            <S.Heading>
              <h1>Valor da Compra</h1>
            </S.Heading>

            {fruitsSelected &&
              fruitsSelected.map((products: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => {
                return (
                  <>
                    <S.Items>
                      <S.ListProducts>
                        <li>
                          <span>[1x] </span>
                          {products.name}
                        </li>
                      </S.ListProducts>

                      <S.ListProducts>
                        <li>
                          <span>
                            <sup>R$</sup>
                            {products.price}
                          </span>
                        </li>
                      </S.ListProducts>
                    </S.Items>
                  </>
                );
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
                  document={<PdfDocument data={fruitsSelected} total={total} />}
                  fileName="boleto.pdf"
                >
                  {({ loading }: { loading: boolean })=>
                    loading ? "Loading document..." : "Finalizar Compra"
                  }
                </PDFDownloadLink>
              </div>
            </S.Finish>
          </S.Aside>
        </S.Grid>
      </Container>
    </S.Details>
  );
}
