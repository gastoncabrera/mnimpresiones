import { dbConnect } from "utils/mongoose";
import Pedido from "models/Pedido";
import Stock from "models/Stock";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  async function restarStock(tipo, cantidad) {
    const stock = await Stock.find();
    const newStock = stock.filter((item) => item.tipo === tipo);

    if (newStock == false) {
      return false;
    } else {
      console.log("si existe");
      const stockCantidad = newStock[0].cantidad - cantidad;

      const _stock = await Stock.findByIdAndUpdate(
        newStock[0].id,
        { cantidad: stockCantidad },
        {
          new: true,
        }
      );
      console.log(_stock);
    }
  }
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
        const test = await newPedido.pedido.map((item) =>
          restarStock(item.tipo, item.cantidad)
        );
        // console.log(test);
        const savedPedido = await newPedido.save();
        return res.status(201).json(savedPedido);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
}
