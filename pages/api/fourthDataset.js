// ? Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

import dbConnect from "@/utils/mongo";
import Assignment from "@/models/Assignment";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const dataset = await Assignment.find({
        car: { $in: ["BMW", "Mercedes", "Audi"] },
        email: { $exists: true, $not: /[\d]/ },
      });
      res.status(200).json(dataset);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
