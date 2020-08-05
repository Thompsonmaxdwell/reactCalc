import React, { Component } from 'react';
import CalcBtn from '../../contaniner/calculatorBtn/CalBtn';
import Aux from '../../hoc/aux/aux';
import classes from './calculatorFunctionality.module.css';
import Screen from './screen/screen';

class Logic extends Component {
	// btn stale ui
	state = {
		numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '+', '-', '/', "*",'=' , 'AC','√'],
		displayValue : '0',
		operator : null,
		firstOperand : '',
		waitingForSecondOperator : false,

	
	};

// Handle button event depednd on the one that is click
	btnClickEventHandler = (event, value) =>{

		// equal signevent button click
		 if(event.target.innerHTML === '='){
			this.equalSign();
			console.log('Equal to',value )
			return
		}
		// Add button event  click
		if(event.target.innerHTML === '+'){
			this.operatorHandler(value);
			return value
		}

		if(event.target.innerHTML === '-'){
			console.log('Subtract to',value )
			this.operatorHandler(value);

			return
		}
		// Multiply button event  click
		if(event.target.innerHTML === '*'){
			console.log('Multiply to',value );
			this.operatorHandler(value);

			return
		}
		if(event.target.innerHTML === 'AC'){
			this.ACHandler();
			return
		}
		// Square root button event  click
		if(event.target.innerHTML === '√'){
			console.log("√")
			this.squareHandler();
			return
		}
     // Divde button event  click
		if(event.target.innerHTML === '/'){
			console.log('Divide to',value );
			this.operatorHandler(value);

			return
		}

		// 1 to 9  button event  click
			this.inputDigitdHanlder(value);
	    	return value;
	}

	// Square root event  click
squareHandler = ()=>{
	let result = this.calculateHandler(this.state.firstOperand, this.state.displayValue, this.state.operator);
   this.setState({finalResult :Math.sqrt(Number(result))})

}

// AC  event  click
ACHandler = ()=>{
	  this.setState({ 
		   finalResult :null,
		   firstOperand:'',displayValue: '0'
		   ,operator:null,
			waitingForSecondOperator: false
		})
	}
	// equalSign  event  click
  equalSign = () =>{
	let result = this.calculateHandler(this.state.firstOperand, this.state.displayValue, this.state.operator);
		
		this.setState({
			     finalResult :result,
				 firstOperand:'',displayValue: '0',
			 	operator:null,
				 waitingForSecondOperator: false 
			})
		return
  }

	// btn 1 to 9  event  click 
	inputDigitdHanlder = (value) =>{
	   let {displayValue,waitingForSecondOperator } = this.state;

	   if(waitingForSecondOperator === true){
		     displayValue = String(value);
			 this.setState({displayValue})
			 
	   }else {
		   displayValue = displayValue === '0' ? String(value) : displayValue += value;
		   this.setState({displayValue})
	   }

	   this.setState({waitingForSecondOperator:false})
	   
   }

	// firsOperator have value checker    event  click
	operatorHandler = (value) =>{
		let {firstOperand , displayValue} =  this.state;
		if(firstOperand === ''){

			firstOperand = Number(displayValue);
			this.setState({firstOperand, operator:value, waitingForSecondOperator :true})
			
		}else if(firstOperand && displayValue){
			console.log('hello')
		}
	}

		// Waiting for Second Operator if it have value  event  click
	inputDigitdHanlder = (value) =>{
		let {displayValue,waitingForSecondOperator } = this.state;
 
		if(waitingForSecondOperator === true){
			  displayValue = String(value);
			  this.setState({displayValue})
			  
		}else {
			displayValue = displayValue === '0' ? String(value) : displayValue += value;
			this.setState({displayValue})
		}
 
		this.setState({waitingForSecondOperator:false})
		
	}
 
	// check if the firt Operator have value , if it has, then append it to second Operator   event  click
	 operatorHandler = (value) =>{
		 let {operator,firstOperand , displayValue} =  this.state;
		 if(firstOperand === ''){
 
			 firstOperand = Number(displayValue);
			 this.setState({firstOperand, operator :value, waitingForSecondOperator :true})
			
 
		 }else if(operator){
		   let result =	this.calculateHandler(this.state.firstOperand, this.state.displayValue, this.state.operator);
		   
			 this.setState({ 
				     waitingForSecondOperator:true,
					 firstOperand: result, displayValue:String(result),
					 operator:value 
			 })

		 }
	 }
 
	 	// finalize the logic  event  click
	 calculateHandler = (firstOperand, secondValue, operator)=>{
		 if(operator === '+'){
			 return  firstOperand + Number(secondValue);
			 
		  }else if(operator === '-'){
			 return	firstOperand - Number(secondValue);
 
		  }else if(operator === '*'){
			 return	firstOperand * Number(secondValue);
 
		  }else if(operator === '/'){
			 return firstOperand / Number(secondValue);
			 
		  }
		   
		  return secondValue; 
		 
	 }

	render() {

		return (
			<Aux>
				<Screen result={this.state.finalResult ? null:this.state.displayValue} finalResult={this.state.finalResult }/>
				<div className={classes.CalculatorFunctionality}>
				
					{this.state.numbers.map((num, index) => (
					   <CalcBtn
						 key={num + index + num}
						 ClickBtn={(event)=> this.btnClickEventHandler(event, num)}
						 btn={num}
						 />
					))}
				
				</div>
			</Aux>
		);
	}
}

export default Logic;
