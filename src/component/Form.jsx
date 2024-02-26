function Form({ name, description, image, onChange, onSubmit }) {
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={onSubmit}>
          <div className="mt-5 mb-5">
            <input
              className="border-2 border-slate-400 rounded-lg p-2 w-96"
              type="text"
              placeholder="Nama"
              value={name}
              onChange={onChange}
              name="name"
            />
            <div className="">
              <input
                className="border-2 border-slate-400 rounded-lg p-2 mt-2 w-96"
                type="text"
                placeholder="Description"
                value={description}
                onChange={onChange}
                name="desc"
              />
            </div>
            <input
              className="border-2 border-slate-400 rounded-lg p-2 mt-2 w-96"
              type="text"
              placeholder="Link Image"
              value={image}
              onChange={onChange}
              name="imageUrl"
            />
          </div>
          <input
            className="border-2 border-slate-400 rounded-lg p-2 w-96"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export default Form;
