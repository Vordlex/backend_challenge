import { PrismaClient } from "@prisma/client"

import { Request, Response } from "express"

const prisma = new PrismaClient()

const patchProductStock = async (req: Request, res: Response) => {
  try {
    const { stock } = req.body
    const { id } = req.params

    if (typeof stock !== "number") {
      res.statusCode = 400
      return res.json({ ERROR: "STOCK_REQUIRED" })
    }

    await prisma.product.upsert({
      where: {
        id,
      },
      create: {
        id,
        IN_STOCK: stock,
      },
      update: {
        IN_STOCK: stock,
      },
    })

    res.statusCode = 204

    return res.send()
  } catch (error) {
    res.statusCode = 500
    return res.json({ ERROR: "UNKNOW_ERROR" })
  }
}

export default patchProductStock
