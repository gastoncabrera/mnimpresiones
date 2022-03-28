import { dbConnect } from "utils/mongoose";
import Pedido from "models/Pedido";
dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (req.method) {
    case "GET":
      try {
        const pedido = await Pedido.find();
        return res.status(200).json(pedido);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newPedido = new Pedido(body);
        const savedPedido = await newPedido.save();
        return res.status(201).json(savedPedido);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
}
