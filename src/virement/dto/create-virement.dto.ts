import { IsInt, IsMongoId, IsNotEmpty } from "class-validator";

export class CreateVirementDto {
    @IsNotEmpty()
    @IsMongoId()
    from: string;

    @IsNotEmpty()
    @IsMongoId()
    to: string;

    @IsNotEmpty()
    @IsInt()
    montant: number;
}
