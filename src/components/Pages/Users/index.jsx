import React from 'react';
import axios from 'axios';

import UsersTab from '../../../containers/Users/UsersTab';

class Users extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}
	componentDidMount() {
		// console.log(axios.default.baseURL);

		axios.get(axios.default.baseURL + '/user')
		.then(result => {
			this.setState({ users: result.data });
			// console.log('result.data');
		});
	}
	render() {
		return (
			<div className="container_users">
				<a href="/create_user">Creer un utilisateur</a>
				<UsersTab users={this.state.users}/>
			</div>
		);
	}
}

export default Users;
