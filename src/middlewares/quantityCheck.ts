import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express"

const prisma = new PrismaClient()

const quantityCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const product = await prisma.product.findFirst({
    where: {
      id,
    },
    select: {
      IN_STOCK: true,
    },
  })

  if (!product) {
    res.statusCode = 404
    return res.send()
  }

  if (product.IN_STOCK < 1) {
    res.statusCode = 200
    return res.json({
      ERROR: "OUT_OF_STOCK",
    })
  }

  return next()
}

export default quantityCheck
