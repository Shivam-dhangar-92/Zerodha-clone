import { Router } from "express";

import HoldingsModel from "../models/HoldingsModel.js";
import PositionModel from "../models/PositionsModel.js";
import OrderModel from "../models/OrderModel.js";

const router = Router();

router.get("/all-holdings", async (req, res) => {
  try {
    const data = await HoldingsModel.find({});
    res.json({
      data: data,
      message: "Data fetched Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      success: false,
      error: true,
    });
  }
});

router.get("/all-positions", async (req, res) => {
  try {
    const data = await PositionModel.find({});
    res.json({
      data: data,
      message: "Data fetched Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      success: false,
      error: true,
    });
  }
});

router.post("/new-order", async (req, res) => {
  try {
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save()
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      success: false,
      error: true,
    });
  }
});

router.get("/all-orders",async(req,res)=>{
  try {
    const data = await OrderModel.find({});
    res.json({
      data: data,
      message: "Data fetched Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      success: false,
      error: true,
    });
  }
})


export default router;
