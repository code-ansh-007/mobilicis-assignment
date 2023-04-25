// ? Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

import dbConnect from "@/utils/mongo";
import Assignment from "@/models/Assignment";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const dataset = await Assignment.find({
        income: { $lt: "$5" },
        car: { $in: ["BMW", "Mercedes"] },
      });
      res.status(200).json(dataset);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
