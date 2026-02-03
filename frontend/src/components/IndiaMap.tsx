import React, { useLayoutEffect, useRef, useState } from "react";
import { ZoomOut, MapPin, X } from "lucide-react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_indiaLow from "@amcharts/amcharts5-geodata/indiaLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { LOCATION_DATA } from "../data/SiteData";

interface IndiaMapProps {
  onStateSelect?: (stateId: string | null) => void;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ onStateSelect }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartRootRef = useRef<am5.Root | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    chartRootRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        // Disable dragging initially
        panX: "none",
        panY: "none",
        // Disable mouse wheel zoom
        wheelY: "none",
        // Disable pinch zoom
        pinchZoom: false,
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

    // Define which states should be highlighted and interactive
    const highlightStates = [
      "IN-GJ",
      "IN-MP",
      "IN-CT",
      "IN-CG",
      "IN-OR",
      "IN-TG",
    ];

    // Default settings for all states
    polygonSeries.mapPolygons.template.setAll({
      interactive: false, // By default, states are not interactive
      tooltipText: "", // No tooltip by default
      fill: am5.color(0xd4e2ef), // Default fill color
      stroke: am5.color(0xffffff), // White border
      strokeWidth: 1,
    });

    // Create white labels for all states using bullets
    polygonSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{name}",
          fill: am5.color(0xffffff), // White color for all labels
          fontSize: 12,
          fontWeight: "500",
          centerX: am5.p50,
          centerY: am5.p50,
          populateText: true,
        }),
      });
    });

    // No default hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xd4e2ef), // Same as default, so no visible hover effect
    });

    // Active state (when zoomed)
    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(0x414a2f),
    });

    // Apply specific styles to highlight states after data is validated
    polygonSeries.events.on("datavalidated", () => {
      polygonSeries.mapPolygons.each((polygon) => {
        const dataContext = polygon.dataItem?.dataContext as { id: string };

        // Only make highlighted states interactive with special styling
        if (dataContext && highlightStates.includes(dataContext.id)) {
          polygon.setAll({
            interactive: true, // Enable interaction only for highlighted states
            tooltipText: "{name}", // Show tooltip only for highlighted states
            fill: am5.color(0xeea462), // Orange color for highlighted states
          });

          // Create hover effect only for highlighted states
          polygon.states.create("hover", {
            fill: am5.color(0xe5710a), // Darker orange on hover
          });

          // Show pointer cursor on highlighted states
          polygon.set("cursorOverStyle", "pointer");
        }
      });
    });

    // Click event: only zoom when a highlighted state is clicked
    polygonSeries.mapPolygons.template.events.on("click", (ev: any) => {
      const polygon = ev.target;
      const dataContext = polygon.dataItem?.dataContext as { id: string };

      // Only zoom if it's a highlighted state
      if (dataContext && highlightStates.includes(dataContext.id)) {
        // Show the back button immediately
        setIsZoomed(true);

        // Set selected state for details card
        // Normalize ID (remove - and handle CG/CT for Chhattisgarh)
        let normalizedId = dataContext.id.replace("-", "");
        if (normalizedId === "INCG") normalizedId = "INCT";
        setSelectedStateId(normalizedId);
        if (onStateSelect) onStateSelect(normalizedId);

        // Enable dragging when zoomed in
        chart.set("panX", "translateX");
        chart.set("panY", "translateY");

        // Zoom to the state
        polygonSeries.zoomToDataItem(polygon.dataItem!);

        polygon.setActive(true);
      }
    });

    return () => {
      root.dispose();
    };
  }, []);

  // Back button resets the view and active states
  const handleBackClick = () => {
    setIsZoomed(false);
    setSelectedStateId(null);
    if (onStateSelect) onStateSelect(null);

    if (!chartRootRef.current) return;

    chartRootRef.current.container.children.each((child: any) => {
      if (child instanceof am5map.MapChart) {
        child.goHome(); // Reset zoom to initial view

        // Disable dragging when reset
        child.set("panX", "none");
        child.set("panY", "none");

        // Deactivate all polygons
        child.series.each((series: any) =>
          series.mapPolygons?.each((polygon: any) => polygon.setActive(false)),
        );
      }
    });
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      <div ref={chartRef} style={{ width: "100%", height: "100%" }} />

      {/* Zoom Out Button */}
      {isZoomed && (
        <button
          onClick={handleBackClick}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 9999,
            padding: "10px 15px",
            background: "white",
            color: "black",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            fontWeight: "bold",
          }}
          title="Zoom Out"
        >
          <ZoomOut size={20} color="black" />
          <span>Zoom Out</span>
        </button>
      )}

      {/* Site Details Card */}
      {/* {isZoomed && selectedStateId && LOCATION_DATA[selectedStateId] && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "320px",
            maxHeight: "80%",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            zIndex: 9999,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #eee",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid #f0f0f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f9fafb",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "bold",
                color: "#374151",
              }}
            >
              {LOCATION_DATA[selectedStateId][0]?.state} Sites
            </h3>
            <button
              onClick={() => setSelectedStateId(null)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9ca3af",
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ padding: "12px", overflowY: "auto", flex: 1 }}>
            {LOCATION_DATA[selectedStateId].map((site) => (
              <div
                key={site.id}
                style={{
                  marginBottom: "12px",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "1px solid #f3f4f6",
                  transition: "all 0.2s ease",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {site.name}
                </h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#6b7280",
                    marginBottom: "8px",
                  }}
                >
                  <MapPin
                    size={12}
                    style={{ marginRight: "4px", color: "#E5710A" }}
                  />
                  {site.location}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#4b5563",
                    lineHeight: "1.5",
                  }}
                >
                  {site.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )} */}

      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default IndiaMap;
