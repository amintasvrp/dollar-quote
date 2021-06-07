// Module responsible for defining the DollarQuoteRequest template that will be persisted

import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class DollarQuoteRequest extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Date)
  @Column({ type: "datetime" })
  timestamp: Date;

  @Field(() => Date)
  @Column({ type: "date" })
  quoteDate: string;

  @Field(() => Number)
  @Column({ type: "double" })
  buyQuote: number;

  @Field(() => Number)
  @Column({ type: "double" })
  sellQuote: number;

  @Field(() => Date)
  @Column({ type: "datetime" })
  datetimeQuote: string;
}
