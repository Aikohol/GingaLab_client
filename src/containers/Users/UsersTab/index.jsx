import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';

class UsersTab extends React.Component {
	render () {
		const usersList = this.props.users.map((user) =>
			<User key={user._id} user={user} />
		);

		return (
			<div className="row">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Birth</th>
							<th>Mail</th>
							<th>ZIP/Code</th>
						</tr>
					</thead>
					<tbody>
						{usersList}
					</tbody>
				</table>
			</div>
		);
	}
}
	UsersTab.propTypes = {
	users: PropTypes.array
};


export default UsersTab;
