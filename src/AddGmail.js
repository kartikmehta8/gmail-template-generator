import React, { Component } from 'react';

class AddGmail extends Component {
	state = {
		name: '',
		subject: '',
		email: '',
		sendto: '',
		content: '',
	};

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubjectChange = (e) => {
		this.setState({ subject: e.target.value });
	};

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	handleSendtoChange = (e) => {
		this.setState({ sendto: e.target.value });
	};

	handleContentChange = (e) => {
		this.setState({ content: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addGmail(this.state);
		this.setState({
			name: '',
			subject: '',
			email: '',
			sendto: '',
			content: '',
		});
	};

	render() {
		return (
			<div className='container border border-success mt-5 p-5 mb-4'>
				<p class='font-monospace text-dark mt-3 text-center fs-4'>
					Enter the details HERE!
				</p>
				<form className='mt-5'>
					<div className='form-floating mb-3'>
						<input
							type='text'
							className='form-control'
							id='floatingInput'
							onChange={this.handleNameChange}
							value={this.state.name}
						></input>
						<label htmlFor='floatingInput'>Add Sender's Name :</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							type='text'
							className='form-control'
							id='floatingInput'
							onChange={this.handleSubjectChange}
							value={this.state.subject}
						></input>
						<label htmlFor='floatingInput'>Add Subject :</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							type='text'
							className='form-control'
							id='floatingInput'
							onChange={this.handleEmailChange}
							value={this.state.email}
						></input>
						<label htmlFor='floatingInput'>Add Sender's Email:</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							type='text'
							className='form-control'
							id='floatingInput'
							onChange={this.handleSendtoChange}
							value={this.state.sendto}
						></input>
						<label htmlFor='floatingInput'>Add Receiver's Email :</label>
					</div>
					<div className='form-floating mb-3'>
						<textarea
							className='form-control'
							aria-label='
						With
						textarea'
							type='text'
							id='floatingInput'
							onChange={this.handleContentChange}
							value={this.state.content}
						></textarea>
						<label htmlFor='floatingInput'>Add Content :</label>
					</div>
					<button
						onClick={this.handleSubmit}
						className='btn btn-success mx-auto d-block'
					>
						Generate
					</button>
				</form>
			</div>
		);
	}
}

export default AddGmail;
