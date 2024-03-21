import { IsMongoId, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateCreditDto {
    @IsNotEmpty()
    @IsMongoId()
    budget: string;

    @IsNotEmpty()
    @IsMongoId()
    souscompte: string;

    @IsNumber()
    prevision: number;
}
