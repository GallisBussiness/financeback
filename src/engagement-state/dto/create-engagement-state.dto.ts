import { IsEnum, IsMongoId } from "class-validator";
import { EtatEngagement } from "src/engagement/dto/create-engagement.dto";

export class CreateEngagementStateDto {
    @IsMongoId()
    auteur: string;

    @IsMongoId()
    engagement: string;

    @IsEnum(EtatEngagement)
    etat: string;
}
