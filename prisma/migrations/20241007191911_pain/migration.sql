-- CreateTable
CREATE TABLE "Guria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthplace" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "deathdate" TEXT,
    "bio" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Guria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuriaTag" (
    "id" SERIAL NOT NULL,
    "guriaId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "GuriaTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "GuriaTag" ADD CONSTRAINT "GuriaTag_guriaId_fkey" FOREIGN KEY ("guriaId") REFERENCES "Guria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuriaTag" ADD CONSTRAINT "GuriaTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
