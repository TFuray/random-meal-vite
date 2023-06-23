const SearchResponse = ({ data }) => {

  return (
    <>
      <div className="grid grid-cols-3 gap-3 text-xl justify-items-center">
        {data.map((data, index) => {
          return (
            <div
              className="grid card w-full bg-primary bg-opacity-50 drop-shadow-xl"
              key={index}
            >
              <div className="card-body">
                <h2 className="card-title font-bold">{data.title}</h2>
                <p className="text-sm">{data.servings}</p>
                <h3 className="text-lg font-bold">Ingredients:</h3>
                <p className=" textarea-md line-clamp-3">{data.ingredients}</p>
                <h3 className="text-lg font-bold">Instructions:</h3>
                <p className=" textarea-md line-clamp-3">{data.instructions}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default SearchResponse
