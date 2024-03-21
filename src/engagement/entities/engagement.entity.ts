import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Bordereau } from "src/bordereau/entities/bordereau.entity";
import { Credit } from "src/credit/entities/credit.entity";
import { Fournissseur } from "src/fournissseur/entities/fournissseur.entity";
import { EtatEngagement } from "../dto/create-engagement.dto";

export type EngagementDocument = HydratedDocument<Engagement>;

@Schema({timestamps: true})
export class Engagement {

    _id: string;

    @Prop({type: String,required:true})
    numero: string;

    @Prop({type: Date,required:true})
    date: Date;

    @Prop({type: String, required: true })
    objet: string;

    @Prop({type: Types.ObjectId,ref: Credit.name,required: true,autopopulate: true})
    credit: Credit;

    @Prop({type: String})
    beneficiaire: string;

    @Prop({type: Types.ObjectId,ref: Fournissseur.name,autopopulate: true})
    fournisseur: Fournissseur;

    @Prop({type: Types.ObjectId,ref: Bordereau.name,required: true,autopopulate: true})
    bordereau: string;

    @Prop({type: Number, default: 0})
    montant: number;

    @Prop({type: String, enum:EtatEngagement, default: EtatEngagement.BROUILLON, required: true})
    etat: string;
}

export const  EngagementSchema = SchemaFactory.createForClass(Engagement);