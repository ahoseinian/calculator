import React from "react";
import ReactDOM from "react-dom";

class Calculator extends React.Component {
  state = {
    results: [],
    disabled: true
  };

  handleNumbers = Value => {
    this.setState(prevState => ({
      results: prevState.results.concat(Value),
      disabled: false
    }));
  };

  handleResult = () => {
    const result = eval(this.state.results.join("").toString());
    this.setState({
      results: [result]
    });
  };

  handleDisabled = Value => {
    this.setState(prevState => ({
      results: prevState.results.concat(Value),
      disabled: true
    }));
  };

  handleClear = () => {
    this.setState({
      results: []
    });
  };

  render() {
    return (
      <div>
        <Buttons
          results={this.state.results}
          disabled={this.state.disabled}
          handleDisabled={this.handleDisabled}
          handleNumbers={this.handleNumbers}
          handleResult={this.handleResult}
          handleClear={this.handleClear}
        />

        <Numbers results={this.state.results} />
      </div>
    );
  }
}

function Buttons(props) {
  const handleClick = e => {
    const Value = e.target.value;
    props.handleNumbers(Value);
  };

  const handleDisabled = e => {
    const Value = e.target.value;
    props.handleDisabled(Value);
  };

  return (
    <div>
      <button onClick={handleClick} value="0">
        0
      </button>
      <button onClick={handleClick} value="1">
        1
      </button>
      <button onClick={handleClick} value="2">
        2
      </button>
      <button onClick={handleClick} value="3">
        3
      </button>
      <button onClick={handleClick} value="4">
        4
      </button>
      <button onClick={handleClick} value="5">
        5
      </button>
      <button onClick={handleClick} value="6">
        6
      </button>
      <button onClick={handleClick} value="7">
        7
      </button>
      <button onClick={handleClick} value="8">
        8
      </button>
      <button onClick={handleClick} value="9">
        9
      </button>
      <button onClick={handleClick} value=".">
        .
      </button>
      <button onClick={handleDisabled} disabled={props.disabled} value="+">
        +
      </button>
      <button onClick={handleDisabled} disabled={props.disabled} value="-">
        -
      </button>
      <button onClick={handleDisabled} disabled={props.disabled} value="*">
        *
      </button>
      <button onClick={handleDisabled} disabled={props.disabled} value="/">
        /
      </button>
      <button onClick={handleDisabled} disabled={props.disabled} value="%">
        %
      </button>
      <button onClick={props.handleResult} disabled={props.disabled}>
        =
      </button>
      <button onClick={props.handleClear}>AC</button>
    </div>
  );
}

const Numbers = props => {
  return (
    <div>
      <h1>{props.results}</h1>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById("app"));
