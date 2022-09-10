import { Router } from "express"
import controllers from "../controllers/controllers"
import middlewares from "../middlewares/middlewares"

const productRouter = Router()

productRouter.patch(
  "/product/:id/stock",
  middlewares.idParamCheck,
  controllers.patchProductStock
)
productRouter.get(
  "/product/:id",
  middlewares.idParamCheck,
  controllers.getProduct
)
productRouter.post(
  "/product/:id/reserve",
  middlewares.idParamCheck,
  middlewares.quantityCheck,
  controllers.postProductReserve
)
productRouter.post(
  "/product/:id/unreserve",
  middlewares.idParamCheck,
  controllers.postProductUnreserve
)
productRouter.post(
  "/product/:id/sold",
  middlewares.idParamCheck,
  controllers.postProductSold
)

export default productRouter
