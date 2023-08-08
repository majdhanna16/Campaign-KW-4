import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "@fontsource/cairo";
import "./css/common.scss";
import ConfigData from "./includes/config.json";
import Home from "./pages/Home";
import ThankyouPage from "./pages/ThankyouPage";
import Policy from "./pages/Policy";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
	componentDidMount() {
		this.checkBlackList();
		this.getPhoneNumber();
	}

	async checkBlackList() {
		var Buffer = require("buffer/").Buffer;
		const username = ConfigData.Authorization.username;
		const password = ConfigData.Authorization.password;
		const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");
		const response = await axios({
			method: "POST",
			url: ConfigData.server_URI + "/common/is-in-blacklist",
			headers: {
				Authorization: `Basic ${token}`,
			},
		});
		if (response.data === "banned") {
			window.location.replace("https://google.com");
		}
	}

	async getPhoneNumber() {
		var Buffer = require("buffer/").Buffer;
		const username = ConfigData.Authorization.username;
		const password = ConfigData.Authorization.password;
		const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");
		const request = {
			column: "campaign_name",
			value: '"Campaign-KW-3"',
			tableName: "campaigns_phone_numbers",
			selectValues: "phone_number",
		};
		const response = await axios({
			method: "POST",
			url: ConfigData.server_URI + "/common/get-entries",
			data: request,
			headers: {
				Authorization: `Basic ${token}`,
			},
		});
		ConfigData.whatsapp_number = response.data[0]?.phone_number || null;
		this.setState({});
	}

	updateEnvironmentVariables() {
		ConfigData.owner_id = process.env.REACT_APP_OWNER_ID;
	}

	render() {
		this.updateEnvironmentVariables();
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/policy" component={Policy} />
					<Route exact path="/thankyou/:orderNum" component={ThankyouPage} />
					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
