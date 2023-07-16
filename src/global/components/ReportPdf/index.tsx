import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ReportPdfProps } from './types';

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    backgroundColor: '#ffffe0',
  },
  box: {
    margin: 30,
  },
  flex: {
    width: 500,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
  },
});

const MyPdf = ({ data, total }: ReportPdfProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.box}>
        <Text>Relatório Confidencial</Text>
        <Text>Config. de Conta</Text>
      </View>

      <View style={styles.box}>
        <Text>CONFERÊNCIA DE CONTA</Text>
        <Text>Mercado da Fruta</Text>
      </View>

      <View style={styles.box}>
        <Text>** Não é Documento Fiscal **</Text>
      </View>

      <View>
        <Text style={styles.title}>Produto</Text>
        {data?.map((item, index) => (
          <View style={styles.flex} key={index}>
            <Text>{item?.name}</Text>
            <Text>{item?.price}</Text>
          </View>
        ))}

        <View style={styles.box}>
          <Text>
            Total: <sup>R$</sup>
            {total}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyPdf;
