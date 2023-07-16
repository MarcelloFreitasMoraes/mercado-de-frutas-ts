import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
import { ReportPdfProps } from './types';

const style = StyleSheet.create({
  page: {
    alignItems: 'center',
    backgroundColor: '#ffffe0'
  },
  box: { margin: 30 },
  flex: {
    width: 500,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center'
  }
});

const MyPdf = ({ data, total }:ReportPdfProps) => (

  <Document>
    <Page size="A4" style={style.page}>
      <View style={style.box}>
        <Text>Relatório Confidencial</Text>
        <Text>Config. de Conta</Text>
      </View>

      <View style={style.box}>
        <Text>CONFERÊNCIA DE CONTA</Text>
        <Text>Mercado da Fruta</Text>
      </View>

      <View style={style.box}>
        <Text>** Não é Documento Fiscal **</Text>
      </View>

      <View>
        <Text style={style.title}>Produto</Text>
        {data?.map((item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => {
          
          return (
              <View style={style.flex} key={index}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
          )
        })}

        <View style={style.box}>
          <Text>Total: <sup>R$</sup>{total}</Text>
        </View>

      </View>
    </Page>
  </Document>
);

export default MyPdf