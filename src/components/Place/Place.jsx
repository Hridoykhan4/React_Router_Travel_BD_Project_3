import { Link } from "react-router-dom";

const Place = ({ place, fromVisited, fromWishList, handleRemoveFromVisted, handleRemoveFromWishList }) => {
  const {
    id,
    image,
    description: desc,
    place_name: name,
    cost_price,
    rating,
  } = place;

  const handleState = (e) => {
    if (fromVisited || fromWishList) {
      e.preventDefault();
    }
  };


  return (
    <>
      <Link to={`/places/${id}`} onClick={handleState}>
        <div className="card bg-base-100 p-4 border-black/39 rounded-lg border shadow-sm">
          <figure className="h-56">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{desc}</p>
            <p className="border-t border-dashed border-black/50"></p>
            <div className="card-actions items-center justify-end">
              <div className="badge badge-outline text-lg ">
                <span className="font-bold">Cost</span>: {cost_price} Taka
              </div>
              <div className="badge badge-outline text-lg ">
                <span className="font-bold">Rating</span>: {rating} 🔅
              </div>
              {fromVisited && (
                <button
                  onClick={() => handleRemoveFromVisted(id)}
                  className="btn text-white btn-error"
                >
                  Remove
                </button>
              )}
              {fromWishList && (
                <button
                  onClick={() => handleRemoveFromWishList(id)}
                  className="btn text-white btn-error"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Place;
