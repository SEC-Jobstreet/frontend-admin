import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";

import CandidateModal from "../../components/modals/candidatemodal";
import { users } from "../../drafts";

import "../../assets/styles/table.css";
import "../pagination.css";

const itemsPerPage = 10;

function Candidates() {
  const [candidates, setCandidates] = useState(users);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState({});

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = candidates.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(candidates.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % candidates.length;
    setItemOffset(newOffset);
  };

  const toggle = () => setIsOpenModal((prev) => !prev);

  const handleOnClickRow = (item) => {
    setIsOpenModal(true);
    setRowSelected(item);
  };

  console.log(setCandidates);

  return (
    <div className="candidates-page-container app-content">
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
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Password</th>
                <th>Birthday</th>
                <th>Blood Group</th>
                <th>Height and Weight</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 &&
                currentItems.map((item, index) => (
                  <tr key={item.id} onClick={() => handleOnClickRow(item)}>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.bloodGroup}</td>
                    <td>{`${item.height}cm and ${item.weight}kg`}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="panigation-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<i className="bx bx-chevron-right" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<i className="bx bx-chevron-left" />}
          renderOnZeroPageCount={null}
        />
      </div>
      <CandidateModal
        isOpen={isOpenModal}
        toggle={toggle}
        data={rowSelected}
      ></CandidateModal>
    </div>
  );
}
export default Candidates;
