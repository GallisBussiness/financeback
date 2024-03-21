import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Engagement } from "src/engagement/entities/engagement.entity";

export type DocEngagementDocument = HydratedDocument<DocEngagement>;

@Schema({timestamps: true})
export class DocEngagement {

    _id: string;

    @Prop({type: String,required:true})
    nom: string;

    @Prop({type: String,required:true})
    path: string;

    @Prop({type: Types.ObjectId,ref:Engagement.name, required: true })
    engagement: Engagement;
}


export const DocEngagementSchema = SchemaFactory.createForClass(DocEngagement);