import React from 'react';

class TopNavigationItem extends React.Component {
	constructor(props){
		super(props);
		this.editItem = this.editItem.bind(this);
		this.formRender = this.formRender.bind(this);
		this.listItemRender = this.listItemRender.bind(this);

		this.state = {
			isActive: false
			}
		}

	toggleState(){
		const {isActive} = this.state;
		this.setState({
			isActive: !this.state.isActive
		})
	}

	editItem(){
		this.toggleState();
		console.log('Edit Item')
	}

	formRender(props){
		const newValue = {this.input.value}
		console.log(newValue);
		return(
			<form onSubmit={this.props.updateItem}>
				<input type="text" defaultValue={this.props.detail.name} />
				<button type="submit">Update Item</button>
			</form>
			)
		}

	listItemRender(){
		return(
			<li onClick={ () => {
			 	this.props.clickHandler(this.props.index);
			 	 }
			 	}
			 	className={ this.props.detail.completed ? 'completed' : 'nocomplete' } >
				{this.props.detail.name}
				<a className="btn btn-danger" onClick={ (event) => {
						event.stopPropagation();
			 			this.props.deleteTask(this.props.index);
			 	 }
			 	}>X</a>

			 	&nbsp;&nbsp;<a className="btn btn-danger" onClick={ (event) => {
			 		event.stopPropagation();
			 		this.editItem() 
			 		} }>edit</a>
				</li>
			)
	}	

	render(){
		const isActive = this.state.isActive;
		return (
			<section>
			{isActive ? this.formRender() : this.listItemRender() }
			</section>
			)
		}
	}


export default TopNavigationItem;