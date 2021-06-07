// Module responsible for defining the types of responses to requests that are received by this API

import { ObjectType, Field } from "type-graphql";
import { DollarQuoteRequest } from "../models/DollarQuoteRequest";

@ObjectType()
export class GraphQLResponse {
  @Field(() => DollarQuoteRequest, { nullable: true })
  data: any | null;

  @Field(() => Number)
  statusCode: number;

  @Field(() => String)
  message: string;
}

export const ResponseOK = (data: any, message = "OK") => {
  const response: GraphQLResponse = {
    data,
    statusCode: 200,
    message,
  };
  return response;
};

export const ResponseNotFound = (data: any, message = "NOT FOUND") => {
  const response: GraphQLResponse = {
    data,
    statusCode: 404,
    message,
  };
  return response;
};
