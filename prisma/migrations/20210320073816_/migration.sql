-- CreateTable
CREATE TABLE "buku" (
    "id_buku" SERIAL NOT NULL,
    "judul" VARCHAR(10) NOT NULL,
    "pengarang" VARCHAR(100) NOT NULL,
    "penerbit" VARCHAR(100) NOT NULL,
    "tahun_terbit" VARCHAR(100) NOT NULL,
    "isbn" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    PRIMARY KEY ("id_buku")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id_kategori" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(100) NOT NULL,

    PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "pinjaman" (
    "id_pinjaman" SERIAL NOT NULL,
    "awal_pinjaman" DATE NOT NULL,
    "akhir_pinjaman" DATE NOT NULL,
    "id_buku" INTEGER NOT NULL,
    "id_users" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL,

    PRIMARY KEY ("id_pinjaman")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id_rating" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "buku" INTEGER NOT NULL,

    PRIMARY KEY ("id_rating")
);

-- CreateTable
CREATE TABLE "diskusi" (
    "id_diskusi" SERIAL NOT NULL,
    "diskusi" TEXT NOT NULL,
    "buku" INTEGER NOT NULL,
    "users" INTEGER NOT NULL,

    PRIMARY KEY ("id_diskusi")
);

-- AddForeignKey
ALTER TABLE "pinjaman" ADD FOREIGN KEY ("id_buku") REFERENCES "buku"("id_buku") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pinjaman" ADD FOREIGN KEY ("id_users") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD FOREIGN KEY ("buku") REFERENCES "buku"("id_buku") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diskusi" ADD FOREIGN KEY ("buku") REFERENCES "buku"("id_buku") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diskusi" ADD FOREIGN KEY ("users") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
