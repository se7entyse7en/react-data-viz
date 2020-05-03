import React from "react";
import Chart, {
  completeDimensions,
  parseAccessor,
  dimensionsPropTypes
} from "./Chart";
import Title from "./peripherals/Title";
import Axis, { AXIS_POSITIONS } from "./peripherals/Axis";
import * as d3 from "d3";
import PropTypes from "prop-types";

const LineGraphDoubleYAxis = ({
  data,
  dimensions,
  xAccessor,
  y0Accessor,
  y1Accessor,
  config
}) => {
  const dimensions_ = completeDimensions(dimensions);

  const xAccessor_ = parseAccessor(xAccessor);
  const y0Accessor_ = parseAccessor(y0Accessor);
  const y1Accessor_ = parseAccessor(y1Accessor);

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor_))
    .range([0, dimensions_.boundedWidth]);

  const y0Scale = d3
    .scaleLinear()
    .domain(d3.extent(data, y0Accessor_))
    .range([dimensions_.boundedHeight, 0]);

  const y1Scale = d3
    .scaleLinear()
    .domain(d3.extent(data, y1Accessor_))
    .range([dimensions_.boundedHeight, 0]);

  const mainConf = config.main || {};
  const xAxisConf = config.peripherals?.axis?.x || {};
  const y0AxisConf = config.peripherals?.axis?.y0 || {};
  const y1AxisConf = config.peripherals?.axis?.y1 || {};

  return (
    <Chart dimensions={dimensions_}>
      <Content
        data={data}
        xAccessor={xAccessor_}
        y0Accessor={y0Accessor_}
        y1Accessor={y1Accessor_}
        xScale={xScale}
        y0Scale={y0Scale}
        y1Scale={y1Scale}
        config={mainConf}
      />
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
        label={y0AxisConf.title}
        scale={y0Scale}
        formatTick={y0AxisConf.formatTick}
        numberOfTicks={y0AxisConf.numberOfTicks}
      />
      <Axis
        dimension="y"
        label={y1AxisConf.title}
        scale={y1Scale}
        position={AXIS_POSITIONS.RIGHT}
        formatTick={y1AxisConf.formatTick}
        numberOfTicks={y1AxisConf.numberOfTicks}
      />
    </Chart>
  );
};

export default LineGraphDoubleYAxis;

LineGraphDoubleYAxis.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dimensions: PropTypes.shape(dimensionsPropTypes).isRequired,
  xAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  yAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  config: PropTypes.shape({
    main: PropTypes.shape({
      title: PropTypes.string,
      color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          y0: PropTypes.string,
          y1: PropTypes.string
        })
      ])
    }),
    peripherals: PropTypes.shape({
      x: PropTypes.shape({
        title: PropTypes.string,
        formatTick: PropTypes.func,
        numberOfTicks: PropTypes.number
      }),
      y0: PropTypes.shape({
        title: PropTypes.string,
        formatTick: PropTypes.func,
        numberOfTicks: PropTypes.number
      }),
      y1: PropTypes.shape({
        title: PropTypes.string,
        formatTick: PropTypes.func,
        numberOfTicks: PropTypes.number
      })
    })
  })
};

LineGraphDoubleYAxis.defaultProps = {
  xAccessor: "x",
  yAccessor: "y",
  config: {}
};

const Content = ({
  data,
  xAccessor,
  y0Accessor,
  y1Accessor,
  xScale,
  y0Scale,
  y1Scale,
  config
}) => {
  const lineGenerator0 = d3
    .line()
    .x(d => xScale(xAccessor(d)))
    .y(d => y0Scale(y0Accessor(d)));

  const lineGenerator1 = d3
    .line()
    .x(d => xScale(xAccessor(d)))
    .y(d => y1Scale(y1Accessor(d)));

  const colors = {
    y0:
      typeof config.color === "string"
        ? config.color
        : config.color.y0 || "#000000",
    y1:
      typeof config.color === "string"
        ? config.color
        : config.color.y1 || "#000000"
  };

  return (
    <g>
      <path
        data-testid="content"
        d={lineGenerator0(data)}
        fill="none"
        stroke={colors.y0}
        strokeWidth={2}
      />
      <path
        data-testid="content"
        d={lineGenerator1(data)}
        fill="none"
        stroke={colors.y1}
        strokeWidth={2}
      />
    </g>
  );
};
