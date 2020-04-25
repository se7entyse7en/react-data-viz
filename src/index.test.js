import React from "react";
import { LineGraph } from ".";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as d3 from "d3";

describe("LineGraph with sample data", () => {
  const dimensions = {
    width: 320,
    height: 180,
    margin: {
      top: 60,
      right: 15,
      bottom: 60,
      left: 70
    }
  };

  const data = [
    { x: "2020-01-01", y: 1 },
    { x: "2020-01-02", y: 2 },
    { x: "2020-01-03", y: 3 },
    { x: "2020-01-04", y: 4 },
    { x: "2020-01-05", y: 5 }
  ];
  const xAccessor = d => d3.timeParse("%Y-%m-%d")(d.x);
  const yAccessor = "y";

  it("full config", () => {
    const config = {
      main: {
        title: "Title",
        color: "#3498db"
      },
      peripherals: {
        axis: {
          x: {
            title: "x-axis label",
            formatTick: d3.timeFormat("%d %b %Y"),
            numberOfTicks: 20
          },
          y: {
            title: "y-axis label",
            numberOfTicks: 10
          }
        }
      }
    };

    const { getByTestId } = render(
      <LineGraph
        data={data}
        dimensions={dimensions}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
        config={config}
      />
    );

    const content = getByTestId("content");
    expect(content.getAttribute("d").split(",")).toHaveLength(data.length + 1);
    expect(content).toHaveAttribute("stroke", "#3498db");

    const xAxis = getByTestId("horizontal-axis");
    const xAxisLines = xAxis.getElementsByTagName("line");
    expect(xAxisLines.length).toBeGreaterThanOrEqual(1);
    const xAxisLine = xAxisLines[0];
    expect(xAxisLine).toHaveAttribute("x1", "-5");
    expect(xAxisLine).toHaveAttribute("y1", "0");
    expect(xAxisLine).toHaveAttribute(
      "x2",
      `${dimensions.width -
        dimensions.margin.right -
        dimensions.margin.left +
        5}`
    );
    expect(xAxisLine).toHaveAttribute("y2", "0");

    const yAxis = getByTestId("vertical-axis");
    const yAxisLines = yAxis.getElementsByTagName("line");
    expect(yAxisLines.length).toBeGreaterThanOrEqual(1);
    const yAxisLine = yAxisLines[0];
    expect(yAxisLine).toHaveAttribute("x1", "0");
    expect(yAxisLine).toHaveAttribute("y1", "-5");
    expect(yAxisLine).toHaveAttribute("x2", "0");
    expect(yAxisLine).toHaveAttribute(
      "y2",
      `${dimensions.height -
        dimensions.margin.top -
        dimensions.margin.bottom +
        5}`
    );

    expect(getByTestId("title")).toHaveTextContent("Title");
    expect(getByTestId("horizontal-axis-label")).toHaveTextContent(
      "x-axis label"
    );
    expect(getByTestId("vertical-axis-label")).toHaveTextContent(
      "y-axis label"
    );
  });

  it("partial config", () => {
    const config = {
      peripherals: {
        axis: {
          x: {
            formatTick: d3.timeFormat("%d %b %Y")
          }
        }
      }
    };

    const { getByTestId } = render(
      <LineGraph
        data={data}
        dimensions={dimensions}
        xAccessor={xAccessor}
        config={config}
      />
    );

    const content = getByTestId("content");
    expect(content.getAttribute("d").split(",")).toHaveLength(data.length + 1);
    expect(content).toHaveAttribute("stroke", "#000000");

    const xAxis = getByTestId("horizontal-axis");
    const xAxisLines = xAxis.getElementsByTagName("line");
    expect(xAxisLines.length).toBeGreaterThanOrEqual(1);
    const xAxisLine = xAxisLines[0];
    expect(xAxisLine).toHaveAttribute("x1", "-5");
    expect(xAxisLine).toHaveAttribute("y1", "0");
    expect(xAxisLine).toHaveAttribute(
      "x2",
      `${dimensions.width -
        dimensions.margin.right -
        dimensions.margin.left +
        5}`
    );
    expect(xAxisLine).toHaveAttribute("y2", "0");

    const yAxis = getByTestId("vertical-axis");
    const yAxisLines = yAxis.getElementsByTagName("line");
    expect(yAxisLines.length).toBeGreaterThanOrEqual(1);
    const yAxisLine = yAxisLines[0];
    expect(yAxisLine).toHaveAttribute("x1", "0");
    expect(yAxisLine).toHaveAttribute("y1", "-5");
    expect(yAxisLine).toHaveAttribute("x2", "0");
    expect(yAxisLine).toHaveAttribute(
      "y2",
      `${dimensions.height -
        dimensions.margin.top -
        dimensions.margin.bottom +
        5}`
    );

    expect(getByTestId("title")).toHaveTextContent("");
    expect(getByTestId("horizontal-axis-label")).toHaveTextContent("");
    expect(getByTestId("vertical-axis-label")).toHaveTextContent("");
  });
});
