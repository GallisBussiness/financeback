import { PartialType } from '@nestjs/mapped-types';
import { CreateVirementDto } from './create-virement.dto';

export class UpdateVirementDto extends PartialType(CreateVirementDto) {}
