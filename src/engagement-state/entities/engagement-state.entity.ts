import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { EtatEngagement } from "src/engagement/dto/create-engagement.dto";
import { Engagement } from "src/engagement/entities/engagement.entity";
import { User } from "src/user/entities/user.entity";


export type EngagementStateDocument = HydratedDocument<EngagementState>;

@Schema({timestamps: true})
export class EngagementState {
    @Prop({type: Types.ObjectId, required: true, ref: User.name,autopopulate: true})
    auteur: User;

    @Prop({type: Types.ObjectId, required: true, ref: Engagement.name,autopopulate: true})
    engagement: Engagement;

    @Prop({type: String,required: true,enum:EtatEngagement})
    etat: string;
}


export const EngagementStateSchema = SchemaFactory.createForClass(EngagementState);