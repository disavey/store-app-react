function ListCart({ image, title, price }) {
  return (
    <>
      <div className="border border-gray-300 p-2 rounded-lg w-96 text-center">
        <h1>Cart is Empty</h1>
        <div>
          <img
            src={image}
            alt=""
            className="w-52 rounded-sm"
          />
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}

export default ListCart;
