import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export enum CLASSE {
    PRODUIT_INVESTISSEMENT = "PRODUIT_INVESTISSEMENT",
    CHARGE_INVESTISSEMENT = "CHARGE_INVESTISSEMENT",
    PRODUIT_DE_FONCTIONNEMENT = "PRODUIT_DE_FONCTIONNEMENT",
    CHARGE_DE_FONCTIONNEMENT ="CHARGE_DE_FONCTIONNEMENT",
    } 

export class CreateCompteDto {
    @IsNotEmpty()
    @IsNumber()
    code: number;

    @IsNotEmpty()
    @IsString()
    libelle: string;

    @IsNotEmpty()
    @IsEnum(CLASSE)
    classe: string;
}
