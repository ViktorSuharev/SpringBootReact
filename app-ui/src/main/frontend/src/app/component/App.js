import React from "react";
import HeaderPanel from "./header/HeaderPanel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div>
          <HeaderPanel/>
          <h1>Darima</h1>
          <h2>I love you</h2>
      </div>
    );
  }
}
export default App;
