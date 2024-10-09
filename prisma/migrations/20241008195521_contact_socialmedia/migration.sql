-- CreateTable
CREATE TABLE "PrimaryPageVideos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,

    CONSTRAINT "PrimaryPageVideos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMedia" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "SocialMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partners" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "href" TEXT,

    CONSTRAINT "Partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncludeInfo" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "coordinatorEmail" TEXT,
    "coordinatorPhone" TEXT,
    "coordinatorName" TEXT,
    "address" TEXT,
    "secondaryAddress" TEXT,
    "chatbot" TEXT,

    CONSTRAINT "IncludeInfo_pkey" PRIMARY KEY ("id")
);
