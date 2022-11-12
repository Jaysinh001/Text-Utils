import React from 'react'
// import PropTypes from 'prop-types'

function Alert(props) {

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type} : {props.alert.msg}</strong>
        </div>
    )
}

export default Alert

// Alert.prototype = { alert: PropTypes.string.isRequired }

// Alert.defaultProps = { alert: "alert" }
