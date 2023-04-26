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
 
This is the API building assignment given by Mobilicis India Private Limited, in which i have used NEXT.Js and Tailwind CSS for the frontend, and i have used Express and MongoDB for the backend, the assignment required me to query the sample dataset and give some insightful APIs through the website, which i have successfully executed.I have deployed the website from Vercel and the URL to the working API providing website is - https://mobilicis-assignment-eta.vercel.app/

## Project Structure and Working of the API 

I have written the server code in the API directory provided by NEXT.Js which supplies all the APIs to the website, there are 5 endpoint in the website, each corresponds to the questions asked in the assignment word file.

These endpoints have been then rendered server side before the page loads via the `getServerSideProps` method of NEXT.Js, which is a crucial part in making the API fast and reduce the load time, you can see the results of the API call in just Milliseconds after you press one of the buttons in the website.


