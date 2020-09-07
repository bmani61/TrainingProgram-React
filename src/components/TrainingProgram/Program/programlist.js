import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
//import Link from "../../link";

const ProgramList = ({ programs }) => {
  const list = programs.map((program) => {
    return (
      <tr key={program.id}>
        <td>{program.programCode}</td>
        <td>{program.programName}</td>
        <td>
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <br />
      <br />
      <div className="pull-right"></div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default ProgramList;
