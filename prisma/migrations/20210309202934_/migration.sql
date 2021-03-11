-- CreateTable
CREATE TABLE `buku` (
    `id_buku` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(10) NOT NULL,
    `pengarang` VARCHAR(100) NOT NULL,
    `penerbit` VARCHAR(100) NOT NULL,
    `tahun_terbit` VARCHAR(100) NOT NULL,
    `isbn` INTEGER NOT NULL,
    `keterangan` TEXT NOT NULL,
    `foto` TEXT NOT NULL,

    PRIMARY KEY (`id_buku`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kategori` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pinjaman` (
    `id_pinjaman` INTEGER NOT NULL AUTO_INCREMENT,
    `awal_pinjaman` DATE NOT NULL,
    `akhir_pinjaman` DATE NOT NULL,

    PRIMARY KEY (`id_pinjaman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
