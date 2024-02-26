function Form() {
  return (
    <>
      <div className="flex justify-center">
        <div className="my-5">
          <input
            className="border-2 border-slate-400 rounded-lg p-2 w-96"
            type="text"
            placeholder="Nama"
          />
          <div className="">
            <input
              className="border-2 border-slate-400 rounded-lg p-2 mt-2 w-96"
              type="text"
              placeholder="Description"
            />
          </div>
          <input
            className="border-2 border-slate-400 rounded-lg p-2 mt-2 w-96"
            type="text"
            placeholder="Link Image"
          />
        </div>
      </div>
    </>
  );
}

export default Form;
