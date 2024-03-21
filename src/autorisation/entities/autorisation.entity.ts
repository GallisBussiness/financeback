import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Credit } from "src/credit/entities/credit.entity";

export type AutorisationDocument = HydratedDocument<Autorisation>;


@Schema({timestamps:true})
export class Autorisation {

    _id: string;

    @Prop({type: Types.ObjectId,ref: Credit.name,required: true,autopopulate: true})
    for:Credit;

    @Prop({type:Number,required: true })
    montant:number;
}

export const AutorisationSchema = SchemaFactory.createForClass(Autorisation);