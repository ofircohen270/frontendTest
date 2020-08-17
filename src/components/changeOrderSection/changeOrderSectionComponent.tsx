import React from 'react'

import { ChangeOrderSection } from '../../types'
import ChangeOrderDetailComponent from '../changeOrderDetail/changeOrderDetailComponent'

import './changeOrderSection.scss'

type Props = {
    section: ChangeOrderSection
}

type State = {
    folded: Boolean
}

/**
 * Represents one section of Change order. Each section contains details
 */
class ChangeOrderSectionComponent extends React.Component<Props, State> {

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
                <div className="section-title">
                    {
                        this.state.folded ?
                            <i className="material-icons fold-icon" onClick={this.unfold.bind(this)}>keyboard_arrow_down</i>
                            : <i className="material-icons fold-icon" onClick={this.fold.bind(this)}>keyboard_arrow_up</i>
                    }
                    {this.props.section.title}
                </div>
                {
                    !this.state.folded && (
                        <div className="flex-layout">
                            {this.props.section.details.map((detail, key) => (
                                <div key={key} className="flex-child">
                                    <ChangeOrderDetailComponent
                                        {...{ detail }}>
                                    </ChangeOrderDetailComponent>
                                </div>
                            ))}
                        </div>)
                }
            </div>
        )
    }
}


export default ChangeOrderSectionComponent