import { PartialType } from '@nestjs/mapped-types';
import { CreateCatFournisseurDto } from './create-cat-fournisseur.dto';

export class UpdateCatFournisseurDto extends PartialType(CreateCatFournisseurDto) {}
