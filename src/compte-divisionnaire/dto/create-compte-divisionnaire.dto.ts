import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCompteDivisionnaireDto {
    @IsNotEmpty()
    @IsNumber()
    code: number;

    @IsNotEmpty()
    @IsString()
    libelle: string;

    @IsNotEmpty()
    @IsMongoId()
    compte: string;
}
