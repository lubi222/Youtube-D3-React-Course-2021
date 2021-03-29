import React, { useState, useEffect } from "react";
import { message } from "./message";
import * as d3 from "d3";
import "./App.css";

const csvUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        d3.csv(csvUrl).then(setData);
    }, []);

    return <div>{data ? message(data) : "Loading..."} </div>;
}

export default App;
