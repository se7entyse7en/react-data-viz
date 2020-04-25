import React from 'react';

import { LineGraph } from 'react-data-viz';
import data from './data';

const App = () => {
    const dimensions = {
        width: window.innerWidth * 0.8,
        height: 400,
        margin: {
            top: 60,
            right: 15,
            bottom: 60,
            left: 70
        }
    };

    const xAccessor = d => Date.parse(d.date);
    const yAccessor = "value";

    const config = {
        main: {
            title: "Title",
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
        <>
        <div style={{margin: '2% 5%', border: 'solid 2px black', textAlign: 'center', fontSize: '28px'}}>React Data Viz</div>
          <div style={{margin: '2% 5%', border: 'solid 2px black', textAlign: 'center'}}>
            {data && <LineGraph data={data.timeseries} dimensions={dimensions}
                                xAccessor={xAccessor} yAccessor={yAccessor}
                                config={config}></LineGraph>}
          </div>
        </>
    );
};

export default App;
