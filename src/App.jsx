import { useState } from "react";
import Card from "./component/Card";
import Form from "./component/Form";
import Product from "./dataProduct/dataProduct";
import ListCart from "./component/ListCart";
function App() {
  const initialStateData = {
    id: null,
    name: "",
    desc: "",
    imageUrl: "",
    price: "",
  };

  const [products, setProducts] = useState(Product);

  const [data, setData] = useState(initialStateData);
  const { id, name, desc, imageUrl, price } = data;

  const [cart, setCart] = useState([]);

  const [showForm, setShowForm] = useState(false);
  function handleOnClick() {
    setShowForm(!showForm);
  }

  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (id) {
      //JIka ID Product sudah ada, ini adalah mode edit
      const updatedProduct = products.map((product) =>
        product.id === id ? data : product
      );
      setProducts(updatedProduct);
    } else {
      //jika ID produk tidak ada tambahkan produk produk baru
      setProducts([...products, { ...data, id: products.length + 1 }]);
    }
    setData(initialStateData);
  }

  function handleDelete(identity) {
    const filterProduct = products.filter((data) => data.id != identity);
    setProducts(filterProduct);
  }

  function handleEdit(productId) {
    const producToEdit = products.find((product) => product.id === productId);
    console.log(producToEdit);
    setData(producToEdit);
    setShowForm(true);
  }

  function handleBag(cartId) {
    setCart([
      ...cart,
      {
        id: cartId.id,
        imageUrl: cartId.image,
        name: cartId.name,
        price: cartId.price,
      },
    ]);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-semibold text-center p-7 mt-5 font-serif">
          Allam Thrift
        </h1>
      </div>
      <div className="p-5">
        <div className="flex justify-between mx-10 mb-10">
          <div className="flex gap-5">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div>
              {cart.length == 0 ? (
                <div className="text-center  w-48">
                  <h1 className="text-lg font-medium">cart is empty</h1>
                </div>
              ) : (
                <>
                  {cart.map((carts) => (
                    <div className="border border-slate-400" key={carts.id}>
                      <table>
                        <thead>
                          <tr>
                            <td>{carts.image}</td>
                          </tr>
                          <tr>
                            <th>Name Product</th>
                            <td>:</td>
                            <td>{carts.name}</td>
                          </tr>
                          <tr>
                            <th>Price</th>
                            <td>:</td>
                            <td>{carts.price}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="flex" onClick={handleOnClick}>
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
        </div>
        <div>
          {showForm ? (
            <Form
              name={name}
              description={desc}
              image={imageUrl}
              amount={price}
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
                onClickEdit={() => handleEdit(data.id)}
                onClickBag={() => handleBag(data)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
