import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const ChartContext = createContext();
export const useChartDimensions = () => useContext(ChartContext);

const Chart = ({ dimensions, children }) => (
  <ChartContext.Provider value={dimensions}>
    <svg className="Chart" width={dimensions.width} height={dimensions.height}>
      <g
        transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}
      >
        {children}
      </g>
    </svg>
  </ChartContext.Provider>
);

export default Chart;

export const dimensionsPropTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired
};

Chart.propTypes = {
  dimensions: PropTypes.shape({
    boundedWidth: PropTypes.number.isRequired,
    boundedHeight: PropTypes.number.isRequired,
    ...dimensionsPropTypes
  }).isRequired,
  children: PropTypes.node.isRequired
};

export const completeDimensions = dimensions => ({
  ...dimensions,
  boundedWidth:
    dimensions.width - dimensions.margin.left - dimensions.margin.right,
  boundedHeight:
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom
});

export const parseAccessor = accessor => {
  const accessorType = typeof accessor;
  const accessor_ =
    accessorType === "function"
      ? accessor
      : accessorType === "string"
      ? d => d[accessor]
      : null;

  if (!accessor) {
    throw Error(`Invalid accessor: ${accessor}`);
  }

  return accessor_;
};
