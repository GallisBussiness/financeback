import { IsInt, IsMongoId, IsNotEmpty } from "class-validator";

export class CreateAutorisationDto {
    @IsNotEmpty()
    @IsMongoId()
    for:string;

    @IsNotEmpty()
    @IsInt()
    montant:number;
}
