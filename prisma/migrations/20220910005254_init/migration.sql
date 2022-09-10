-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "IN_STOCK" INTEGER NOT NULL DEFAULT 0,
    "RESERVED" INTEGER NOT NULL DEFAULT 0,
    "SOLD" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserved" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,

    CONSTRAINT "Reserved_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sold" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,

    CONSTRAINT "Sold_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reserved" ADD CONSTRAINT "Reserved_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sold" ADD CONSTRAINT "Sold_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
