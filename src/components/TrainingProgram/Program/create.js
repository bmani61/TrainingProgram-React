import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import "../../../framework";
const CreateProgram = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(0);

  const clear = (e) => {
    this.setState({ code: "", name: "" });
  };

  const create = async (e) => {
    e.preventDefault();
    const program = {
      programCode: code,
      ProgramName: name,
    };
    const progs = await api.post("api/programs", program);

    setResult(progs.request.status);
  };

  useEffect(() => {
    if (result === 201) {
      console.log(result);
      window.history.pushState({}, "", "/");
      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
    }
  }, [result]);

  return (
    <form className="form-horizontal" onSubmit={create}>
      <div className="form-group">
        <label className="col-sm-2 control-label">Code</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Program Code"
            onSubmit={(e) => e.preventDefault()}
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
            onChange={(e) => setName(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
            value={name}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-1">
          <button onClick={create} className="btn btn-success">
            Save
          </button>
        </div>
        <div className=" col-sm-2">
          <button type="submit" className="btn btn-danger" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProgram;
