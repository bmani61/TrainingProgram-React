import React, { useState, useEffect } from "react";
import ProgramList from "./programlist";
import api from "../../../api/api";
import Route from "../../route";
import CreateProgram from "./create";
const Programs = () => {
  const [programs, SetPrograms] = useState([]);

  useEffect(() => {
    GetPrograms();
  }, []);

  const GetPrograms = async (e) => {
    const progs = await api.get("api/programs");
    SetPrograms(progs.data);
  };

  return (
    <div>
      <Route path="/">
        <ProgramList programs={programs} />
      </Route>
      <Route path="/create.js">
        <CreateProgram />
      </Route>
    </div>
  );
};

export default Programs;
