-- AlterTable
ALTER TABLE "Partners" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "job" TEXT,
    "imageUrl" TEXT,
    "href" TEXT,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScholarshipMember" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "href" TEXT NOT NULL,

    CONSTRAINT "ScholarshipMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OldMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "job" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "OldMember_pkey" PRIMARY KEY ("id")
);
