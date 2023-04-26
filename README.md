## Clone the Repository in the system and install all the dependencies of NPM

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Brief Introduction
 
This is the API building assignment given by Mobilicis India Private Limited, in which i have used NEXT.Js and Tailwind CSS for the frontend, and i have used Express and MongoDB for the backend, the assignment required me to query the sample dataset and give some insightful APIs through the website, which i have successfully executed. I have deployed the website via Vercel and the URL to the working API providing website is - https://mobilicis-assignment-eta.vercel.app/

## Project Structure and Optimizations

- I have written the server code in the API directory provided by NEXT.Js which supplies all the APIs to the website, there are 5 endpoints in the website, each corresponds to the questions asked in the assignment word file.

- These endpoints have been then rendered server side before the page loads via the `getServerSideProps` method of NEXT.Js, which is a crucial part in making the API fast and reduce the load time, you can see the results of the API call in just Milliseconds after you press one of the buttons in the website.

## API Endpoints and thier working 

Below are the API Endpoints for each of the questions in the word file, respectively, I would recommend to visit the site first to visualize the data in table format first and then going to the below links to see the working of the API endlpoints.

1. https://mobilicis-assignment-eta.vercel.app/api/firstDataset
2. https://mobilicis-assignment-eta.vercel.app/api/secondDataset
3. https://mobilicis-assignment-eta.vercel.app/api/thirdDataset
4. https://mobilicis-assignment-eta.vercel.app/api/fourthDataset
5. https://mobilicis-assignment-eta.vercel.app/api/fifthDataset

Lets understand the working of the endpoints by considering fourth question's server code

```
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
```






