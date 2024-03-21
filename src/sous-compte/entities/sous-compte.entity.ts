import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { CompteDivisionnaire } from "src/compte-divisionnaire/entities/compte-divisionnaire.entity";

export type SousCompteDocument = HydratedDocument<SousCompte>

@Schema({timestamps: true})
export class SousCompte {
_id: string;

@Prop({type: Number,required: true, unique: true})
code: number;

@Prop({type: String,required: true})
libelle:string;

@Prop({type: Types.ObjectId,ref: CompteDivisionnaire.name,required: true, autopopulate: true})
compte_divisionnaire: CompteDivisionnaire;
}

export const SousCompteSchema = SchemaFactory.createForClass(SousCompte);