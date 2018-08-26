import React from 'react';
import axios from 'axios';

import {
	Col,
	Row } from 'react-bootstrap';

import UsersTab from '../../../containers/Users/UsersTab';

class Users extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}
	componentDidMount() {
		axios.get(axios.default.baseURL + '/user')
		.then(result => {
			this.setState({ users: result.data });
		});
	}
	render() {
		return (
			<Row>
				<Col className="col-lg-10 col-md-offset-1">
					<div className="container_users">
						<a href="/create_user">Creer un utilisateur</a>
						<UsersTab users={this.state.users}/>
					</div>
				</Col>
			</Row>
		);
	}
}

export default Users;
