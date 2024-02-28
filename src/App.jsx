import { useState } from "react";
import Card from "./component/Card";
import Form from "./component/Form";
import Product from "./dataProduct/dataProduct";

function App() {
  const initialStateData = {
    name: "",
    desc: "",
    imageUrl: "",
    price: "",
  };

  const [products, setProducts] = useState(Product);

  const [data, setData] = useState(initialStateData);
  const { name, desc, imageUrl } = data;

  const [showForm, setShowForm] = useState(false);
  function handleOnClick() {
    setShowForm(!showForm);
  }

  function handleOnChange(e) {
    setData({
      ...data,
      id: products.length + 1,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setProducts([...products, data]);
    setData(initialStateData);
  }

  function handleDelete(identity) {
    const filterProduct = products.filter((data) => data.id != identity);
    setProducts(filterProduct);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-semibold text-center p-7 mt-5 font-serif">
          Allam Travel
        </h1>
      </div>

      <div className="p-5">
        <div onClick={handleOnClick} className="flex justify-end mx-10 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          {showForm ? "hide" : "Show Form"}
        </div>
        <div>
          {showForm ? (
            <Form
              name={name}
              description={desc}
              image={imageUrl}
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
            />
          ) : (
            ""
          )}
        </div>
        <div className="sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 mx-10 mt-5 ">
          {products.map((data) => {
            return (
              <Card
                key={data.id}
                image={data.imageUrl}
                name={data.name}
                description={data.desc}
                harga={data.price}
                onClickDelete={() => handleDelete(data.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
