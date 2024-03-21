import { PartialType } from '@nestjs/mapped-types';
import { CreateVersementDto } from './create-versement.dto';

export class UpdateVersementDto extends PartialType(CreateVersementDto) {}
