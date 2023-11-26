const Card = (props) => {
    return (
        <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=1024x1024&w=is&k=20&c=RapMulhM2ic5esTznQzsuhBGPgJlfi57-nnPsDrovWA=" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">
                Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;