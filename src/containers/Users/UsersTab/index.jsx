import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';

class UsersTab extends React.Component {
	render () {
		const usersList = this.props.users.map((user) =>
			<User key={user._id} user={user} />
		);

		return (

			<table className="table table-striped">
			<tbody>
				{usersList}
			</tbody>
</table>
		);
	}
}
	UsersTab.propTypes = {
	users: PropTypes.array
};


export default UsersTab;
