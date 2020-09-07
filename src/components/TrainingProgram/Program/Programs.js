import React, { useState, useEffect } from "react";
import ProgramList from "./programlist";
import api from "../../../api/api";
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
      <ProgramList programs={programs} />
    </div>
  );
};

export default Programs;
