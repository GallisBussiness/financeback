import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBudgetDto {
    @IsNotEmpty()
    @IsString()
    annee: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    etat: boolean;
}
