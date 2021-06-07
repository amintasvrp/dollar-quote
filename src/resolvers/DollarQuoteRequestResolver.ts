// Module responsible for receiving requests and responding to them using controllers

import { Resolver, Query, Arg } from "type-graphql";
import { getDollarQuoteByDate } from "../services/DollarQuoteRequester";
import { saveDollarQuoteRequest } from "../controllers/DollarQuoteRequestController";

import {
  GraphQLResponse,
  ResponseOK,
  ResponseNotFound,
} from "../utils/Response";

@Resolver((of) => GraphQLResponse)
export default class {
  @Query((returns) => GraphQLResponse, { nullable: true })
  async queryDollarQuote(@Arg("date") date: string) {
    const data = await getDollarQuoteByDate(date);
    if (data) {
      const dollarQuote = await saveDollarQuoteRequest(date, data);
      return ResponseOK(dollarQuote);
    } else {
      return ResponseNotFound(null, "No quotation was registered on this date");
    }
  }
}
