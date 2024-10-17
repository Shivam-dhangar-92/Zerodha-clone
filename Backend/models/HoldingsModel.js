import { model } from "mongoose";

import HoldingSchema from "../schema/HoldingSchema.js";

const HoldingsModel= model("holding",HoldingSchema);

export default HoldingsModel

