import React from "react";
import ReactDOM from "react-dom";
import { scaleSqrt, max } from "d3";
import { useWorldAtlas } from "./hooks/useWorldAtlas";
import { useCities } from "./hooks/useCities";
import { Marks } from "./components/Marks";
import "./App.css";

const width = 960;
const height = 500;

function App() {
    const worldAtlas = useWorldAtlas();
    const cities = useCities();

    if (!worldAtlas || !cities) {
        return <pre>Loading...</pre>;
    }

    const sizeValue = (d) => d.population;
    const maxRadius = 15;

    const sizeScale = scaleSqrt()
        .domain([0, max(cities, sizeValue)])
        .range([0, maxRadius]);

    return (
        <svg width={width} height={height}>
            <Marks worldAtlas={worldAtlas} cities={cities} sizeScale={sizeScale} sizeValue={sizeValue} />
        </svg>
    );
}

export default App;
