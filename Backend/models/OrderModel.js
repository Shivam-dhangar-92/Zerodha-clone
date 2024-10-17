import { model } from "mongoose";
import OrderSchema from "../schema/OrdersSchema.js";

const OrderModel = model("order",OrderSchema);

export default OrderModel