import { IsDateString, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBordereauDto {

    @IsOptional()
    @IsString()
    numero: string;

    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsMongoId()
    budget: string;
}
