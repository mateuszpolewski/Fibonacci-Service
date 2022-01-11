import React, {Component} from 'react';
import axios from 'axios';

class FibCalc extends Component {
  
constructor(props){
super(props);

this.state = {
  num : '',
  x : '',
  calcs : []
}

this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

 componentDidMount = () => {
    this.getCalcData();
    
  };

getCalcData = () => {
  axios.get('/fibcalc')
      .then((response) => {
        const data = response.data;
        data.reverse();
        this.setState({ calcs: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
   
}

updateInput(event){
  this.setState({num : event.target.value})
}

handleSubmit(event){

event.preventDefault();

let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= this.state.num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
this.setState({x : n1})

const data = {
  num : this.state.num,
  x : n1
};

axios.request({
  url: 'http://localhost:8080/fibcalc',
  method: 'POST',
  data: data
})
  .then(()=>{
    console.log("Data sent correctly");
  })
  .catch(() => {
    console.log("Internal error");
  })

  var arrData = this.state.calcs;
  arrData.unshift(data);
  this.setState({calcs : arrData});  
};

displayCalculations = (calculations) => {
  if(!calculations.length) return null;

  return calculations.map((calc, index) =>(
    <div key={index}>
      <span>Dla k = </span><span>{calc.num}</span>
      <span> wyznacznaczono wartość ciągu równą </span><span>{calc.x}</span>
    </div>
  ));
};


  render() {
    return (
      <div className="FibCalc">
      <p>Dla ciągu fibonacciego przy założeniu, że F0 = 0, F1 = 1,... podaj wartość k-tego elementu: </p>
       <input type="text" onChange={this.updateInput}></input>
    <input value="Przelicz" type="submit" onClick={this.handleSubmit} ></input>
    <p>Wartość k-tego elementu ciągu fibonacciego wynosi: {this.state.x}</p>
    <h2>Historia:</h2>
      <div>
          {this.displayCalculations(this.state.calcs.slice(0,10))}
      </div>
    </div>
    );
  }
}
export default FibCalc;