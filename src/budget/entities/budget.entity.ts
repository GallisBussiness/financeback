import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BudgetDocument = HydratedDocument<Budget>;

@Schema({timestamps: true})
export class Budget {
    _id: string;

    @Prop({type: String,required: true})
    annee: string;

    @Prop({type: Boolean,required: true,default: false})
    etat: boolean;

    @Prop({type: String})
    description: string;
}


export const BudgetSchema = SchemaFactory.createForClass(Budget);