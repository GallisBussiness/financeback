import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Banque } from "src/banque/entities/banque.entity";
import { CatFournisseur } from "src/cat-fournisseur/entities/cat-fournisseur.entity";

export type FournisseurDocument = HydratedDocument<Fournissseur>;

@Schema({timestamps: true})
export class Fournissseur {

    _id: string;

    @Prop({type: Types.ObjectId,ref: CatFournisseur.name,required: true,autopopulate: true})
    categorie: CatFournisseur;

    @Prop({type: String,required: true,unique:true})
    denomination: string;

    @Prop({type: Types.ObjectId,ref: Banque.name,required: true,autopopulate: true})
    domiciliation: Banque;

    @Prop({type: String,required: true,unique:true})
    compte_bancaire: string;

    @Prop({type: String,unique:true})
    telephone: string;

    @Prop({type: String,unique:true})
    ninea: string;

    @Prop({type: String,unique:true})
    registre_de_commerce: string;

    @Prop({type: String})
    adresse: string;
}

export const FournissseurSchema = SchemaFactory.createForClass(Fournissseur);
