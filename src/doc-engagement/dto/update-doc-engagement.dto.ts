import { PartialType } from '@nestjs/mapped-types';
import { CreateDocEngagementDto } from './create-doc-engagement.dto';

export class UpdateDocEngagementDto extends PartialType(CreateDocEngagementDto) {}
