import { IsDateString, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateCommentaireDto {

    @IsNotEmpty()
    @IsMongoId()
    auteur: string;

    @IsNotEmpty()
    @IsMongoId()
    engagement: string;

    @IsNotEmpty()
    @IsString()
    contenu: string;
}
