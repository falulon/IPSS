// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations



const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "100%", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // palettecolors: "5d62b5,29c3be,f2726f",
        usePlotGradientColor: "1",
        plotGradientColor: "#006e8a9a",
        toolTipBorderColor: "gray",
        toolTipBgColor: "#000000",
        toolTipColor: "lightgray",
        toolTipBgAlpha: "80",
        showToolTipShadow: "1",
        //Set the chart caption
        // caption: "Countries With Most Oil Reserves [2017-18]",
        //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Date",
        //Set the y-axis name
        yAxisName: "IPSS Score",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data,
    }
  };
  return (<ReactFC {...chartConfigs} />);
}
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component


export default ChartComponent;