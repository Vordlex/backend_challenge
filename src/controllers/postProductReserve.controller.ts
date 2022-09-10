import { PrismaClient } from "@prisma/client"
import { randomUUID } from "crypto"

import { Request, Response } from "express"

const prisma = new PrismaClient()

const postProductReserve = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const product = await prisma.product.update({
      data: {
        RESERVED: {
          increment: 1,
        },
        IN_STOCK: {
          decrement: 1,
        },
      },
      where: {
        id,
      },
    })

    if (!product) {
      res.statusCode = 404
      return res.send()
    }

    const reservedUUID = randomUUID()

    await prisma.reserved.create({
      data: {
        id: reservedUUID,
        productId: id,
      },
    })

    res.statusCode = 200

    return res.json({
      reservationToken: reservedUUID,
    })
  } catch (error) {
    res.statusCode = 500
    return res.json({ ERROR: "UNKNOW_ERROR" })
  }
}

export default postProductReserve
