import React, {Component} from 'react';
import axios from 'axios';
import constants from '../constants';

class GifContainer extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	componentDidMount = () => {
		const self = this;
		axios.get(`${constants.baseUrl}/v1/gifs/trending`, {
				params: {
					api_key: `${constants.apiKey}`,
					limit: 20
				}
			}).then((res) => {
				self.setState({data: res.data.data});
			});
	};

	render() {
		return (
			<div>
				{this.state.data.map((item) => <iframe src={item.embed_url}
				                                       width="480"
				                                       height="480"
				                                       frameBorder="0"
				                                       className="giphy-embed"
				                                       allowFullScreen/>)}
			</div>
		);
	}
}

export default GifContainer;
