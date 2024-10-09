/*
  Warnings:

  - You are about to drop the column `image` on the `PrimaryPageSocialMediaPosts` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `PrimaryPageSocialMediaPosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PrimaryPageSocialMediaPosts" DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
