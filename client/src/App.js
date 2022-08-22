import './App.css';
import React from "react";

function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data)
            });
    }, []);
    return (
    <div className="app">
        <p>{!data ? "Loading..." : data[0].FirstName}</p>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
