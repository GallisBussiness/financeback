import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Credit } from "src/credit/entities/credit.entity";
import { EtatVersement } from "../dto/create-versement.dto";

export type VersementDocument = HydratedDocument<Versement>;

@Schema({timestamps: true})
export class Versement {

    _id: string;
    
    @Prop({type: String,required: true})
    numero: string;

    @Prop({type: Date, required: true })
    date: Date;

    @Prop({type: String, required: true })
    partie_versante: string;

    @Prop({type: Number, required: true })
    montant: number;

    @Prop({type: Types.ObjectId,ref: Credit.name,required: true,autopopulate: true})
    credit:  Credit;

    @Prop({type: String, enum:EtatVersement, default: EtatVersement.SOUMIS, required: true})
    etat: string;
}

export const VersementSchema = SchemaFactory.createForClass(Versement);