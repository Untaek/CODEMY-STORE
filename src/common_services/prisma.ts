import { PrismaClient } from ".prisma/client";
import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
      await this.$connect()
      this.registerPrintLog()
    }

    async onModuleDestroy() {
      await this.$disconnect()
    }

    registerPrintLog () {
      this.$use(async (params, next) => {
        const before = Date.now()
        const result = await next(params)
        const after = Date.now()
      
        console.log(`Query ${params.model}.${params.action} took ${after - before}ms.`)
      
        return result
      })
    }
  }