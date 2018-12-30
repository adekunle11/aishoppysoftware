FusionCharts.ready(function() {
  var salesChart = new FusionCharts({
    type: "column2d",
    renderAt: "chart-container",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      "chart": {
        "caption": "Burger King Monthly Sales",
        "captionFontSize": "20",
        "xAxisName": "Month",
        "yAxisName": "Sales (In USD)",
        "numberPrefix": "$",
        "xAxisNameFontBold": "0",
        "yAxisNameFontBold": "0",
        "xAxisNameFontSize": "15",
        "yAxisNameFontSize": "15",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        "captionPadding": "11",
        "xAxisNamePadding": "11",
        "yAxisNamePadding": "11",
        "valueFontColor": "#1E3E53",
        "valueFontSize": "16",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineIsDashed": "1",
        "showAlternateHGridColor": "0",
        "captionFontBold": "0",
        "paletteColors": "#E7D03E",
        "bgColor": "#2B3647",
        "bgAlpha": "100",
        "showValues": "0",
        "valueFontColor": "#2B3647",
        "valueFontSize": "11",
        "canvasBgColor": "#2B3647",
        "baseFontSize": "14",
        "outCnvBaseFontSize": "14",
        "baseFontColor": "#ffffff",
        "toolTipColor": "#ffffff",
        "toolTipBgColor": "#1E3E53",
        "toolTipBgAlpha": "80",
        "toolTipPadding": "8",
        "plotSpacePercent": "20",
        "plotToolText": "<div style='font-size: 14px;'> $label: $dataValue</div>"
      },
      "data": [{
        "label": "Jan",
        "value": "420000"
      }, {
        "label": "Feb",
        "value": "810000"
      }, {
        "label": "Mar",
        "value": "720000"
      }, {
        "label": "Apr",
        "value": "550000"
      }, {
        "label": "May",
        "value": "910000"
      }, {
        "label": "Jun",
        "value": "510000"
      }, {
        "label": "Jul",
        "value": "680000"
      }, {
        "label": "Aug",
        "value": "620000"
      }, {
        "label": "Sep",
        "value": "610000"
      }, {
        "label": "Oct",
        "value": "490000"
      }, {
        "label": "Nov",
        "value": "900000"
      }, {
        "label": "Dec",
        "value": "730000"
      }]
    }
  });
  salesChart.render();
});