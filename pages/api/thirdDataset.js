// ? Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

import dbConnect from "@/utils/mongo";
import Assignment from "@/models/Assignment";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const dataset = await Assignment.find({
        last_name: /^M/,
        $expr: {
          $gt: [{ $strLenCP: "$quote" }, 15],
        },
        email: { $regex: /M[a-z]*@/i },
      });
      res.status(200).json(dataset);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
