-- CreateTable
CREATE TABLE "Testimonial" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sublegend" TEXT NOT NULL,
    "sublegendHref" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "avatar" TEXT,
    "testimonial" TEXT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);
