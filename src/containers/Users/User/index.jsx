import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {

	render() {
		return (
			<tr>
				<td>
					<span>{this.props.user.firstName} {this.props.user.lastName}</span>
				</td>
				<td>
					<span>{this.props.user.birth}</span>
				</td>
				<td>
					<span>{this.props.user.mail}</span>
				</td>
				<td>
					<span>{this.props.user.code}</span>
				</td>
			</tr>
		);
	}
}

User.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	birth: PropTypes.instanceOf(Date),
	mail: PropTypes.string,
	code: PropTypes.number,
};

export default User;
