import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
    
    state = {
        results: [],
        disabled:  true,
    }

    handleNumbers = (Value) => {
        this.setState((prevState) => ({
            results: prevState.results.concat(Value),
            disabled: false
        }))
    }

    handleResult = () => {
        const result = eval(this.state.results.join('').toString());
        this.setState({
            results: [result]
        })
    }

    handleDisabled = (Value) => {
        this.setState((prevState) => ({
            results: prevState.results.concat(Value),
            disabled: true
        }))
    }

    handleClear = () => {
        this.setState({
            results: []
        })
    }

    
    render(){
        return(
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
        )
    }
}


class Buttons extends React.Component {

    handleClick = (e) => {
        const Value = e.target.value;
        this.props.handleNumbers(Value);
    }

    handleDisabled = (e) => {
        const Value = e.target.value;
        this.props.handleDisabled(Value);

    }


    render(){
        return(
            <div>
                <button onClick={this.handleClick} value="0">0</button>
                <button onClick={this.handleClick} value="1">1</button>
                <button onClick={this.handleClick} value="2">2</button>                
                <button onClick={this.handleClick} value="3">3</button>                
                <button onClick={this.handleClick} value="4">4</button>                
                <button onClick={this.handleClick} value="5">5</button>                
                <button onClick={this.handleClick} value="6">6</button>                
                <button onClick={this.handleClick} value="7">7</button>                
                <button onClick={this.handleClick} value="8">8</button>                
                <button onClick={this.handleClick} value="9">9</button>                               
                <button onClick={this.handleClick} value=".">.</button>                               
                <button onClick={this.handleDisabled} disabled={this.props.disabled} value="+">+</button>
                <button onClick={this.handleDisabled} disabled={this.props.disabled} value="-">-</button>
                <button onClick={this.handleDisabled} disabled={this.props.disabled} value="*">*</button>
                <button onClick={this.handleDisabled} disabled={this.props.disabled} value="/">/</button>
                <button onClick={this.handleDisabled} disabled={this.props.disabled} value="%">%</button>
                <button onClick={this.props.handleResult} disabled={this.props.disabled}>=</button>
                <button onClick={this.props.handleClear}>AC</button>
            </div>
        )
    }
}

const Numbers = (props) => {
    return(
        <div>
            <h1>{props.results}</h1>
        </div>
    )
}

ReactDOM.render(<Calculator />, document.getElementById('app'))