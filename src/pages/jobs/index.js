import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

import { getJobList } from "../../services/configAPI";
import { getTimeString } from "../../ulti/func";
import JobDetailModal from "../../components/modals/jobdetail";

import styles from "./jobs.module.css";
import "../../assets/styles/table.css";

const statusFilter = [
  { title: "Reviewing", value: "REVIEW" },
  { title: "Posted", value: "POSTED" },
  { title: "Denied", value: "DENIED" },
  { title: "Closed", value: "CLOSED" },
  { title: "All", value: "" },
];

const pageId = 1;
const pageSize = 10;

function Jobs() {
  const [status, setStatus] = useState(statusFilter[0].value);
  const [jobs, setJobs] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(null);

  const [rerender, setRerender] = useState(false);

  const handleFilterClick = async () => {
    const respone = await getJobList({
      pageId,
      pageSize,
      status,
    });
    if (respone.status === 200) {
      setJobs(respone.data.jobs);
    }
  };

  const toggle = () => setIsOpenModal((prev) => !prev);

  useEffect(() => {
    handleFilterClick();
  }, [rerender]);

  const handleOnClickRow = (item) => {
    setIsOpenModal(true);
    setRowSelected(item);
  };

  return (
    <div className="app-content">
      <span
        style={{ fontSize: "14px", color: "#2d3748", letterSpacing: "-0.42px" }}
      >
        Dashboard
      </span>
      <h1>Jobs</h1>
      <Form
        className={styles.filterBarWrapper}
        onSubmit={(e) => {
          e.preventDefault();
          handleFilterClick();
        }}
      >
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          {statusFilter.map((item) => (
            <option value={item.value} key={item.title}>
              {item.title}
            </option>
          ))}
        </Form.Select>
        <Button className="dark-btn" type="submit">
          View
        </Button>
      </Form>
      <div className={styles.tableContainer}>
        <Table responsive striped bordered hover className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Status</th>
              <th>Title</th>
              <th>Type</th>
              <th>Enterprise Name</th>
              <th>Start date</th>
              <th>Salary</th>
              <th></th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length !== 0 &&
              jobs.map((item, index) => (
                <tr key={item.id} onClick={() => handleOnClickRow(item)}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td>{item.status}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.enterprise_name}</td>
                  <td>{getTimeString(item.start_date)}</td>
                  <td>
                    {item.range_salary === ""
                      ? item.exact_salary
                      : `${JSON.parse(item.range_salary)[0]} - ${
                          JSON.parse(item.range_salary)[1]
                        }`}
                  </td>
                  <td>{item.currency}</td>
                  <td style={{ textAlign: "center" }}>
                    {item.experience === 1 && "No"}
                    {item.experience === 2 && "1 year"}
                    {item.experience === 3 && "2-3 years"}
                    {item.experience === 4 && "more than 4 years"}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {rowSelected && (
        <JobDetailModal
          isOpen={isOpenModal}
          toggle={toggle}
          data={rowSelected}
          rerender={() => setRerender((prev) => !prev)}
        ></JobDetailModal>
      )}
    </div>
  );
}
export default Jobs;
