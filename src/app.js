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

const numberArrays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = [".", "+", "-", "*", "/", "%"];

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
      {numberArrays.map(x => (
        <button onClick={handleClick} value={`${x}`} key={x}>
          {x}
        </button>
      ))}
      {operations.map(operator => (
        <button
          {...props}
          onClick={handleClick}
          value={`${operator}`}
          key={operator}
        >
          {operator}
        </button>
      ))}
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
