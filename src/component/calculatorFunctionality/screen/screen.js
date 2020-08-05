import React from 'react';
import classes from './screen.module.css';

const screen = (props) => {
	return (
		<div className={classes.ScreenBody}>
			<div className={classes.Screen}>
			<p>{props.result}</p>
			<p>{props.finalResult}</p>
			</div>
		</div>
	);
};

export default screen;
