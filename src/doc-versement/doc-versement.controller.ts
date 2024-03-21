import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { DocVersementService } from './doc-versement.service';
import { CreateDocVersementDto } from './dto/create-doc-versement.dto';
import { UpdateDocVersementDto } from './dto/update-doc-versement.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { existsSync, unlinkSync } from 'fs';

@Controller('doc-versement')
export class DocVersementController {
  constructor(private readonly docVersementService: DocVersementService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(@UploadedFiles(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 10 * 1024 ** 2 }), // 10MB
      new FileTypeValidator({ fileType: 'application/pdf'}),
    ],
  })) files: Array<Express.Multer.File>,@Body() createDocVersementDto: CreateDocVersementDto) {
    const data: CreateDocVersementDto[] = files.map(f => ({...createDocVersementDto,path: f.filename}));
    return this.docVersementService.createMany(data);
  }


  @Get('byversement/:id')
  findOne(@Param('id') id: string) {
    return this.docVersementService.findByVersement(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDocEngagementDto: UpdateDocEngagementDto) {
  //   return this.docEngagementService.update(id, updateDocEngagementDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
   const doc = await this.docVersementService.remove(id);
   if(doc && existsSync("uploads/engagements-files/" + doc.path)){
    unlinkSync("uploads/engagements-files/" + doc.path);
  }
  return doc;
  }
}
