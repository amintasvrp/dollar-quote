// Module responsible for get from the External API the dollar quotation information by date

import axios from "axios";

export const getDollarQuoteByDate = async (date: string) => {
  const response = await axios.get(
    `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
  );
  return response.data.value.length ? response.data.value[0] : null;
};
