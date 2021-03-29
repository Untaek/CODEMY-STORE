import { Controller, Get } from "@nestjs/common";
import { DocumentService } from "./document";

@Controller('/')
export class SiteController {
  constructor(private readonly document: DocumentService) {}

  @Get()
  findDocuments() {
    return this.document.documents()
  }
}