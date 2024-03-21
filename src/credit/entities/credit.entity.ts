import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Budget } from "src/budget/entities/budget.entity";
import { SousCompte } from "src/sous-compte/entities/sous-compte.entity";

export type CreditDocument = HydratedDocument<Credit>;

@Schema({timestamps: true})
export class Credit {
    _id: string;

    @Prop({type: Types.ObjectId,ref:Budget.name,required: true,autopopulate: true})
    budget: Budget;

    @Prop({type: Types.ObjectId,ref:SousCompte.name,required: true,autopopulate: true})
    souscompte: SousCompte;

    @Prop({type: Number,required: true})
    prevision: number;
}


export const CreditSchema = SchemaFactory.createForClass(Credit);
