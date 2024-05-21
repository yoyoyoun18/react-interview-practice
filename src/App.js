import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [count]);

  useEffect(() => {
    if (data && data.length > 0) {
      setUserInfo((prevUserInfo) => [...prevUserInfo, ...data]);
    }
  }, [data]);

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(count + 1)}>more user info</button>
      </div>
      <UserProfile userInfo={userInfo} />
    </div>
  );
}

export default App;
