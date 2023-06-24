const SearchResponse = ({ data }) => {
  return (
    <>
    {console.log(data)}
      <div className="overflow-x-auto">
      <table className="table w-96 mx-auto table-pin-rows table-pin-cols">
        <thead>
          <tr>
            {/* <th></th>
            <th>Name</th>
            <th>Servings</th> */}
            {/* <th>Ingredients</th>
            <th>Instructions</th> */}
          </tr>
        </thead>
        {data.map((data, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{index + 1}</th>
                <th className="text-lg">{data.title}</th>
                <th className="text-lg">{data.servings}</th>
                {/* <th className="line-clamp-2">{data.ingredients}</th>
                <th className="line-clamp-2">{data.instructions}</th> */}
              </tr>
            </tbody>
          )
        })}
      </table>
      </div>
    </>
  )
}
export default SearchResponse
