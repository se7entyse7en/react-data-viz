import React from "react";
import { useChartDimensions } from "../Chart";

export default ({ label }) => {
  const dimensions = useChartDimensions();

  return (
    <g>
      <text
        data-testid="title"
        transform={`translate(${dimensions.boundedWidth / 2}, -30)`}
        dominantBaseline="baseline"
        textAnchor="middle"
        fontSize="150%"
      >
        {label}
      </text>
    </g>
  );
};
