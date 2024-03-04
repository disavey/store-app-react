function ListCart({ image }) {
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
        </div>
      </div>
    </>
  );
}

export default ListCart;
