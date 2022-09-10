import { NextFunction, Request, Response } from "express"

const idParamCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  if (typeof id !== "string") {
    res.statusCode = 400
    return res.send()
  }

  if (id.length < 32 || id.length > 36) {
    res.statusCode = 400
    return res.send()
  }

  return next()
}

export default idParamCheck
