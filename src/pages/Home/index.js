import React, { Component } from "react";
import configData from "../../includes/config.json";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.scss";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import PriceChangeIcon from "@mui/icons-material/PriceChange";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button_value: "سجّل لنعاود الاتصال بك",
			error_message: "",
		};
		this.scrollToForm = this.scrollToForm.bind(this);
		this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
		this.onValueChange = this.onValueChange.bind(this);
	}

	async handleSubmitBtn(e) {
		e.preventDefault();
		if (!e.target.acceptPolicy.checked) {
			this.setState({
				error_message: "الرجاء الموافقه على شروط سياسه الخصوصيه",
			});
			return;
		}
		e.target.submitBtn.disabled = true;
		this.setState({
			button_value: "...الرجاء الانتظار",
			error_message: "",
		});
		const order_number = this.generateRandomNumber();
		const request = {
			full_name: e.target.full_name.value.substring(0, 55),
			location: "",
			email: e.target.email.value.substring(0, 55),
			phone_number: e.target.phone_number.value,
			details: e.target.details.value,
			owner_id: configData.owner_id || 1,
			order_number: order_number,
			source: "Campaign-KW-2",
		};
		var Buffer = require("buffer/").Buffer;
		const username = configData.Authorization.username;
		const password = configData.Authorization.password;
		const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");
		await axios({
			method: "POST",
			url: configData.server_URI + "/shakwa/add-new-lead",
			data: request,
			headers: {
				Authorization: `Basic ${token}`,
			},
		});
		e.target.submitBtn.disabled = false;
		this.setState({
			button_value: "سجّل لنعاود الاتصال بك",
			error_message: "",
		});
		e.target.reset();
		this.props.history.push("/thankyou/" + order_number);
	}

	generateRandomNumber(length = 9) {
		return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
	}

	scrollToForm(e) {
		e.preventDefault();
		this.formRef.scrollIntoView();
	}

	makeBorderRed(el) {
		const elements = document.getElementsByClassName("input-text");
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			if (element.name === el) {
				element.classList.add("error");
			}
		}
	}

	onValueChange() {
		const elements = document.getElementsByClassName("input-text");
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.classList.remove("error");
		}
		this.setState({
			error_message: "",
		});
	}

	render() {
		return (
			<div className="page-content">
				<Helmet>
					<meta name="robots" content="noindex, nofollow" />
				</Helmet>
				{configData.whatsapp_number && (
					<div className="whatsapp-sticky">
						<a href={"https://wa.me/" + configData.whatsapp_number + "?text=" + configData.whatsapp_message} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp"></i>
						</a>
					</div>
				)}
				<div className="images-header">
					<img src={image1} alt="" />
					<img src={image2} alt="" />
					<img src={image3} alt="" />
				</div>
				<div className="content-wrapper">
					<div className="home-content">
						<p className="home-title">بلاغ تجاري</p>
						<div className="content-div">
							<p className="content-row">
								تقديم شكوى بلاغ على قضايا الاحتيال عبر الإنترنت واستعادة الأموال المسروقة خدمة شكاوى إلكترونية نقدمها, تمكن المستفيد من تقديم الشكاوى المتعلقة بالاحتيال، يتم بحث ودراسة وتحليل الشكوى
								المتعلقة بالاحتيال فنياً وقانونيا
							</p>
						</div>
						<br />
						<p className="home-title">قطاع حماية المستهلك</p>
						<div className="content-div">
							<p className="content-row">خدمة الكترونية تقدمها وزارة التجارة تمكن المستفيد من البلاغ عن حالة غش تجاري</p>
							<p className="content-row">تعرف كيف تسترجع اموالك من انواع الاحتيال المالي مثل</p>
							<p className="content-val">شراء عقار من شركة وهمية</p>
							<p className="content-val">شراء سيارة من بائع وهمي</p>
							<p className="content-val">بضاعة غير مطابقة للمواصفات</p>
							<p className="content-val">عدم استلام تاخر في استلام بضاعة من المتاجر الالكترونية</p>
							<p className="content-val">عمليات استقدام وهمية عدم استرجاع الاموال المستحقة</p>
						</div>
					</div>
					<div className="fill-data" ref={(ref) => (this.formRef = ref)}>
						<p className="form-title">سجل شكوتك الان!</p>
						<p className="form-description">الرجاء تعبئة الاستمارة بشكل كامل, وإضافة اي تفاصيل قد تكون مفيدة</p>
						<div className="seprated-div">
							<form style={{ width: "100%" }} onSubmit={this.handleSubmitBtn} onChange={this.onValueChange}>
								<input className="input-text" name="full_name" type="text" placeholder="الاسم الكامل" required />
								<input className="input-text" name="email" type="email" placeholder="البريد الالكتروني" required />
								<input className="input-text" name="phone_number" type="number" inputMode="numeric" placeholder="رقم الهاتف" required onWheel={(e) => e.target.blur()} />
								<textarea className="input-textarea" name="details" rows={5} height="700px" placeholder="اكتب مشكلتك باختصار - بسطر او اثنين" required />
								<div className="accept-policy-line">
									<input className="accept-policy-cb" type="checkbox" id="acceptPolicy" name="acceptPolicy" />
									<label className="accept-policy-text" htmlFor="acceptPolicy">
										انا اوافق على شروط{" "}
										<NavLink className="accept-policy" to="policy">
											سياسه الخصوصيه
										</NavLink>
									</label>
								</div>
								<p className="error-message">{this.state.error_message}</p>
								<button className="form-button" name="submitBtn">
									{this.state.button_value}
								</button>
							</form>
							{/* <div style={{ width: "100%", margin: "20px 0px" }}>
								<div className="data-info-wrapper">
									<div className="info-row">
										<Diversity3Icon className="info-col icon" />
										<div className="info-col">
											<label className="info-tile">الفئة المستفيدة</label>
											<label className="info-value">المستهلك</label>
										</div>
									</div>
									<div className="info-row">
										<SettingsSuggestIcon className="info-col icon" />
										<div className="info-col">
											<label className="info-tile">مدة تنفيذ الخدمة</label>
											<label className="info-value">فورية</label>
										</div>
									</div>
									<div className="info-row">
										<LaptopMacIcon className="info-col icon" />
										<div className="info-col">
											<label className="info-tile">قنوات تقديم الخدمة</label>
											<label className="info-value">الموقع الالكتروني</label>
										</div>
									</div>
									<div className="info-row">
										<PriceChangeIcon className="info-col icon" />
										<div className="info-col">
											<label className="info-tile">رسوم الخدمة</label>
											<label className="info-value">بدون رسوم</label>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div className="bottom-content">
					<img style={{ maxWidth: "100%" }} src={image3} alt="" />
					<div className="content-div">
						<p className="content-row">تدعم وتشرف وزارة التجارة والصناعة على الأنشطة التجارية والاقتصادية وتوفر السلع والمواد والخدمات</p>
					</div>
					<p className="bottom-title">حماية المستهلك</p>
					<div className="content-div">
						<a href="tel:135" className="content-val">
							135 لتقديم شكوى
						</a>
						<a href="tel:137" className="content-val">
							137 لاستفسارات الشركات
						</a>
					</div>
				</div>
				<div className="bottom-header">
					<NavLink className="navigator" to="policy">
						سياسه الخصوصيه
					</NavLink>
					<p className="rights-text">© جميع الحقوق محفوظة - 2022م.</p>
				</div>
			</div>
		);
	}
}

export default Home;
