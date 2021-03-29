import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { LoggerMiddleware } from "./common_services/logger";
import { SiteModule } from "./modules/site/module";

@Module({
  imports: [SiteModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}