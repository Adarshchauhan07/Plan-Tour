import React, { useState } from "react";
import Card from "./Card";

const Tours = ({ ApiData, filterData }) => {
  const [like, setLike] = useState([]);


  return (
    <div className="flex flex-wrap justify-center gap-4">
      {ApiData.map((data) => (
        <Card
          key={data.id}
          data={data}
          filterDataApi={filterData}
          like={like}
          setLike={setLike}
        />
      ))}
    </div>
  );
};

export default Tours;
