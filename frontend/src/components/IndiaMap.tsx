import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_indiaLow from "@amcharts/amcharts5-geodata/indiaLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const IndiaMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartRootRef = useRef<am5.Root | null>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    chartRootRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      }),
    );

    chart.setAll({
      animationDuration: 1000,
      animationEasing: am5.ease.out(am5.ease.cubic),
    });

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_indiaLow as any,
      }),
    );

    const highlightStates = ["MH", "KA", "TN"];

    polygonSeries.mapPolygons.template.setAll({
      interactive: true,
      tooltipText: "{name}",
      fill: am5.color(0xe0e0e0),
      stroke: am5.color(0xffffff),
      strokeWidth: 1,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x67b7dc),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(0x414a2f),
    });

    // Click event: only zoom when a state is clicked
    polygonSeries.mapPolygons.template.events.on("click", (ev: any) => {
      const polygon = ev.target;
      const stateId = polygon.dataItem.dataContext.id as string;

      if (highlightStates.includes(stateId)) {
        chart.zoomToGeoBounds(polygon.dataItem.bbox);
        polygon.setActive(true);
      }
    });

    return () => {
      root.dispose();
    };
  }, []);

  // Back button resets the view and active states
  const handleBackClick = () => {
    if (!chartRootRef.current) return;

    chartRootRef.current.container.children.each((child: any) => {
      if (child instanceof am5map.MapChart) {
        child.goHome(); // reset zoom
        child.series.each((series: any) =>
          series.mapPolygons.each((polygon: any) => polygon.setActive(false)),
        );
      }
    });
  };

  return (
    <div>
      <div ref={chartRef} style={{ width: "100%", height: "600px" }} />
      <button onClick={handleBackClick} style={{ marginTop: 10 }}>
        Back to India
      </button>
    </div>
  );
};

export default IndiaMap;
