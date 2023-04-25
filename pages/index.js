import Table from "@/components/Table";
import axios from "axios";
import { useState } from "react";

export default function Home({ data1, data2, data3, data4, data5 }) {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  return (
    <>
      <main className="flex flex-col items-center justify-center py-10 space-y-10 px-[50px]">
        <span className="text-4xl font-bold">
          NEXT.Js - Express, API Assignment
        </span>
        <span className="text-xl">Click the buttons below</span>
        <div className="flex flex-col space-y-10">
          <button
            onClick={() => setShowFirst(!showFirst)}
            className="px-4 py-2  bg-inherit border-2 text-blue-400 border-blue-500 hover:text-white rounded-md hover:scale-105 transition transform duration-300"
          >
            Users which have income lower than $5 USD and have a car of brand
            “BMW” or “Mercedes”.
          </button>
          {showFirst && <Table data={data1} />}
          <button
            onClick={() => setShowSecond(!showSecond)}
            className="px-4 py-2  bg-inherit border-2 text-orange-400 border-orange-500 hover:text-white rounded-md hover:scale-105 transition transform duration-300"
          >
            Male Users which have phone price greater than 10,000.
          </button>
          {showSecond && <Table data={data2} />}

          <button
            onClick={() => setShowThird(!showThird)}
            className="px-4 py-2  bg-inherit border-2 text-green-400 border-green-500 hover:text-white rounded-md hover:scale-105 transition transform duration-300"
          >
            Users whose last name starts with “M” and has a quote character
            length greater than 15 and email includes his/her last name.
          </button>
          {showThird && <Table data={data3} />}

          <button
            onClick={() => setShowFourth(!showFourth)}
            className="px-4 py-2  bg-inherit border-2 text-yellow-400 border-yellow-500 hover:text-white rounded-md hover:scale-105 transition transform duration-300"
          >
            Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
            whose email does not include any digit.
          </button>
          {showFourth && <Table data={data4} />}

          <button
            onClick={() => setShowFifth(!showFifth)}
            className="px-4 py-2  bg-inherit border-2 text-red-400 border-red-500 hover:text-white rounded-md hover:scale-105 transition transform duration-300"
          >
            Show the data of top 10 cities which have the highest number of
            users and their average income.
          </button>
          {/* making separate table for dataset five as it has different attributes and rows */}
          {showFifth && (
            <table className="border-collapse border">
              <thead>
                <tr>
                  <th className="border p-1">City</th>
                  <th className="border p-1">Count</th>
                  <th className="border p-1">Average Income</th>
                </tr>
              </thead>
              <tbody>
                {data5.map((i) => (
                  <tr>
                    <td className="border p-1">{i._id}</td>
                    <td className="border p-1">{i.count}</td>
                    <td className="border p-1">{i.avg_income}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // ? requesting the dataset 1
  const res1 = await fetch(
    "https://mobilicis-assignment-chi.vercel.app/api/firstDataset"
  );
  const data1 = await res1.json();
  // ? requesting the dataset 2
  const res2 = await fetch(
    "https://mobilicis-assignment-chi.vercel.app/api/secondDataset"
  );
  const data2 = await res2.json();
  // ? requesting the dataset 3
  const res3 = await fetch(
    "https://mobilicis-assignment-chi.vercel.app/api/thirdDataset"
  );
  const data3 = await res3.json();
  // ? requesting the dataset 4
  const res4 = await fetch(
    "https://mobilicis-assignment-chi.vercel.app/api/fourthDataset"
  );
  const data4 = await res4.json();
  // ? requesting the dataset 5
  const res5 = await fetch(
    "https://mobilicis-assignment-chi.vercel.app/api/fifthDataset"
  );
  const data5 = await res5.json();
  return {
    props: {
      data1,
      data2,
      data3,
      data4,
      data5,
    },
  };
}
