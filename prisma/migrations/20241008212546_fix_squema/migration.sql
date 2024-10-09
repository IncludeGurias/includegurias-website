-- AlterTable
ALTER TABLE "News" ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PrimaryPageSocialMediaPosts" ALTER COLUMN "date" DROP NOT NULL;
