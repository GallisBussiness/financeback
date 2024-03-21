import { IsMongoId, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateFournissseurDto {
    @IsNotEmpty()
    @IsMongoId()
    categorie: string;

    @IsNotEmpty()
    @IsString()
    denomination: string;

    @IsNotEmpty()
    @IsString()
    domiciliation: string;

    @IsNotEmpty()
    @IsString()
    compte_bancaire: string;

    @IsNotEmpty()
    @IsPhoneNumber("SN")
    telephone: string;

    @IsNotEmpty()
    @IsString()
    ninea: string;

    @IsNotEmpty()
    @IsString()
    registre_de_commerce: string;

    @IsNotEmpty()
    @IsString()
    adresse: string;

}
