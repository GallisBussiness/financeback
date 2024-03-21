import { Module } from '@nestjs/common';
import { DocVersementService } from './doc-versement.service';
import { DocVersementController } from './doc-versement.controller';
import { diskStorage } from 'multer';
import { MongooseModule } from '@nestjs/mongoose';
import { DocVersement, DocVersementSchema } from './entities/doc-versement.entity';
import { MulterModule } from '@nestjs/platform-express';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/versements-files');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + '-' + file.originalname,
    );
  },
});

@Module({
  imports:[MongooseModule.forFeature([{name: DocVersement.name, schema:DocVersementSchema}]),
  MulterModule.register({
    storage
  })
],
  controllers: [DocVersementController],
  providers: [DocVersementService],
})
export class DocVersementModule {}
