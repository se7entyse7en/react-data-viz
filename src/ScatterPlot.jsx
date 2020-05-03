import React from "react";
import { dimensionsPropTypes } from "./Chart";
import BubbleChart from "./BubbleChart";
import PropTypes from "prop-types";

const ScatterPlot = ({ data, dimensions, xAccessor, yAccessor, config }) => (
  <BubbleChart
    data={data}
    dimensions={dimensions}
    xAccessor={xAccessor}
    yAccessor={yAccessor}
    sizeAccessor={v => config.main?.size}
    config={config}
  />
);

export default ScatterPlot;

ScatterPlot.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dimensions: PropTypes.shape(dimensionsPropTypes).isRequired,
  xAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  yAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  config: PropTypes.shape({
    main: PropTypes.shape({
      title: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number
    }),
    peripherals: PropTypes.shape({
      x: PropTypes.shape({
        title: PropTypes.string,
        formatTick: PropTypes.func,
        numberOfTicks: PropTypes.number
      }),
      y: PropTypes.shape({
        title: PropTypes.string,
        formatTick: PropTypes.func,
        numberOfTicks: PropTypes.number
      })
    })
  })
};

ScatterPlot.defaultProps = {
  xAccessor: "x",
  yAccessor: "y",
  config: {}
};
