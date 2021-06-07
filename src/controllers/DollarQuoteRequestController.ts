// Module responsible for the business logic of handling data received from the External API

import { DollarQuoteRequest } from "../models/DollarQuoteRequest";

export const saveDollarQuoteRequest = async (date: string, data: any) => {
  const dollarQuoteRequest = DollarQuoteRequest.create({
    timestamp: new Date(),
    quoteDate: date,
    buyQuote: data.cotacaoCompra,
    sellQuote: data.cotacaoVenda,
    datetimeQuote: data.dataHoraCotacao,
  });
  return await dollarQuoteRequest.save();
};
