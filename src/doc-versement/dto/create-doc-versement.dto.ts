import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDocVersementDto {
    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    @IsMongoId()
    versement: string;

    @IsOptional()
    @IsString()
    path: string;
}
