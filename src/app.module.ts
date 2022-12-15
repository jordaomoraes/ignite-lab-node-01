import { Module } from '@nestjs/common';
import { DatebaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatebaseModule],
})
export class AppModule {}
