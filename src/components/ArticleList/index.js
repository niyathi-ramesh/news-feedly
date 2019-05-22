import React, { Component } from 'react';
import './article-list.scss'
import DetailsCard from './../DetailsCard';

export default class ArticleList extends Component {
	render() {
		const { articles } = this.props;
		return (
			<React.Fragment>
				<div className="articles-main">
					{articles.map(article => {
						return (
							<DetailsCard key={article.id} article={article} />
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}
