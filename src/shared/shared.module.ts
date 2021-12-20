import { CacheModule, Global, Module } from '@nestjs/common';
import { WeixinService } from './weixin/weixin.service';

const services = [WeixinService];

@Global()
@Module({
  imports:[CacheModule.register()],
  providers: services,
  exports: services,
})
export class SharedModule {}