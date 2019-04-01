import React from 'react';
import './todoItem.css'

export default ({ removeTodo, text }) => (
	<div className="todoWrapper">
		 <button className="removeTodo" onClick={removeTodo}>remove</button>
		 {text}
	</div>
) 
