import React from 'react';

import { LineGraph, LineGraphDoubleYAxis } from 'react-data-viz';
import data from './data';

const App = () => {
    const dimensions = {
        width: window.innerWidth * 0.8,
        height: 400,
        margin: {
            top: 60,
            right: 70,
            bottom: 60,
            left: 70
        }
    };

    return (
        <>
          <LineGraphExample dimensions={dimensions}/>
          <LineGraphDoubleYAxisExample dimensions={dimensions}/>
        </>
    );
};

const Border = ({children}) => (
    <div style={{margin: '2% 5%', border: 'solid 2px black', textAlign: 'center'}}>
      {children}
    </div>
);

const LineGraphExample = ({dimensions}) => {
    const xAccessor = d => Date.parse(d.date);
    const yAccessor = "value";

    const config = {
        main: {
            title: "Line Graph",
            color: "#3498db"
        },
        peripherals: {
            axis: {
                x: {
                    title: "x-axis label",
                    formatTick: (v) => v.toISOString().split('T')[0],
                    numberOfTicks: 5
                },
                y: {
                    title: "y-axis label",
                    numberOfTicks: 10
                }
            }
        }
    };

    return (
        <Border>
          {data && <LineGraph data={data.timeseries} dimensions={dimensions}
                              xAccessor={xAccessor} yAccessor={yAccessor}
                              config={config}></LineGraph>}
        </Border>
    );
};

const LineGraphDoubleYAxisExample = ({dimensions}) => {
    const xAccessor = d => Date.parse(d.date);
    const y0Accessor = "value";
    const y1Accessor = "extraValue";

    const config = {
        main: {
            title: "Line Graph Double y-Axis",
            color: {
                y0: "#2ecc71",
                y1: "#16a085"
            }
        },
        peripherals: {
            axis: {
                x: {
                    title: "x-axis label",
                    formatTick: (v) => v.toISOString().split('T')[0],
                    numberOfTicks: 5
                },
                y0: {
                    title: "y0-axis label",
                    numberOfTicks: 10
                },
                y1: {
                    title: "y1-axis label",
                    numberOfTicks: 5
                }
            }
        }
    };

    return (
        <Border>
          {data && <LineGraphDoubleYAxis data={data.timeseries} dimensions={dimensions}
          xAccessor={xAccessor} y0Accessor={y0Accessor} y1Accessor={y1Accessor}
          config={config}></LineGraphDoubleYAxis>}
        </Border>
    );
};

export default App;
