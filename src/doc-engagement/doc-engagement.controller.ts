import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { DocEngagementService } from './doc-engagement.service';
import { CreateDocEngagementDto } from './dto/create-doc-engagement.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { existsSync, unlinkSync } from 'fs';

@Controller('doc-engagement')
export class DocEngagementController {
  constructor(private readonly docEngagementService: DocEngagementService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(@UploadedFiles(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 10 * 1024 ** 2 }), // 10MB
      new FileTypeValidator({ fileType: 'application/pdf'}),
    ],
  })) files: Array<Express.Multer.File>,@Body() createDocEngagementDto: CreateDocEngagementDto) {
    const data: CreateDocEngagementDto[] = files.map(f => ({...createDocEngagementDto,path: f.filename}));
    return this.docEngagementService.createMany(data);
  }


  @Get('byengagement/:id')
  findOne(@Param('id') id: string) {
    return this.docEngagementService.findByEngagement(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDocEngagementDto: UpdateDocEngagementDto) {
  //   return this.docEngagementService.update(id, updateDocEngagementDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
   const doc = await this.docEngagementService.remove(id);
   if(doc && existsSync("uploads/engagements-files/" + doc.path)){
    unlinkSync("uploads/engagements-files/" + doc.path);
  }
  return doc;
  }
}
