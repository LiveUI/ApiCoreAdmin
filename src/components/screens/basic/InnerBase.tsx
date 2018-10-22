import * as React from "react";
import Menu from "../../views/layout/Menu";
// import { Component } from "react";

// export interface IOuterBaseProps {}

// export interface IOuterBaseState {}

class OuterBase extends React.Component {
	// <IOuterBaseProps, IOuterBaseState> {
	// state = { :  }

	public render() {
		return (
			<div>
				<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
					<button
						className="navbar-toggler navbar-toggler-right hidden-lg-up"
						type="button"
						data-toggle="collapse"
						data-target="#navbarsExampleDefault"
						aria-controls="navbarsExampleDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon">|||</span>
					</button>
					<a className="navbar-brand" href="#">
						Dashboard
					</a>

					<div className="collapse navbar-collapse" id="navbarsExampleDefault">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Settings
								</a>
							</li>
						</ul>
						<form className="form-inline mt-2 mt-md-0">
							<input
								className="form-control mr-sm-2"
								type="text"
								placeholder="Search"
							/>
							<button
								className="btn btn-outline-success my-2 my-sm-0"
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</nav>

				<div className="container-fluid">
					<div className="row">
						<nav
							id="menu"
							className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar"
						>
							<Menu minimised={false} />
						</nav>

						<main
							id="root"
							className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3"
						>
							<h1>This is fun!</h1>
							<p>huhuhuhuhuhu</p>
						</main>
					</div>
				</div>
			</div>
		);
	}
}

export default OuterBase;
