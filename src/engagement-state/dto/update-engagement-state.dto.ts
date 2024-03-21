import { PartialType } from '@nestjs/mapped-types';
import { CreateEngagementStateDto } from './create-engagement-state.dto';

export class UpdateEngagementStateDto extends PartialType(CreateEngagementStateDto) {}
