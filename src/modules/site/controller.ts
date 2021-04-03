import { Controller, Get, Param } from "@nestjs/common";
import { DocumentService } from "./document";

@Controller('/')
export class SiteController {
  constructor(private readonly document: DocumentService) {}

  @Get()
  findDocuments() {
    return this.document.documents({ select: { id: true, title: true, name: true, createdAt: true } })
  }

  @Get('/:id')
  findDocument(@Param('id') id: string) {
    return this.document.document({ 
      where: { id: parseInt(id) },
      include: { comments: true, likeUsers: true, user: true }
    })
  }
}