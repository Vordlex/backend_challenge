import { NextFunction, Request, Response } from "express"

const reservationTokenCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reservationToken } = req.body

  if (typeof reservationToken !== "string") {
    res.statusCode = 400
    return res.send()
  }

  return next()
}

export default reservationTokenCheck
