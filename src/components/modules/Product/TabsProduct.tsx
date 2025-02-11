import { BACKEND_URL } from "@/utils/constants";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface Props {
  tab: number;
  setTab: (tab: number) => void;
}

interface Category {
  id: number;
  name: string;
}

export default function TabsProduct({ tab, setTab }: Props) {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${BACKEND_URL}/categories`);
        if (!result.ok) {
          throw new Error('An error occurred while fetching the categories');
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
    <div className="flex flex-col gap-4 py-4 mt-4 overflow-x-auto overflow-y-hidden md:flex-row md:justify-center border-neutral-700">
      {data?.map((item, index) => {
        return (
          <button
          type="button"
            key={item.id}
            onClick={() => setTab(index)}
            className={clsx(
              "h-12 px-8 py-2 -mb-px text-sm text-center transition bg-transparent border-b-2  sm:text-base whitespace-nowrap focus:outline-none",
              index === tab
                ? "text-primary-500 border-primary-500"
                : "text-neutral-500 hover:text-neutral-900 border-neutral-500 hover:border-neutral-900"
            )}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
