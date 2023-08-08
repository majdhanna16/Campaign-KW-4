import React, { Component } from "react";
import "./styles.scss";
import { NavLink, withRouter } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PolicyIcon from "@mui/icons-material/Policy";

class Header extends Component {
	toggleMobileMenu(e) {
		let menu = e.target.closest(".routes").querySelector(".routes-menu");
		if (menu.classList.contains("show")) {
			menu.classList.remove("show");
		} else {
			menu.classList.add("show");
		}
	}

	render() {
		return (
			<div className="header">
				<NavLink style={{ textDecoration: "none" }} to="/">
					<span className="logo-first-line">استقبال بلاغ تجاري</span>
				</NavLink>
				<div className="header-buttons">
					<NavLink className="header-button" exact to="/policy">
						<PolicyIcon />
						<span className="button-text">سياسة الخصوصية</span>
					</NavLink>
					<NavLink className="header-button" exact to="/">
						<HomeRoundedIcon />
						<span className="button-text">الرئيسية</span>
					</NavLink>
				</div>
				<div className="routes mobile">
					<button className="menu-button" onClick={this.toggleMobileMenu}>
						<i className="fa-solid fa-bars"></i>
					</button>
					<div className="routes-menu">
						<button className="close-button" onClick={this.toggleMobileMenu}>
							<i className="fa-solid fa-xmark"></i>
						</button>
						<p className="menu-title">اهلا وسهلا</p>
						<NavLink className="nav-route" to="/" onClick={this.toggleMobileMenu}>
							<i className="fa-solid fa-house"></i>
							الرئيسية
						</NavLink>
						<NavLink className="nav-route" to="/policy" onClick={this.toggleMobileMenu}>
							<i className="fa-solid fa-book"></i>
							سياسة الخصوصية
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
