import { Module } from '@nestjs/common';
import { DocEngagementService } from './doc-engagement.service';
import { DocEngagementController } from './doc-engagement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DocEngagement, DocEngagementSchema } from './entities/doc-engagement.entity';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/engagements-files');
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
  imports:[MongooseModule.forFeature([{name: DocEngagement.name, schema:DocEngagementSchema}]),
  MulterModule.register({
    storage
  })
],
  controllers: [DocEngagementController],
  providers: [DocEngagementService],
})
export class DocEngagementModule {}
