/* eslint-disable react/prop-types */

import React from "react"
import LabelledField from "./LabelledField"

export class UserForm extends React.PureComponent{
	state = {
		showPassword: false
	}

	onTargetValueChange = (stateProperty) => (evt) => {
		this.props.onChange(stateProperty, evt.target.value)
	}
	onTargetCheckedChange = (stateProperty) => (evt) => {
		this.props.onChange(stateProperty, evt.target.checked)
	}
	onShowPasswordChange = () => {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}
	render(){
		const { showPassword } = this.state
		const { name, email, type, password, disabled, comments } = this.props

		return (
			<form action="/">
				<LabelledField id="name_field" label="Name">
					<input
						type="text"
						value={name}
						onChange={this.onTargetValueChange("name")}/>
				</LabelledField>
				<LabelledField id="email_field" label="Email">
					<input
						type="email"
						value={email}
						onChange={this.onTargetValueChange("email")}/>
				</LabelledField>
				<div>
					<label htmlFor="type_field">Type</label>
					<select id="type_field" value={type} onChange={this.onTargetValueChange("type")}>
						<option value="Read-only">Read-only</option>
						<option value="User">User</option>
						<option value="Manager">Manager</option>
						<option value="Administrator">Administrator</option>
						<option value="Sysadmin">Sysadmin</option>
					</select>
				</div>
				<LabelledField id="password_field" label="Password">
					<input
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={this.onTargetValueChange("password")}/>
					<input type="checkbox" checked={showPassword} onChange={this.onShowPasswordChange}/>
				</LabelledField>
				<div>
					<label htmlFor="disabled_field">Disabled</label>
					<input
						id="disabled_field"
						type="checkbox"
						checked={disabled}
						onChange={this.onTargetCheckedChange("disabled")}/>
				</div>
				<div>
					<label htmlFor="comments_field">Comments</label>
					<textarea id="comments_field" value={comments} onChange={this.onTargetValueChange("comments")}/>
				</div>
			</form>
		)
	}
}
export default UserForm