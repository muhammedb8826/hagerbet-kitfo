import React from "react";
import Button from "./Button";
import ProductModal from "./OrderForm";

type Props = {
  price: number;
  name: string;
  description: string;
  categoryId: string;
  menuItemId: string;
  category: string;
};

export default function OrderItem({ price, name, description, categoryId, menuItemId, category }: Props) {
  return (
    <div className="flex items-center justify-between gap-16 py-8 border-b text-neutral-900 border-b-neutral-300">
      <div>
        <h3 className="mb-2 text-xl font-medium">{name}</h3>
        <p>{description}</p>
      </div>
      <p><span className="self-center text-xl font-medium">{price}.-</span></p>
      <ProductModal price={price} category={category} name={name} categoryId={categoryId} menuItemId={menuItemId} />
    </div>
  );
}
