import React from 'react';
import axios from 'axios';

import {
	FormGroup,
	ControlLabel,
	FormControl,
	Col,
	Row } from 'react-bootstrap';

class Create extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}
	validateForm(e) {
		e.preventDefault();
		axios.post(axios.default.baseURL + '/user_create', {
			firstName: this.firstName.value,
			lastName: this.lastName.value,
			birth: this.birth.value,
			mail: this.mail.value,
			code: this.code.value
		});
	}
	formInput(type, name)
	{
		return (
			<FormGroup>
				<ControlLabel>{name}</ControlLabel>
				<FormControl
					type={type}
					name={name}
					id={'exemple'+name}
					placeholder={name}
					inputRef={ input => this[name] = input }
				/>
			</FormGroup>
		);
	}

	render () {
		return(
			<Row className="text-center">
				<Col className="col-lg-8 col-md-offset-2">
				<div>
					<form className="form-horizontal" onSubmit={ (e) => this.validateForm(e) } >
							<div className="modal-header"><h3>New user</h3></div>
							<div className="modal-body col-sm-12">
						{this.formInput('text', 'firstName')}
						{this.formInput('text', 'lastName')}
						{this.formInput('date', 'birth')}
						{this.formInput('email', 'mail')}
						{this.formInput('number', 'code')}
						{/* <Button bsStyle="success">Success</Button> */}
						<FormGroup>
							<FormControl
								type="submit"
								value="create"
							/>
						</FormGroup>
					</div>
					</form>
					<a href="/">All Users</a>
				</div>
			</Col>
		</Row>
		);
	}
}
export default Create;
