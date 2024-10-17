import { model } from "mongoose";
import PositionSchema from "../schema/PositionsSchema.js";

const PositionModel=model("position",PositionSchema);

export default PositionModel