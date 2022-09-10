import { PrismaClient } from "@prisma/client"

import { Request, Response } from "express"

const prisma = new PrismaClient()

const postProductOutStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { reservationToken } = req.body

    const reservedProduct = await prisma.reserved
      .delete({
        where: {
          id: reservationToken,
        },
      })
      .catch(() => {
        return
      })

    if (!reservedProduct) {
      res.statusCode = 404
      return res.send()
    }

    const product = await prisma.product.update({
      data: {
        RESERVED: {
          decrement: 1,
        },
        IN_STOCK: {
          increment: 1,
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

    res.statusCode = 200

    return res.send()
  } catch (error) {
    res.statusCode = 500
    return res.json({ ERROR: "UNKNOW_ERROR" })
  }
}

export default postProductOutStock
