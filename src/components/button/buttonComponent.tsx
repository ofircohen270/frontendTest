import React from 'react'

import './button.scss'

export default class Button extends React.Component {
    render() {
        return (
            <button className="btn">{this.props.children}</button>
        )
    }
}
