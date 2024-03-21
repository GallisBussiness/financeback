import { IsNotEmpty, IsString } from "class-validator";

export class CreateCatFournisseurDto {
    @IsNotEmpty()
    @IsString()
    libelle: string;
}
