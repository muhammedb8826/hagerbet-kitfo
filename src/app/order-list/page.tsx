"use client";

import { BACKEND_URL } from "@/utils/constants";
import { useEffect, useState } from "react";

interface Orders {
  id: string;
    menuItem: {
        name: string;
        price: number;
    };
    waiter: {
        firstName: string;
        lastName: string;
    };
    category: {
        name: string;
    };
    priority: number;
}

const OrderList = () => {
  const [data, setData] = useState<Orders[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${BACKEND_URL}/orders`);
        if (!result.ok) {
          throw new Error("An error occurred while fetching the orders");
        }
        const data = await result.json();
        setData(data);
      } catch {
        // toast.error('An error occurred while fetching the submissions');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Menu Item
            </th>
            <th scope="col" className="px-6 py-3">
              Waiter
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
          </tr>
        </thead>
        <tbody>
            {data?.map((order) => (
          <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {order?.menuItem?.name}
            </th>
            <td className="px-6 py-4">{order?.waiter?.firstName} {order.waiter?.lastName}</td>
            <td className="px-6 py-4">{order?.category?.name}</td>
            <td className="px-6 py-4">{order?.menuItem?.price}</td>
            <td className="px-6 py-4">{order?.priority}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
