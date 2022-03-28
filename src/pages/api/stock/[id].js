import { dbConnect } from "utils/mongoose";
import Stock from "models/Stock";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const stock = await Stock.findById(id);
        if (!stock) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(stock);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const stock = await Stock.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!stock) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(stock);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedStock = await Stock.findByIdAndDelete(id);
        if (!deletedStock) return res.status(404).json({ msg: "Task not Found" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
};
