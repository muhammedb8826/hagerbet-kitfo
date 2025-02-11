import { BACKEND_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
    price: number;
    category: string;
    name: string;
    categoryId: string;
    menuItemId: string;
    };

interface Waiters {
    id: string;
    firstName: string;
    lastName: string;
}

const ProductModal = ({ price, name, categoryId, menuItemId, category }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ price, name, category, categoryId, menuItemId, waiters: '' });
const [waiters, setWaiters] = useState<Waiters[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

   useEffect(() => {
       const fetchData = async () => {
         try {
           const result = await fetch(`${BACKEND_URL}/waiters`);
           if (!result.ok) {
             throw new Error('An error occurred while fetching the categories');
           }
           const data = await result.json();
           setWaiters(data);
         } catch {
           // toast.error('An error occurred while fetching the submissions');
         }
       };
       fetchData();
     }, []);

     console.log(formData);
     
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { categoryId, menuItemId, waiters: waiterId } = formData;
    try {
        const result = await fetch(`${BACKEND_URL}/orders`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ categoryId, menuItemId, waiterId, priority: 1 }),
        });
        if (!result.ok) {
            throw new Error("An error occurred while fetching the categories");
        }
        toast.success("Order created successfully");
        setIsOpen(false);
        } catch (error) {
            console.error("Error:", error);
        }
  };

  return (
    <div>
      {/* Button to toggle modal */}
      <button
      type="button"
        onClick={() => setIsOpen(true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Place Order
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold">Create New Order</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-900"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={name}
                    className="bg-slate-300 w-full border rounded-lg p-2"
                    placeholder="Type product name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Price</label>
                  <input
                    type="number"
                    value={price}
                    className="bg-slate-300 w-full border rounded-lg p-2"
                    placeholder="$2999"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Category</label>
                  <input
                    type="text" 
                    value={category}
                    className="bg-slate-300 w-full border rounded-lg p-2"
                    placeholder="Food"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Waiters</label>
                  <select
                  name="waiters"
                  onChange={handleChange}
                   title="select waiters"
                    className="bg-slate-300 w-full border rounded-lg p-2">
                    <option>Select Waiters</option>
                   {waiters.map((waiter) => (
                    <option key={waiter.id} value={waiter.id}>
                      {waiter.firstName} {waiter.lastName}
                    </option>
                    ))}
                  </select>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium">Product Description</label>
                  <textarea
                    className="w-full border rounded-lg p-2"
                    rows={4}
                    placeholder="Write product description here"
                  ></textarea>
                </div> */}


              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
              >
                Add New Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
