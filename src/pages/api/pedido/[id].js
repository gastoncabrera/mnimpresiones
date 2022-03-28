import { dbConnect } from "utils/mongoose";
import Pedido from "models/Pedido";

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
        const pedido = await Pedido.findById(id);
        if (!pedido) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(pedido);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const pedido = await Pedido.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!pedido) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(pedido);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedPedido = await Pedido.findByIdAndDelete(id);
        if (!deletedPedido) return res.status(404).json({ msg: "Task not Found" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
};
