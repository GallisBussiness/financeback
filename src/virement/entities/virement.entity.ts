import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Credit } from "src/credit/entities/credit.entity";

export type VirementDocument = HydratedDocument<Virement>;

@Schema({timestamps: true})
export class Virement {
    _id: string;

    @Prop({type: Types.ObjectId, ref: Credit.name, required: true,autopopulate: true})
    from: Credit;

    @Prop({type: Types.ObjectId, ref: Credit.name, required: true,autopopulate: true})
    to: Credit;

    @Prop({type: Number, required: true})
    montant: number;
}

export const VirementSchema = SchemaFactory.createForClass(Virement);
