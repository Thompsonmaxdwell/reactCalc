import React from 'react';
import classes from './calculatorBtn.module.css';

const CalcBtn = (props) => {
	return (
		<div className={classes.CalculatorBtn} >
			<button onClick={props.ClickBtn}>{props.btn}</button>
		</div>
	);
};
export default CalcBtn;
