import { dbConnect } from "utils/mongoose";
import Stock from "models/Stock";
dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (req.method) {
    case "GET":
      try {
        const stock = await Stock.find();
        return res.status(200).json(stock);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newStock = new Stock(body);
        const savedStock = await newStock.save();
        return res.status(201).json(savedStock);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
}
