function ListCart({ image, title, price }) {
  return (
    <>
      <div className="p-2 w-3/4 rounded-xl">
        <div className="flex">
          <img src={image} alt="" className="w-32" />
          <div className="mt-5 ml-5 ">
            <p>{title}</p>
            <p className="font-semibold">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCart;
