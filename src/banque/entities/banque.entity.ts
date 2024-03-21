import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BanqueDocument = HydratedDocument<Banque>;

@Schema({timestamps: true})
export class Banque {

    _id: string;

    @Prop({type: String,required: true,unique: true})
    code: string;

    @Prop({type: String,required: true})
    libelle: string;

    @Prop({type: String,required: true})
    sigle: string;
}


export const BanqueSchema = SchemaFactory.createForClass(Banque);
