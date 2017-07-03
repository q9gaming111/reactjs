import React from 'react';
import ReactDOM from 'react-dom';
import {Tick} from './components/welcome';

//update seconds of Clock
var user = {
	name: ['Time', '321']
}
ReactDOM.render(
	<Tick user={user}/>,
	document.getElementById('app')
);