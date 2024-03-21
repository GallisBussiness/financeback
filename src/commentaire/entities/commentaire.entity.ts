import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Engagement } from "src/engagement/entities/engagement.entity";
import { User } from "src/user/entities/user.entity";

export  type CommentaireDocument = HydratedDocument<Commentaire>;

@Schema({timestamps: true})
export class Commentaire {

    _id: string;

    @Prop({type: Types.ObjectId,ref: User.name,required: true, autopopulate: true})
    auteur: User;

    @Prop({type: Types.ObjectId,ref: Engagement.name,required: true, autopopulate: true})
    engagement: Engagement;

    @Prop({type: String})
    contenu: string;
}

export const CommentaireSchema = SchemaFactory.createForClass(Commentaire);
