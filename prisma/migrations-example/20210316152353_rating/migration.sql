/*
  Warnings:

  - Added the required column `id_buku` to the `pinjaman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_users` to the `pinjaman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pinjaman` ADD COLUMN     `id_buku` INTEGER NOT NULL,
    ADD COLUMN     `id_users` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `rating` (
    `id_rating` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,

    PRIMARY KEY (`id_rating`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_buku` ON `pinjaman`(`id_buku`);

-- CreateIndex
CREATE INDEX `fk_users` ON `pinjaman`(`id_users`);

-- AddForeignKey
ALTER TABLE `pinjaman` ADD FOREIGN KEY (`id_buku`) REFERENCES `buku`(`id_buku`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pinjaman` ADD FOREIGN KEY (`id_users`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
