import { IsDateString, IsEnum, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";


export enum EtatVersement {
    SOUMIS = 'SOUMIS',
    VALIDE = 'VALIDE',
    REJETE = 'REJETE',
}

export class CreateVersementDto {
    @IsNotEmpty()
    @IsString()
    numero: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsString()
    partie_versante: string;

    @IsInt()
    montant: number;

    @IsNotEmpty()
    @IsMongoId()
    credit:  string;

    @IsOptional()
    @IsEnum(EtatVersement)
    etat: string;
}
