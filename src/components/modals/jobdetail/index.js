import { Button, Modal } from "react-bootstrap";

import { getTimeString } from "../../../ulti/func";

import styles from "./jobdetail.module.css";

const days = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
};
const sessions = {
  0: "Morning",
  1: "Afternoon",
  2: "Evening",
};

function JobDetailModal({ isOpen, toggle, data }) {
  const workShift = JSON.parse(data.work_shift);

  return (
    <Modal
      show={isOpen}
      onHide={toggle}
      size="xl"
      className={styles.jobDetailModal}
    >
      <Modal.Header closeButton>{data.title}</Modal.Header>
      <Modal.Body>
        <div className={styles.contentColumn}>
          <div style={{ width: "40%" }}>
            <p>
              <u>Enterprise name:</u>
              <br />
              <span>{data.enterprise_name}</span>
            </p>
            <p>
              <u>Enterprise address:</u>
              <br />
              <span>{data.enterprise_address}</span>
            </p>
            <p>
              <u>Type:</u>
              <br />
              <span>{data.type}</span>
            </p>
            <div>
              <u>Work shift:</u>
              {data.work_whenever ? (
                <span>Giờ làm việc linh hoạt</span>
              ) : (
                <ul>
                  {workShift &&
                    Object.keys(days).map(
                      (idx) =>
                        (workShift[0][idx] ||
                          workShift[1][idx] ||
                          workShift[2][idx]) && (
                          <li key={`${data.id}-${days[idx]}`}>{`${days[idx]}: ${
                            workShift[0][idx] ? `${sessions[0]}` : ""
                          }${workShift[1][idx] ? `, ${sessions[1]}` : ""}${
                            workShift[2][idx] ? `, ${sessions[2]}` : ""
                          }`}</li>
                        )
                    )}
                </ul>
              )}
            </div>
            <p>
              <u>Visa:</u>
              <span> {data.visa ? "yes" : "no"}</span>
            </p>
            <p>
              <u>Experience:</u>
              <span>
                {" "}
                {data.experience === 1 && "No require"}
                {data.experience === 2 && "1 year"}
                {data.experience === 3 && "2-3 years"}
                {data.experience === 4 && "more than 4 years"}
              </span>
            </p>
            <p>
              <u>Start Date:</u>
              <span> {getTimeString(data.start_date)}</span>
            </p>
            <p>
              <u>Salary:</u>
              <span>
                {" "}
                {data.exact_salary
                  ? data.exact_salary
                  : `${JSON.parse(data.range_salary)[0]} - ${
                      JSON.parse(data.range_salary)[1]
                    }`}{" "}
                {data.currency}
              </span>
            </p>
          </div>
          <div style={{ width: "60%" }}>
            <p>
              <u>Description:</u>
              <br />
              <span dangerouslySetInnerHTML={{ __html: data.description }} />
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {data.status === "REVIEW" && (
          <>
            <Button variant="danger">Deny</Button>
            <Button variant="success">Accept</Button>
          </>
        )}
        {data.status !== "REVIEW" && (
          <>
            <Button>Close</Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default JobDetailModal;
