import React, { Component } from 'react';
import classes from './Manual.css';
import SelectComponent from '../../component/UI/Select/Select';
import List from '../../component/List/List';

class Manual extends Component {

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
	//更改 state 必須用 react 專屬函式 setState()
	state = {
		weightSelect:"", // 格式 : {value: "300g", label: "300g"}
		backtimeSelect:"",// 格式 : {value: "15", label: "15分"}  下方的list有用到 .label
		switchState:false // true = 飼料盒是開的
	}

	weightOnChange = weightSelect => this.setState({weightSelect});

	backtimeOnChange = backtimeSelect => this.setState({backtimeSelect});

	backCommand = () => {
		// 按下收回按鈕
		this.setState({switchState: false});
		// this.setState((prevState) => ({switchState: !prevState.switchState}));
		// 告訴伺服器開關 關閉了之類的狀態 更新歷史紀錄
		console.log('megatron coming home');
	};

	sureCommand = () => {
		// 按下ok按鈕
		if (this.state.weightSelect !== "" && this.state.backtimeSelect !== "") {
			this.setState({switchState: true});
		} else {
			alert('有地方沒填到喔');
		}
		// 告訴伺服器開關 開啟了之類的狀態 更新幾點幾分關閉時間 "HH:MM"
		console.log(this.state.weightSelect,this.state.backtimeSelect);
	};

	render() {
		return (
			<div className={classes.Manual}>
				<SelectComponent case="2" width='40%' Stype="picker" change={this.weightOnChange}/>
				<SelectComponent case="3" width='40%' Stype="picker" change={this.backtimeOnChange}/>
				<div className={classes.ButtonHome}>
					<div className={classes.Button} onClick={this.sureCommand}>OK</div>
					<div className={classes.Button} onClick={this.backCommand}>收回</div>
				</div>
				<List switchState={this.state.switchState} backtimeSelect={this.state.backtimeSelect.label}/>
			</div>
		)
	}
}
export default Manual;