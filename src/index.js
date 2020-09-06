import React from "react";
import ReactDOM from "react-dom";
import ProgramList from "./components/TrainingProgram/Program/list";
import CreateProgram from "./components/TrainingProgram/Program/create";
import api from "./api/api";
class App extends React.Component {
  state = { programs: [], create: 0 };

  GetPrograms = async (e) => {
    const progs = await api.get("api/programs");
    this.setState({ programs: progs.data });
  };
  callback = (e) => {
    this.GetPrograms();
  };
  render() {
    this.GetPrograms();
    return (
      <div>
        <ProgramList programs={this.state.programs} />
        <CreateProgram callback={this.callback} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
