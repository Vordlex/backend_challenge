import idParamCheck from "./idParamCheck"
import quantityCheck from "./quantityCheck"
import reservationTokenCheck from "./reservationTokenCheck"

const middlewares = {
  quantityCheck,
  idParamCheck,
  reservationTokenCheck
}

export default middlewares
