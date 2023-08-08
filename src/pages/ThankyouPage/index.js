import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

class ThankyouPage extends Component {
	render() {
		return (
			<div className="thankyou-content">
				<p className="thank-you-title">شكرا لك</p>
				<i className="fa-solid fa-check"></i>
				<p className="thank-you-content">تم ارسال طلبك بنجاح وسيتم التواصل معك باقرب وقت ممكن</p>
				<p className="thank-you-content">
					رقم الطلب - <b style={{ color: "#003a74" }}>{this.props.match.params.orderNum}</b>
				</p>
				<NavLink className="back-to-home" to="/">
					الصفحة الرئيسية
				</NavLink>
			</div>
		);
	}
}

export default ThankyouPage;
