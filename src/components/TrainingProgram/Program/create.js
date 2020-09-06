import React from "react";
import api from "../../../api/api";
class CreateProgram extends React.Component {
  state = { code: "", name: "", result: 0 };

  codechange = (e) => {
    this.setState({ code: e.target.value });
  };
  namechange = (e) => {
    this.setState({ name: e.target.value });
  };
  clear = (e) => {
    this.setState({ code: "", name: "" });
  };

  create = async (e) => {
    e.preventDefault();
    const program = {
      programCode: this.state.code,
      ProgramName: this.state.name,
    };
    const progs = await api.post("api/programs", program);
    this.setState({ result: progs.status });
    this.clear();
    this.props.callback(this.state.result);
  };

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.create}>
        <div className="form-group">
          <label className="col-sm-2 control-label">Code</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Program Code"
              onSubmit={(e) => e.preventDefault()}
              value={this.state.code}
              onChange={this.codechange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Program Name"
              onChange={this.namechange}
              onSubmit={(e) => e.preventDefault()}
              value={this.state.name}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-1">
            <button onClick={this.props.onsubmit} className="btn btn-success">
              Save
            </button>
          </div>
          <div className=" col-sm-2">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={this.clear}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateProgram;
