import { IsEnum, IsMongoId, IsOptional } from "class-validator";

export enum EtatEngagement {
    BROUILLON = 'BROUILLON',
    SOUMIS = 'SOUMIS',
    VALIDE = 'VALIDE',
    REJETE = 'REJETE',
    INVALIDE = 'INVALIDE',
    PAYE = 'PAYE'
}

export class UpdateStateDto {
    @IsOptional()
    @IsEnum(EtatEngagement)
    etat: string;

    @IsMongoId()
    auteur: string;

    @IsMongoId()
    engagement: string;
}