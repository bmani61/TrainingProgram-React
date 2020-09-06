import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class ProgramList extends React.Component {
  Programrows = (props) => {
    const list = props.map((program) => {
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
    return list;
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="pull-right">
          <button type="button" className="btn btn-success ">
            Create Program
          </button>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.Programrows(this.props.programs)}</tbody>
        </table>
      </div>
    );
  }
}

export default ProgramList;
