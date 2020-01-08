import React, { Component } from 'react';
import classes from './Record.css';
import List from '../../component/List/List';

class Record extends Component {

	componentDidMount () {
		// 從資料庫初始刷新下方state
		// axios.get('https://react-req.firebaseio.com/ingredient.json')
		// .then(res => {
		// 	this.setState({ingredients: res.data})
		// })
		// .catch(err => {
		// 	this.setState({error:true});
		// });
	}

	state = {
		data:[
			{totaltime: "10:00-10:05", weight:"900g"},
			{totaltime: "11:00-11:05", weight:"300g"},
			{totaltime: "12:00-12:15", weight:"400g"},
			{totaltime: "13:00-13:10", weight:"500g"}
		]
	}

	render() {

		let list = this.state.data.map((key, i) => {
			return (<List key={i} totaltime={key['totaltime']} weight={key['weight']}/>)
		})
		.reduce((ac, cr) => {
			return ac.concat(cr);
		}, [])

		return (
			<div className={classes.Record}>
				<div className={classes.ButtonHome}>
					{list}
				</div>
			</div>
		)
	}
}
export default Record;