import React from "react";

const zboard = ({ children }) => (
    <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="zboard"
    >
        {children}
    </div>
);

export default zboard;