import { Schema, model, models } from 'mongoose';

const pedidoSchema = new Schema(
  {
    pedido: [
      {
        tipo: {
          type: String,
          required: [true, 'a'],
          trim: true,
          maxlength: [240, 'Title must be less than 40 characters'],
        },
        cantidad: {
          type: Number,
          required: true,
        },
      },
    ],

    description: {
      type: String,
      required: [true, 'b'],
      trim: true,
      maxlength: [240, 'Title must be less than 40 characters'],
    },

    isComplete: {
      type: Boolean,
      default: false,
    },

    namePerson: {
      type: String,
      required: [true, 'c'],
      trim: true,
      maxlength: [40, 'Title must be less than 40 characters'],
    },
    phone: {
      type: Number,
      required: [true, 'd'],
      trim: true,
      maxlength: [10, 'Title must be less than 10 characters'],
    },
    delivery: {
      type: String,
    },
    costo: {
      type: Number,
    },
    sena: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Pedido || model('Pedido', pedidoSchema);
