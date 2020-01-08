import React, { Component } from 'react';
import classes from './Automatic.css';
import List from '../../component/List/List';

import SelectComponent from '../../component/UI/Select/Select';

class Automatic extends Component {

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
		time: '10:00', // 選擇器初始時間 一般會訂再現在時間 + 10分鐘
		weightSelect:"", // 格式 : {value: "300g", label: "300g"}
		backtimeSelect:"",// 格式 : {value: "15", label: "15分"}
		lists:[
			{time:'10:00', back:'99', weight:'900g'},
			{time:'11:00', back:'29', weight:'200g'},
			{time:'12:00', back:'39', weight:'600g'}
		] // 下方每天餵食排程 "HH:MM" 不須日期
	}

	timeOnChange = time => this.setState({time});

	weightOnChange = weightSelect => this.setState({weightSelect});

	backtimeOnChange = backtimeSelect => this.setState({backtimeSelect});

	buttonCheck = () => {
		// 告訴伺服器 該新增新的排程囉
		console.log(this.state.time,this.state.weightSelect,this.state.backtimeSelect)
	}

	render() {

		let list = this.state.lists.map((key, i) => {
			return (<List key={i} time={key['time']} back={key['back']} weight={key['weight']}/>)
		})
		.reduce((ac, cr) => {
			return ac.concat(cr);
		}, [])

		return (
			<div className={classes.Automatic}>
				<SelectComponent case="1" width='30%' Stype="time" timeChange={this.timeOnChange} time={this.state.time}/>
				<SelectComponent case="2" width='30%' Stype="picker" change={this.weightOnChange}/>
				<SelectComponent case="3" width='30%' Stype="picker" change={this.backtimeOnChange}/>
				<div className={classes.ButtonHome}>
					<div className={classes.Button} onClick={this.buttonCheck}>確認</div>
				</div>
				<div className={classes.ButtonHome}>
					{list}
				</div>
			</div>
		)
	}
}
export default Automatic;