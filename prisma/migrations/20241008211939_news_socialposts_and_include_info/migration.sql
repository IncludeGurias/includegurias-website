/*
  Warnings:

  - You are about to drop the column `address` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `chatbot` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `coordinatorEmail` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `coordinatorName` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `coordinatorPhone` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `IncludeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryAddress` on the `IncludeInfo` table. All the data in the column will be lost.
  - Added the required column `name` to the `IncludeInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `IncludeInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IncludeInfo" DROP COLUMN "address",
DROP COLUMN "chatbot",
DROP COLUMN "coordinatorEmail",
DROP COLUMN "coordinatorName",
DROP COLUMN "coordinatorPhone",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "secondaryAddress",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PrimaryPageSocialMediaPosts" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subname" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "href" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "showInTimeline" BOOLEAN NOT NULL DEFAULT false,
    "socialMedia" TEXT NOT NULL,

    CONSTRAINT "PrimaryPageSocialMediaPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "href" TEXT,
    "showInTimeline" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
