import React from 'react';

const NavBar = () => {
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
						<ul className="nav navbar-nav">
							<li className="active"><a href="/home" >Home</a></li>
							<li><a href="/india">India News</a></li>
							<li><a href="/US">US News</a></li>
							<li><a href="/Canada">India News</a></li>
						</ul>
					</div>
				</div>
			</nav>
			)
	}

export default NavBar;