import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common_services/prisma";

type DocumentParams = {
  where?: Prisma.DocumentWhereInput
}

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService) {}

  async documents(params?: DocumentParams) {
    return this.prisma.document.findMany(params)
  }

  async document(params?: DocumentParams) {
    return this.prisma.document.findFirst(params)
  }
}