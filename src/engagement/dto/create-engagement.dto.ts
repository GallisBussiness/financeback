import { IsDateString, IsEnum, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

export enum EtatEngagement {
    BROUILLON = 'BROUILLON',
    SOUMIS = 'SOUMIS',
    VALIDE = 'VALIDE',
    REJETE = 'REJETE',
    INVALIDE = 'INVALIDE',
    PAYE = 'PAYE'
}

export class CreateEngagementDto {

    @IsOptional()
    @IsString()
    numero: string;

    @IsNotEmpty()
    @IsDateString()
    date: string;

    @IsNotEmpty()
    @IsString()
    objet: string;

    @IsNotEmpty()
    @IsMongoId()
    credit: string;

    @IsOptional()
    @ValidateIf(o => !o.fournisseur)
    @IsString()
    beneficiaire: string;

    @IsOptional()
    fournisseur: string;

    @IsOptional()
    @IsMongoId()
    bordereau: string;

    @IsInt()
    montant: number;

    @IsOptional()
    @IsEnum(EtatEngagement)
    etat: string;

    @IsMongoId()
    auteur?: string;
}
