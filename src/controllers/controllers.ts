import patchProductStock from "./patchProductStock.controller"
import getProduct from "./patchProduct.controller"
import postProductReserve from "./postProductReserve.controller"
import postProductUnreserve from "./postProductUnreserve.controller"
import postProductSold from "./postProductSold.controller"

const controller = {
  patchProductStock,
  getProduct,
  postProductReserve,
  postProductUnreserve,
  postProductSold
}

export default controller
