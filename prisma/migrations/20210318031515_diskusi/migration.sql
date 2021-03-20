/*
  Warnings:

  - Added the required column `status` to the `pinjaman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pinjaman` ADD COLUMN     `status` VARCHAR(10) NOT NULL;

-- CreateTable
CREATE TABLE `diskusi` (
    `id_diskusi` INTEGER NOT NULL AUTO_INCREMENT,
    `diskusi` TEXT NOT NULL,

    PRIMARY KEY (`id_diskusi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rating` ADD FOREIGN KEY (`id_rating`) REFERENCES `buku`(`id_buku`) ON DELETE CASCADE ON UPDATE CASCADE;
