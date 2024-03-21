import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSousCompteDto {
    @IsNotEmpty()
    @IsNumber()
    code: number;

    @IsNotEmpty()
    @IsString()
    libelle: string;

    @IsNotEmpty()
    @IsMongoId()
    compte_divisionnaire: string;
}
