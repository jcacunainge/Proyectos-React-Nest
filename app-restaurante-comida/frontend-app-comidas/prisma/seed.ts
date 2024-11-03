import { error } from "console";
import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    
    await prisma.category.createMany({
      data: categories,
    });

    const updatedProducts = products.map((product) => ({
      ...product,
      categoryId: product.categoryId,
    }));

  } catch (error) {
    console.error("Error al sembrar la base de datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
