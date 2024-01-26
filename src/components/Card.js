import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ data, filterDataApi, like, setLike }) => {
  function LikeHandler() {
    if (like.includes(data.id)) {
      setLike((prev) => prev.filter((id) => id !== data.id));
      toast.warning("YE JAGHA ACCHI NHI LGI...");
    } else {
      setLike((prev) => [...prev, data.id]);
      toast.success('YE MUJHE PASAND AAYI...');
    }
  }

  function handler() {
    setReadInfo(!readInfo);
  }

  const [readInfo, setReadInfo] = useState(true);

  return (
    <div className="relative w-1/4 p-4 border border-gray-300 rounded">
      <button
        onClick={() => {
          LikeHandler();
        }}
        className="absolute top-2 right-2 bg-white rounded-full p-2"
      >
        {like.includes(data.id) ? <FcLike fontSize='1.5rem' /> : <FcLikePlaceholder fontSize='1.5rem' />}
      </button>

      <div className="w-full h-40 mb-4 overflow-hidden border-b border-gray-300">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="flex flex-col items-start pl-1">
        <h2 className="text-xl font-bold mb text-blue-800 mb-1">
          {"₹" + data.price}
        </h2>
        <h2 className="text-lg font-semibold mb-1">{data.name}</h2>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {readInfo ? data.info.substring(0, 200) + "....." : data.info}
        <span onClick={handler} className="text-blue-500 cursor-pointer">
          {readInfo ? "READ MORE" : "READ LESS"}
        </span>
      </p>
      <button
        onClick={() => {
          filterDataApi(data.id);
        }}
        className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
