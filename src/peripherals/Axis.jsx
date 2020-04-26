import React from "react";
import { useChartDimensions } from "../Chart";
import PropTypes from "prop-types";

export const AXIS_POSITIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};

const Axis = ({
  dimension,
  label,
  scale,
  position,
  formatTick,
  numberOfTicks
}) => {
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
      position={position}
      formatTick={formatTick}
      numberOfTicks={numberOfTicks}
    />
  );
};

export default Axis;

const axisPropTypes = {
  label: PropTypes.string,
  scale: PropTypes.func.isRequired,
  position: PropTypes.oneOf(Object.values(AXIS_POSITIONS)),
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

export const HorizontalAxis = ({
  label,
  scale,
  position,
  formatTick,
  numberOfTicks
}) => {
  const dimensions = useChartDimensions();
  const labelDistance = 40;
  const yTranslate =
    position === AXIS_POSITIONS.TOP ? 0 : dimensions.boundedHeight;

  return (
    <g data-testid="horizontal-axis" transform={`translate(0, ${yTranslate})`}>
      <HorizontalAxisLine dimensions={dimensions} />
      <HorizontalAxisLabel
        label={label}
        position={position}
        dimensions={dimensions}
        labelDistance={labelDistance}
      />
      <HorizontalAxisTicks
        scale={scale}
        position={position}
        formatTick={formatTick}
        numberOfTicks={numberOfTicks}
      />
    </g>
  );
};

HorizontalAxis.propTypes = axisPropTypes;
HorizontalAxis.defaultProps = {
  position: AXIS_POSITIONS.BOTTOM,
  ...Axis.defaultProps
};

export const VerticalAxis = ({
  label,
  scale,
  position,
  formatTick,
  numberOfTicks
}) => {
  const dimensions = useChartDimensions();
  const labelDistance = 40;
  const xTranslate =
    position === AXIS_POSITIONS.RIGHT ? dimensions.boundedWidth : 0;

  return (
    <g data-testid="vertical-axis" transform={`translate(${xTranslate}, 0)`}>
      <VerticalAxisLine dimensions={dimensions} />
      <VerticalAxisLabel
        label={label}
        position={position}
        dimensions={dimensions}
        labelDistance={labelDistance}
      />
      <VerticalAxisTicks
        scale={scale}
        position={position}
        formatTick={formatTick}
        numberOfTicks={numberOfTicks}
      />
    </g>
  );
};

VerticalAxis.propTypes = axisPropTypes;
VerticalAxis.defaultProps = {
  position: AXIS_POSITIONS.LEFT,
  ...Axis.defaultProps
};

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

const HorizontalAxisLabel = ({
  label,
  position,
  dimensions,
  labelDistance
}) => {
  const yTextTranslate =
    position === AXIS_POSITIONS.TOP ? -labelDistance : labelDistance;
  const textDominantBaseline =
    position === AXIS_POSITIONS.TOP ? "baseline" : "hanging";

  return (
    <g>
      <text
        data-testid="horizontal-axis-label"
        transform={`translate(${dimensions.boundedWidth /
          2}, ${yTextTranslate})`}
        dominantBaseline={textDominantBaseline}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
};

const VerticalAxisLabel = ({ label, position, dimensions, labelDistance }) => {
  const rotationCenter =
    position === AXIS_POSITIONS.RIGHT
      ? {
          x: labelDistance,
          y: dimensions.boundedHeight - labelDistance
        }
      : {
          x: -labelDistance,
          y: dimensions.boundedHeight + labelDistance
        };
  const yTextTranslate =
    position === AXIS_POSITIONS.RIGHT
      ? dimensions.boundedHeight - labelDistance
      : dimensions.boundedHeight + labelDistance;
  const textDominantBaseline =
    position === AXIS_POSITIONS.RIGHT ? "hanging" : "baseline";

  return (
    <g transform={`rotate(-90,${rotationCenter.x}, ${rotationCenter.y})`}>
      <text
        data-testid="vertical-axis-label"
        transform={`translate(${dimensions.boundedHeight /
          2}, ${yTextTranslate})`}
        dominantBaseline={textDominantBaseline}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
};

const HorizontalAxisTicks = ({
  scale,
  position,
  formatTick,
  numberOfTicks
}) => (
  <Ticks
    dimension="x"
    scale={scale}
    position={position}
    formatTick={formatTick}
    numberOfTicks={numberOfTicks}
  />
);

const VerticalAxisTicks = ({ scale, position, formatTick, numberOfTicks }) => (
  <Ticks
    dimension="y"
    scale={scale}
    position={position}
    formatTick={formatTick}
    numberOfTicks={numberOfTicks}
  />
);

const Ticks = ({ dimension, scale, position, formatTick, numberOfTicks }) => {
  const ticks = scale.ticks(numberOfTicks);

  let tickWrapperTransformer, tickLinePosition, tickTextAttrs;
  if (dimension === "x") {
    const xTranslate = position === AXIS_POSITIONS.TOP ? -7 : 7;
    const textDominantBaseline =
      position === AXIS_POSITIONS.TOP ? "baseline" : "hanging";

    tickWrapperTransformer = tick => `translate(${scale(tick)}, 0)`;
    tickLinePosition = { x1: 0, y1: 0, x2: 0, y2: 3 };
    tickTextAttrs = {
      transform: `translate(0, ${xTranslate})`,
      dominantBaseline: textDominantBaseline,
      textAnchor: "middle"
    };
  } else if (dimension === "y") {
    const xTranslate = position === AXIS_POSITIONS.RIGHT ? 7 : -7;
    const textAnchor = position === AXIS_POSITIONS.RIGHT ? "start" : "end";

    tickWrapperTransformer = tick => `translate(0, ${scale(tick)})`;
    tickLinePosition = { x1: -3, y1: 0, x2: 0, y2: 0 };
    tickTextAttrs = {
      transform: `translate(${xTranslate}, 0)`,
      dominantBaseline: "middle",
      textAnchor: textAnchor
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
