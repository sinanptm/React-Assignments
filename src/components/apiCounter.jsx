import React, { useState, useEffect } from "react";
import axios from "axios";

const Counter = () => {
  const [count, setCount] = useState(1); // Set initial count to 1 to match API
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inc = () => setCount((prevCount) => prevCount + 1);
  const dec = () => setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
        setUserData(res.data);
      } catch (error) {
        setError(`Failed to fetch User Data: ${error.message}`);
      }
      setLoading(false);
    };
    fetchData();
  }, [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <span>
        <button className="button" onClick={inc}>Inc</button>
        <button className="button" onClick={dec}>Dec</button>
      </span>
      {loading ? (
        <p>...Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData && (
          <div className="ProfileCard">
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Counter;
