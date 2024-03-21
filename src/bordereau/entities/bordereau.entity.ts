import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Budget } from "src/budget/entities/budget.entity";

export type BordereauDocument = HydratedDocument<Bordereau>;

@Schema({timestamps: true})
export class Bordereau {

    _id: string;

    @Prop({type: String,required:true})
    numero: string;

    @Prop({type: String,required: true})
    nom:string;

    @Prop({type: Date, required: true})
    date: Date;

    @Prop({type: Types.ObjectId,ref: Budget.name,required: true,autopopulate: true})
    budget: Budget;
}

export const BordereauSchema = SchemaFactory.createForClass(Bordereau);