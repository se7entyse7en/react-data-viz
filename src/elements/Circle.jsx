import React from "react";
import PropTypes from "prop-types";

const Circle = ({ cx, cy, r, color }) => (
  <circle cx={cx} cy={cy} r={r} fill={color} />
);

export default Circle;

Circle.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number,
  color: PropTypes.string
};

Circle.defaultProps = {
  r: 5,
  color: "#000000"
};
