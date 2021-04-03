/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[key]` on the table `SourceLanguage`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SourceLanguage.key_unique" ON "SourceLanguage"("key");
