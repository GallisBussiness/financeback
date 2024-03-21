import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CLASSE } from "../dto/create-compte.dto";

export type CompteDocument = HydratedDocument<Compte>

@Schema({timestamps: true})
export class Compte {
_id: string;

@Prop({type: Number,required: true, unique: true})
code: number;

@Prop({type: String,required: true})
libelle:string;

@Prop({type: String,enum:CLASSE, required: true})
classe: string;
}


export const CompteSchema = SchemaFactory.createForClass(Compte);
