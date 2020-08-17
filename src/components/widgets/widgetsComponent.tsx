import React from 'react'

import { Widget } from '../../types'
import WidgetComponent from '../widget/widgetComponent'

import './widgets.scss'

type Props = {
    widgets: Widget[]
}

type State = {
    folded: Boolean
}


/**
 * Contains the widgest of the Check Order
 */
class WidgetsComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            folded: false
        }
    }

    fold() { this.setState({ folded: true }) }

    unfold() { this.setState({ folded: false }) }

    render() {
        return (
            <div>
                <div className={"widgets-content " + (this.state.folded ? "folded" : "unfolded")}>
                    <div className="widgets-title">
                        <i className="material-icons">folder_open</i>
                        Reference
                        {
                            this.state.folded ?
                                <i className="material-icons widgets-fold-icon" onClick={this.unfold.bind(this)}>keyboard_arrow_down</i>
                                : <i className="material-icons widgets-fold-icon" onClick={this.fold.bind(this)}>keyboard_arrow_up</i>
                        }
                    </div>
                    {!this.state.folded && this.props.widgets && (
                        <div>
                            {this.props.widgets.map((widget, key) => (
                                <WidgetComponent {...{widget, key}}></WidgetComponent>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


export default WidgetsComponent