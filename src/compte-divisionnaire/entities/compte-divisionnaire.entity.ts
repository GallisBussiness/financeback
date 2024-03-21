import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Compte } from "src/compte/entities/compte.entity";

export type CompteDivisionnaireDocument = HydratedDocument<CompteDivisionnaire>;

@Schema({timestamps: true})
export class CompteDivisionnaire {
_id: string;

@Prop({type: Number,required: true, unique: true})
code: number;

@Prop({type: String,required: true})
libelle:string;

@Prop({type: Types.ObjectId,ref: Compte.name,required: true, autopopulate: true})
compte: Compte;
}

export const CompteDivisionnaireSchema = SchemaFactory.createForClass(CompteDivisionnaire);