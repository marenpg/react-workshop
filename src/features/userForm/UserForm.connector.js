import {connect} from "react-redux"
import UserForm from "./UserForm"

import * as userForm from "./userForm.duck"
import * as userCombiner from "../../combiners/userForm.combiner"

const mapStateToProps = (state) => ({
	user: userForm.getEditingUser(state),
	types: (state.userForm || {}).types || ["Read-only", "User", "Manager", "Administrator", "Sysadmin"]
})
const mapDispatchToProps = (dispatch, ownProps) => ({
	onSave: () => {
		const {history} = ownProps
		dispatch(userCombiner.createUser())
		dispatch(userForm.newUser())
		history.push("/")
	},
	setNewUser: () => {
		dispatch(userForm.newUser())
	},
	onPropChange: (propName, propValue) => {
		dispatch(userForm.setEditingUserField(propName, propValue))
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)