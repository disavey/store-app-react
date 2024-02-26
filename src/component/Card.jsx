function Card({ image, name, description, harga }) {
  return (
    <>
      <div className="border border-gray-300 rounded-t-lg rounded-b-lg">
        <img className="rounded-t-lg" src={image} alt="" />
        <div className="p-2">
          <p className="text-xl font-semibold ">{name}</p>
          <p className="text-slate-500">{description}</p>
          <p className="font-semibold mt-2">{harga}</p>
        </div>
        <div className="flex justify-end">
          <button className="border">teast</button>
          <button className="border">teast</button>
        </div>
      </div>
    </>
  );
}

export default Card;
