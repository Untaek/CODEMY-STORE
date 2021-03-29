import { Module } from "@nestjs/common";
import { PrismaService } from "../../common_services/prisma";
import { SiteController } from "./controller";
import { DocumentService } from "./document";

@Module({
  controllers: [SiteController],
  providers: [PrismaService, DocumentService]
})
export class SiteModule {}