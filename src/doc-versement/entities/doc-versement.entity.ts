import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Versement } from "src/versement/entities/versement.entity";

export type DocVersementDocument = HydratedDocument<DocVersement>;

@Schema({timestamps: true})
export class DocVersement {
    _id: string;

    @Prop({type: String,required:true})
    nom: string;

    @Prop({type: String,required:true})
    path: string;

    @Prop({type: Types.ObjectId,ref:Versement.name, required: true })
    versement: Versement;
}


export const  DocVersementSchema = SchemaFactory.createForClass(DocVersement);