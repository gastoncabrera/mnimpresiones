import { Schema, model, models } from "mongoose";

const stockSchema = new Schema(
  {
    tipo: {
      type: String,
      required: [true, "El nombre es requerido"],
      unique: true,
      trim: true,
      maxlength: [40, "Title must be less than 40 characters"],
    },

    cantidad: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Stock || model("Stock", stockSchema);
