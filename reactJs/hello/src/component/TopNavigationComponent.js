import React from 'react';


const TopNavigationItem = (props) => {
		return (
			<li onClick={ () => {
			 	props.clickHandler(props.index);
			 	 }
			 	}
			 	className={ props.detail.completed ? 'completed' : 'nocomplete' } >
				{props.detail.name}
				<a className="btn btn-danger" onClick={ (event) => {
						event.stopPropagation();
			 			props.deleteTask(props.index);
			 	 }
			 	}>X</a>
			</li>

		)
	}

export default TopNavigationItem;