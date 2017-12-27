import React from 'react';
const TopNavigationAddItem = (props) => {
		return (
			<form onSubmit={props.addTask}>
				<input type="text" onChange={props.updateTask} value={props.currentTask}  />
				<button className="btn-sm" type="submit">Add New Task</button>
			</form>
		)
	}

export default TopNavigationAddItem;