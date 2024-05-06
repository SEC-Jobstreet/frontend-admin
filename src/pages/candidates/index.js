import React from "react";
import Table from "react-bootstrap/Table";

import "../../assets/styles/table.css";

function Candidates() {
  return (
    <div className="candidates-page-container">
      <span
        style={{ fontSize: "14px", color: "#2d3748", letterSpacing: "-0.42px" }}
      >
        Dashboard
      </span>
      <h1>Candidates</h1>
      <div className="content-section">
        <div className="table-container">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Tablecell {index}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default Candidates;
