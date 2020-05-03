import React from "react";
import Chart, {
  completeDimensions,
  parseAccessor,
  dimensionsPropTypes
} from "./Chart";
import Title from "./peripherals/Title";
import Axis from "./peripherals/Axis";
import Circle from "./elements/Circle";
import * as d3 from "d3";
import PropTypes from "prop-types";

const ScatterPlot = ({ data, dimensions, xAccessor, yAccessor, config }) => {
  const dimensions_ = completeDimensions(dimensions);

  const xAccessor_ = parseAccessor(xAccessor);
  const yAccessor_ = parseAccessor(yAccessor);

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor_))
    .range([0, dimensions_.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor_))
    .range([dimensions_.boundedHeight, 0]);

  const mainConf = config.main || {};
  const xAxisConf = config.peripherals?.axis?.x || {};
  const yAxisConf = config.peripherals?.axis?.y || {};

  return (
    <Chart dimensions={dimensions_}>
      <Title label={mainConf.title} />
      <Axis
        dimension="x"
        label={xAxisConf.title}
        scale={xScale}
        formatTick={xAxisConf.formatTick}
        numberOfTicks={xAxisConf.numberOfTicks}
      />
      <Axis
        dimension="y"
        label={yAxisConf.title}
        scale={yScale}
        formatTick={yAxisConf.formatTick}
        numberOfTicks={yAxisConf.numberOfTicks}
      />
      <Content
        data={data}
        xAccessor={xAccessor_}
        yAccessor={yAccessor_}
        xScale={xScale}
        yScale={yScale}
        config={mainConf}
      />
    </Chart>
  );
};

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

const Content = ({ data, xAccessor, yAccessor, xScale, yScale, config }) => (
  <g>
    {data.map((row, i) => (
      <Circle
        key={i}
        cx={xScale(xAccessor(row))}
        cy={yScale(yAccessor(row))}
        r={config.size}
        color={config.color}
      />
    ))}
  </g>
);
