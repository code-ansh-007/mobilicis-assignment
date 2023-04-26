import Link from "next/link";
import React from "react";

const Table = ({ data, endpoint }) => {
  return (
    <>
      {
        <main className="flex flex-col space-y-3">
          <Link href={endpoint}>
            <div>
              <span className="bg-green-500 p-1 px-4 font-bold rounded-md">
                API Endpoint
              </span>{" "}
              - <span className="hover:text-blue-400">{endpoint}</span>
            </div>
          </Link>
          <table className="text-sm border-collapse border">
            <thead>
              <tr>
                <th className="py-1 px-5 border">ID</th>
                <th className="py-1 px-5 border">First Name</th>
                <th className="py-1 px-5 border">Last Name</th>
                <th className="py-1 px-5 border">Email</th>
                <th className="py-1 px-5 border">Gender</th>
                <th className="py-1 px-5 border">Income</th>
                <th className="py-1 px-5 border">City</th>
                <th className="py-1 px-5 border">Car</th>
                <th className="py-1 px-5 border">Quote</th>
                <th className="py-1 px-5 border">Phone Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => (
                <tr>
                  <td className="border p-1.5">{i.id}</td>
                  <td className="border p-1.5">{i.first_name}</td>
                  <td className="border p-1.5">{i.last_name}</td>
                  <td className="border p-1.5">{i.email}</td>
                  <td className="border p-1.5">{i.gender}</td>
                  <td className="border p-1.5">{i.income}</td>
                  <td className="border p-1.5">{i.city}</td>
                  <td className="border p-1.5">{i.car}</td>
                  <td className="border p-1.5">{i.quote}</td>
                  <td className="border p-1.5">{i.phone_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      }
    </>
  );
};

export default Table;
