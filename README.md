## Website Preview

![alt text](/assets/assign2.png)

## Brief Introduction

This is the API building assignment given by Mobilicis India Private Limited, in which i have used NEXT.Js and Tailwind CSS for the frontend, and i have used Express and MongoDB for the backend, the assignment required me to query the sample dataset and give some insightful APIs through the website, which i have successfully executed. I have deployed the website via Vercel and the URL to the working API providing website is - https://mobilicis-assignment-eta.vercel.app/

## Project Structure and Optimizations

- I have written the server code in the API directory provided by NEXT.Js which supplies all the APIs to the website, there are 5 endpoints in the website, each corresponds to the questions asked in the assignment word file.

- These endpoints have been then rendered server side before the page loads via the `getServerSideProps` method of NEXT.Js, which is a crucial part in making the API fast and reduce the load time, you can see the results of the API call in just Milliseconds after you press one of the buttons in the website.

## API Endpoints and their working

Below are the API Endpoints for each of the questions in the word file, respectively, I would recommend to visit the site first to visualize the data in table format first and then going to the below links to see the working of the API endpoints. Visit the links below to view the JSON objects output of the dataset.

1. https://mobilicis-assignment-eta.vercel.app/api/firstDataset
2. https://mobilicis-assignment-eta.vercel.app/api/secondDataset
3. https://mobilicis-assignment-eta.vercel.app/api/thirdDataset
4. https://mobilicis-assignment-eta.vercel.app/api/fourthDataset
5. https://mobilicis-assignment-eta.vercel.app/api/fifthDataset

Lets understand the working of the endpoints by considering fourth question's server code

```javascript
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

- the `dbConnect` function is a mongodb Atlas connection establishment function which is imported from the utils directory of the website, which ensures that there is successfull connection between the website and the database.
- the `Assignment` model is the overall model of the object of the dataset for retrieval and query purposes.
- to excute the queries i have used the MongoDB Query Language(MQL), which can be seen inside the `try` block of the above code segment, in the above case, i have queried for the objects/users, who own either a 'BMW', 'Mercedes' or an 'Audi' and do not have any digits in his/her email.
- the response is then sent to the frontend when the `getServerSideProps` function is run in the index.js file in the pages directory of the website.
- the obtained response is then further handled in the frontend to display it beautifully in the form of tables in the front end.

## For code analysis clone the repo in your system

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
