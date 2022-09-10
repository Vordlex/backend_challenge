import { PrismaClient } from "@prisma/client"

import { Request, Response } from "express"

const prisma = new PrismaClient()

const patchProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const response = await prisma.product.findUnique({
      where: {
        id,
      },
      select: {
        SOLD: true,
        RESERVED: true,
        IN_STOCK: true,
      },
    })

    if (!response) {
      res.statusCode = 404
      return res.send()
    }

    res.statusCode = 201

    return res.json(response)
  } catch (error) {
    res.statusCode = 500
    
    return res.json({ ERROR: "UNKNOW_ERROR" })
  }
}

export default patchProduct
