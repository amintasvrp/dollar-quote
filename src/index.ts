// Module responsible for configuring and starting the server

import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";

import DollarQuoteRequestResolver from "./resolvers/DollarQuoteRequestResolver";

async function bootstrap() {
  await createConnection();
  const schema: any = await buildSchema({
    resolvers: [DollarQuoteRequestResolver],
  });

  require("dotenv/config");
  const port = process.env.API_PORT || 4000;
  const server = new GraphQLServer({ schema });

  server.start({ port }, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    )
  );
}

bootstrap();
