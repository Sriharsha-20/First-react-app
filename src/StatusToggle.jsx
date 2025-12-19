import React, { useState } from "react";

function ComponentA() {
  return <h2>Status is TRUE</h2>;
}

function ComponentB() {
  return <h2>Status is FALSE</h2>;
}

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial"
      }}
    >
      <button
        onClick={() => setStatus(!status)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
