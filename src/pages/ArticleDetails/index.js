import React, { Component } from 'react';
import './article-details.scss';
import { Icon } from 'react-icons-kit';
import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { heart } from 'react-icons-kit/feather/heart';

export default class ArticleDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'transparent'
		}
		this.goBack = this.goBack.bind(this);
	}

	listenScrollEvent = e => {
		if (window.scrollY > 200) {
			this.setState({ color: 'grey' })
		} else {
			this.setState({ color: 'transparent' })
		}
	}

	goBack() {
		this.props.history.goBack();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenScrollEvent);
	}

	render() {
		return (
			<React.Fragment>
				<header className='article-header' style={{ backgroundColor: this.state.color }}>
					<Icon className='back-button' size={32} icon={arrow_left} onClick={this.goBack} />
					Detail
				</header>
				<div className='article-main'>
					<div className='img-bg'>
						<div className='card-footer'>
							<Icon size={24} icon={heart} />
							<div>150</div>
						</div>
					</div>
					<div className='content'>
						<h1>An introduction to Git</h1>
						<div className='row-1'>
							<div>TECHNOLOGY</div>
							<div>18 MAY 2019</div>
						</div>
						<div className='paragraph'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lorem eu velit scelerisque ornare. Praesent eu nisi vitae eros eleifend porta. Fusce id accumsan sem. Duis eget ante augue. Quisque at sem id urna tempor ullamcorper. Donec non tempus elit. Etiam sit amet sapien eget libero vulputate lobortis in eu ligula. Vestibulum pharetra semper interdum. Proin convallis elit sed nisl vehicula, in dapibus erat vehicula. Aliquam erat volutpat. Phasellus facilisis nisi et libero blandit commodo. Integer nec purus accumsan, rutrum risus tincidunt, tincidunt diam.
							</p>
							<p>
								Maecenas lacinia eu mi ac ullamcorper. Pellentesque nisl odio, pulvinar at est vitae, malesuada feugiat velit. Quisque bibendum, dui eget vulputate sagittis, arcu nisl eleifend justo, molestie varius lacus magna ut quam. In ac ex in sapien porttitor commodo id ut elit. Sed scelerisque convallis est, quis dignissim mi. Nam maximus quam at turpis imperdiet, convallis volutpat sapien venenatis. Vivamus iaculis rutrum tempus. Fusce eleifend aliquam nisl et pellentesque. Suspendisse et quam velit. Nulla ullamcorper erat nec suscipit euismod. Vivamus at magna at nisl maximus luctus eget at ante. Vestibulum vulputate at ipsum malesuada porttitor. Aliquam a vestibulum felis, at imperdiet mauris. In ullamcorper tristique ex sit amet gravida. Aliquam erat volutpat. Aliquam fermentum ipsum odio, sollicitudin gravida nulla lobortis sed.
							</p>
							<p>
								Quisque a massa eget felis ornare accumsan. Quisque a neque aliquam, tristique felis non, volutpat purus. In tincidunt malesuada mauris ut iaculis. Nulla ut congue erat, eu feugiat enim. Cras porta libero vel libero ornare lobortis. Integer ut ex metus. Nam rutrum tincidunt elit sed pellentesque. Etiam sed tellus sit amet sem feugiat condimentum sed quis sapien. Nulla consequat ex vel tristique aliquam. Vestibulum vel metus leo. Donec massa mauris, maximus a neque eget, tincidunt scelerisque odio. Maecenas ante tortor, elementum sed mattis quis, tincidunt eget ante. Integer sagittis elit placerat, varius odio sed, sodales eros. Maecenas dapibus orci sit amet congue volutpat. Curabitur mauris arcu, accumsan id lacus vitae, pulvinar interdum orci. Sed sagittis mollis ipsum, sed sagittis ipsum iaculis eget.
							</p>
							<p>
								Aliquam varius congue vulputate. Sed faucibus fringilla varius. Suspendisse semper nunc at augue tempor aliquam. In malesuada efficitur neque, sed vestibulum elit commodo non. Integer hendrerit tincidunt pretium. Nulla eleifend ante ut nunc lacinia, vitae aliquet ante consectetur. Nunc aliquet consectetur ligula ac aliquet. Mauris sed lobortis tortor. Etiam sodales turpis urna, at ultricies mi mattis eu.
							</p>
							<p>
								Integer iaculis ac leo venenatis consectetur. Nullam mollis leo sed elit pellentesque venenatis. Morbi eget varius neque, sit amet sodales ligula. Nullam posuere, tortor ut ultricies fermentum, elit lacus sagittis arcu, eget porttitor nisi enim eu nisi. Aenean ultricies sed felis eu fermentum. Duis quis leo at est eleifend commodo at a nibh. Vivamus eget urna eget lorem dignissim suscipit. Aenean congue gravida urna, sed iaculis quam. Morbi facilisis quam sit amet ligula mollis pellentesque id id elit. Duis eget nunc vitae purus sollicitudin euismod sed ut diam.
							</p>
							<p>
								Nulla maximus nulla diam, sit amet molestie sem luctus non. Sed consectetur venenatis nisl quis sagittis. Cras consectetur vitae mauris sit amet pretium. Nam quam ex, fringilla pretium enim sed, ultricies tempor dolor. Fusce nec blandit purus. Aliquam congue mauris quam, vitae gravida est pulvinar id. Ut in tellus a sapien congue accumsan in eget sapien. Nam molestie ligula vitae turpis volutpat sagittis. Suspendisse potenti. Nulla vitae neque iaculis, rutrum nibh vitae, vulputate libero.
							</p>
							<p>
								Nunc mattis porta massa a dapibus. Nulla a pulvinar arcu. Nam et consequat odio. In sit amet vulputate enim, eu convallis odio. Integer pharetra vel felis eget blandit. Nulla suscipit faucibus finibus. Nullam turpis mauris, placerat convallis imperdiet vel, viverra pulvinar ligula. Curabitur molestie ligula ac nisi porttitor placerat. Praesent egestas lobortis congue. Donec non arcu in ante iaculis porttitor. Vivamus vel rhoncus lacus. Cras suscipit massa ex, et rutrum est congue id. Ut sagittis porta dictum. Vestibulum euismod faucibus metus non malesuada. Quisque tempor sapien urna, eget imperdiet sapien viverra eget. Sed a mollis ante.
							</p>
							<p>
								Suspendisse dapibus malesuada nisl ut sollicitudin. Sed sit amet quam egestas libero euismod consequat. Nam in est a ipsum venenatis tincidunt. Nulla ultricies, tortor eget euismod porta, arcu justo bibendum ipsum, eu sagittis metus lorem at nulla. Aenean vel velit semper, blandit ante non, ultrices velit. Nunc vel nisl a ex sodales interdum id eu quam. Praesent ac fringilla ligula. Phasellus at justo lorem. Aliquam erat volutpat. Nam nec turpis at ex pulvinar ornare nec eget neque. Nunc lacinia metus sem, quis fringilla tortor commodo vitae. Morbi porttitor nibh ac massa varius ullamcorper. Etiam ornare metus nec ex blandit eleifend.
							</p>
							<p>
								Phasellus lectus urna, dapibus ut placerat vitae, lobortis et mauris. Aliquam ac pellentesque libero, in porttitor velit. Aenean ac eros a libero scelerisque lobortis vitae sit amet elit. Morbi condimentum velit blandit neque sagittis condimentum. Donec bibendum nisi sit amet arcu semper iaculis. Aliquam ipsum dolor, dignissim et nibh elementum, sagittis fringilla ante. Mauris bibendum gravida arcu sed feugiat. Nulla eget dui ac magna tempor molestie. Vivamus aliquet vestibulum condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc congue, nibh nec finibus accumsan, velit nisi sagittis orci, nec mattis sapien libero at est. Proin nec lacus lorem. Ut quis risus porttitor, lobortis ligula quis, ullamcorper risus. Nulla congue pulvinar orci, sed lacinia ipsum. Aliquam sagittis dignissim rhoncus. In laoreet libero a lorem tempus venenatis.
							</p>
							<p>
								Phasellus et ipsum et orci malesuada dapibus. Praesent quis vehicula elit, a egestas nisl. Curabitur a sollicitudin nulla. Nam lacinia diam vel lacus rutrum, ac sodales lectus condimentum. Duis id tempus ligula. Fusce dictum enim nisl, id auctor nunc consectetur in. Nulla dictum blandit gravida. Cras facilisis lorem vel arcu ultrices, et varius lorem consequat. Nam non diam massa. Morbi eu tortor ac mi varius pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in consectetur mauris, sit amet accumsan ante. Vivamus varius dui vel lectus pharetra, ut vulputate purus mattis. Morbi euismod arcu ac lacinia imperdiet.
							</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
