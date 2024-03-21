import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBanqueDto {
    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsString()
    libelle: string;

    @IsNotEmpty()
    @IsString()
    sigle: string;
}
