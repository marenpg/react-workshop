import React from "react"
import PropTypes from "prop-types"

import classes from "./RadioInput.scss"

const labelToId = (label) =>
	label.replace(/[^a-z0-9-_]/ig, "")
const onChangeHelper = (onChange, choices) => (evt) => {
	const { value } = evt.target
	onChange(
		choices.find((choice) => choice.value === value)
	)
}

export const RadioInput = ({ id, label, choices, value, onChange }) => {	
	id = id || labelToId(label)
	value = value || choices[0]
	return (
		<fieldset className={classes.formField}>
			<legend>{label}</legend>
			{choices.map((choice) => {
				const elementLabel = choice.label || choice.value
				const elementId = id+"_"+labelToId(elementLabel)
				return (
					<div className={classes.group} key={elementId}>
						<input
							type="radio"
							id={elementId}
							name={id}
							value={choice.value}
							onChange={onChangeHelper(onChange, choices)}
							checked={value && value.value === choice.value}/>
						<label htmlFor={elementId}>{elementLabel}</label>
					</div>
				)
			})}
		</fieldset>
	)
}
RadioInput.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,

	choices: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	})).isRequired,
	value: PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	}),

	onChange: PropTypes.func.isRequired
}

export default RadioInput
