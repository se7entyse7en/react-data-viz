import React from "react";
import { useChartDimensions } from "../Chart";
import PropTypes from "prop-types";

const Axis = ({ dimension, label, scale, formatTick, numberOfTicks }) => {
  const Component =
    dimension === "x"
      ? HorizontalAxis
      : dimension === "y"
      ? VerticalAxis
      : null;

  if (!Component) {
    return null;
  }

  return (
    <Component
      label={label}
      scale={scale}
      formatTick={formatTick}
      numberOfTicks={numberOfTicks}
    />
  );
};

export default Axis;

const axisPropTypes = {
  label: PropTypes.string,
  scale: PropTypes.func.isRequired,
  formatTick: PropTypes.func,
  numberOfTicks: PropTypes.number
};

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]).isRequired,
  ...axisPropTypes
};

Axis.defaultProps = {
  formatTick: v => v
};

export const HorizontalAxis = ({ label, scale, formatTick, numberOfTicks }) => {
  const dimensions = useChartDimensions();
  const labelDistance = 40;

  return (
    <g
      data-testid="horizontal-axis"
      transform={`translate(0, ${dimensions.boundedHeight})`}
    >
      <HorizontalAxisLine dimensions={dimensions} />
      <HorizontalAxisLabel
        label={label}
        dimensions={dimensions}
        labelDistance={labelDistance}
      />
      <HorizontalAxisTicks
        scale={scale}
        formatTick={formatTick}
        numberOfTicks={numberOfTicks}
      />
    </g>
  );
};

HorizontalAxis.propTypes = axisPropTypes;
HorizontalAxis.defaultProps = Axis.defaultProps;

export const VerticalAxis = ({ label, scale, formatTick, numberOfTicks }) => {
  const dimensions = useChartDimensions();
  const labelDistance = 40;

  return (
    <g data-testid="vertical-axis">
      <VerticalAxisLine dimensions={dimensions} />
      <VerticalAxisLabel
        label={label}
        dimensions={dimensions}
        labelDistance={labelDistance}
      />
      <VerticalAxisTicks
        scale={scale}
        formatTick={formatTick}
        numberOfTicks={numberOfTicks}
      />
    </g>
  );
};

VerticalAxis.propTypes = axisPropTypes;
VerticalAxis.defaultProps = Axis.defaultProps;

const HorizontalAxisLine = ({ dimensions }) => (
  <AxisLine
    position={{
      x1: -5,
      y1: 0,
      x2: dimensions.boundedWidth + 5,
      y2: 0
    }}
  />
);

const VerticalAxisLine = ({ dimensions }) => (
  <AxisLine
    position={{
      x1: 0,
      y1: -5,
      x2: 0,
      y2: dimensions.boundedHeight + 5
    }}
  />
);

const AxisLine = ({ position }) => (
  <line strokeWidth={2} fill="none" stroke="#000000" {...position} />
);

const HorizontalAxisLabel = ({ label, dimensions, labelDistance }) => (
  <g>
    <text
      data-testid="horizontal-axis-label"
      transform={`translate(${dimensions.boundedWidth / 2}, ${labelDistance})`}
      dominantBaseline="hanging"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

const VerticalAxisLabel = ({ label, dimensions, labelDistance }) => (
  <g
    transform={`rotate(-90,-${labelDistance}, ${dimensions.boundedHeight +
      labelDistance})`}
  >
    <text
      data-testid="vertical-axis-label"
      transform={`translate(${dimensions.boundedHeight /
        2}, ${dimensions.boundedHeight + labelDistance})`}
      dominantBaseline="baseline"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

const HorizontalAxisTicks = ({ scale, formatTick, numberOfTicks }) => (
  <Ticks
    dimension="x"
    scale={scale}
    formatTick={formatTick}
    numberOfTicks={numberOfTicks}
  />
);

const VerticalAxisTicks = ({ scale, formatTick, numberOfTicks }) => (
  <Ticks
    dimension="y"
    scale={scale}
    formatTick={formatTick}
    numberOfTicks={numberOfTicks}
  />
);

const Ticks = ({ dimension, scale, formatTick, numberOfTicks }) => {
  const ticks = scale.ticks(numberOfTicks);

  let tickWrapperTransformer, tickLinePosition, tickTextAttrs;
  if (dimension === "x") {
    tickWrapperTransformer = tick => `translate(${scale(tick)}, 0)`;
    tickLinePosition = { x1: 0, y1: 0, x2: 0, y2: 3 };
    tickTextAttrs = {
      transform: `translate(0, 7)`,
      dominantBaseline: "hanging",
      textAnchor: "middle"
    };
  } else if (dimension === "y") {
    tickWrapperTransformer = tick => `translate(0, ${scale(tick)})`;
    tickLinePosition = { x1: -3, y1: 0, x2: 0, y2: 0 };
    tickTextAttrs = {
      transform: `translate(-7, 0)`,
      dominantBaseline: "middle",
      textAnchor: "end"
    };
  } else {
    return null;
  }

  return (
    <g>
      {ticks.map((tick, i) => (
        <g key={i} transform={tickWrapperTransformer(tick)}>
          <line
            strokeWidth={1}
            fill="none"
            stroke="#000000"
            {...tickLinePosition}
          />
          <text fontSize="75%" {...tickTextAttrs}>
            {formatTick(tick)}
          </text>
        </g>
      ))}
    </g>
  );
};
