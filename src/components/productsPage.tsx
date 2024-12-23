import React from "react";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">Product 1</div>
      <div className="bg-white p-4 rounded shadow">Product 2</div>
      <div className="bg-white p-4 rounded shadow">Product 3</div>
      <div className="bg-white p-4 rounded shadow">Product 4</div>
    </div>
  );
}
