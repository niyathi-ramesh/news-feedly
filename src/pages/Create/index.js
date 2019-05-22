import React, { Component } from 'react';
import Navigation from './../../components/Navigation';
import './create.scss';

import RestService from './../../services/rest-service';

export default class Create extends Component {
	constructor() {
		super();
		this.state = {
			formControls: {
				title: '',
				description: '',
				author: '',
				image: '',
				tags: '',
				published: 'false'
			},
			url: '/article',
		}
		this.restService = new RestService();
		this.changeHandler = this.changeHandler.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	changeHandler = event => {
		const name = event.target.name;
		let value = event.target.value;
		if (name === 'published') {
			value = (value === 'true') ? 'false' : 'true';
		}

		this.setState({
			...this.state,
			formControls: {
				...this.state.formControls,
				[name]: value
			}
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.formControls);

		// this.restService.createArticle(this.state.url, this.state.formControls).then(result => {
		// 	console.log(result);
		// });
	}

	render() {
		return (
			<React.Fragment>
				<header>Create</header>
				<form className="create-form" onSubmit={this.onFormSubmit}>
					<input
						type="text"
						name="title"
						value={this.state.formControls.title}
						onChange={this.changeHandler}
						placeholder="Title"
						required
					/>
					<textarea
						name="description"
						value={this.state.formControls.description}
						onChange={this.changeHandler}
						placeholder="Description"
						required
					>
					</textarea>
					<input
						type="text"
						name="tags"
						value={this.state.formControls.tags}
						onChange={this.changeHandler}
						placeholder="Category / Tags"
						required
					/>
					<input
						type="text"
						name="author"
						value={this.state.formControls.author}
						onChange={this.changeHandler}
						placeholder="Author"
						required
					/>
					<input
						type="text"
						name="image"
						value={this.state.formControls.image}
						onChange={this.changeHandler}
						placeholder="Image URL Only"
						required
					/>
					<div className='check-wrapper'>
						<input
							type="checkbox"
							id="published"
							name="published"
							ref="check_me"
							onChange={this.changeHandler}
							value={this.state.formControls.published}
						/>
						<label htmlFor="published">Is Published?</label>
					</div>
					<input type="submit" value="PUBLISH" />
				</form>
				<Navigation />
			</React.Fragment>
		);
	}
}
