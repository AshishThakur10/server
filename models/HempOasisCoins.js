const mongoose = require("mongoose");

const HempOasisCoinsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    coin: [
      {
        coinId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("HempOasisCoins", HempOasisCoinsSchema);
