import React, { Component } from 'react';
import Logic from '../calculatorFunctionality/logic';
import classes from './Ui.module.css';
class Ui extends Component {
	state = {};
	render() {
		return (
			<div className={classes.Ui}>
				<Logic />
			</div>
		);
	}
}

export default Ui;
