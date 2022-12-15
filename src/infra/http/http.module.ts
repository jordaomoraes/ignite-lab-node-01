import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatebaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatebaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
