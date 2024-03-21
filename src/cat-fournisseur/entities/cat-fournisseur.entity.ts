import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatFournisseurDocument = HydratedDocument<CatFournisseur>

@Schema({timestamps: true})
export class CatFournisseur {
    _id: string;

    @Prop({type: String,required: true,unique: true})
    libelle: string;
}

export const CatFournisseurSchema = SchemaFactory.createForClass(CatFournisseur);
