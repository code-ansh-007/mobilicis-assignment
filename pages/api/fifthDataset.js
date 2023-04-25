// ? Show the data of top 10 cities which have the highest number of users and their average income.

import dbConnect from "@/utils/mongo";
import Assignment from "@/models/Assignment";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const dataset = await Assignment.aggregate([
        {
          $group: {
            _id: "$city",
            count: { $sum: 1 },
            avg_income: {
              $avg: { $toDouble: { $substr: ["$income", 1, -1] } },
            },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]);
      res.status(200).json(dataset);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
