import * as React from 'react';
export const ScoringGauge = ({ score, colorClass }) => {
    // Calculate the stroke dash offset based on the score
    const circumference = 527.52; // 2 * π * 84 (radius)
    const strokeDashoffset = circumference - (score / 100) * circumference;
    return (React.createElement("div", { className: "rounded-lg p-4 text-center flex flex-col items-center gap-3 bg-white" },
        React.createElement("div", { className: "relative w-48 h-48" },
            React.createElement("svg", { width: "188", height: "188", viewBox: "-23.5 -23.5 235 235", version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: { transform: "rotate(-90deg)" } },
                React.createElement("circle", { r: "84", cx: "94", cy: "94", fill: "transparent", stroke: "#e5dcdc", strokeWidth: "8" }),
                React.createElement("circle", { r: "84", cx: "94", cy: "94", stroke: colorClass, strokeWidth: "14", strokeLinecap: "round", strokeDashoffset: strokeDashoffset, fill: "transparent", strokeDasharray: circumference, style: {
                        transition: "stroke-dashoffset 0.5s ease-in-out"
                    } }),
                React.createElement("text", { x: (() => {
                        // Calculate x-coordinate based on number of digits
                        if (score >= 100)
                            return "50"; // 3 digits
                        if (score < 10)
                            return "80"; // 1 digit
                        return "69"; // 2 digits
                    })(), y: "109", style: {
                        fill: colorClass,
                        fontSize: "47px",
                        fontWeight: "bold",
                        transform: "rotate(90deg) translate(0px, -184px)"
                    } }, score),
                React.createElement("text", { x: "69", y: "109", style: {
                        fill: "grey",
                        fontSize: "20px",
                        transform: "rotate(90deg) translate(-20px, -150px)"
                    } }, "out of 100")))));
};
