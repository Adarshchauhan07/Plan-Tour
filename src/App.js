import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [ApiData, setData] = useState(data);

  function filterData(id) {
    setData(ApiData.filter((data) => data.id !== id));
  }

  function refreshPageHandler() {
    setData(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">LETS PLAN A TOUR ❣️❣️</h2>
        <div className="center-content">
          {ApiData.length === 0 ? (
            <div>
              Your Have to Refresh Page
              <br />
              <button
                onClick={refreshPageHandler}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                REFRESH PAGE
              </button>
            </div>
          ) : (
            <Tours
              ApiData={ApiData}
              filterData={filterData}
              setData={setData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
