import React from "react";

const zBoard = ({ children }) => (
    <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="zboard"
    >
        {children}
    </div>
);

export default zBoard;