// ? Male Users which have phone price greater than 10,000.

import dbConnect from "@/utils/mongo";
import Assignment from "@/models/Assignment";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const dataset = await Assignment.find({
        gender: "Male",
        $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] },
      });
      res.status(200).json(dataset);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
