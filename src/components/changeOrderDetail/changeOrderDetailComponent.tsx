import React from 'react'
import { connect } from 'react-redux'

import { saveDetail } from '../../actions'
import { ChangeOrderDetail } from '../../types'

import './changeOrderDetail.scss'

type Props = {
    detail: ChangeOrderDetail,
    saveDetail: (detailTitle: string, detailValue: number) => {}
}

type State = {
    editMode: Boolean,
    detailValue?: number
}

/**
 * Represents one detail of the Change Order
 */
class ChangeOrderDetailComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            editMode: false
        }
    }

    enterEditMode() {
        this.setState({ editMode: true, detailValue: this.props.detail.value })
    }

    cancelEditMode() {
        this.setState({ editMode: false })
    }

    handleChange(event) {
        this.setState({
            detailValue: Number(event.target.value)
        })
    }

    handleSubmit() {
        this.props.saveDetail(this.props.detail.key, this.state.detailValue)
        this.setState({ editMode: false })
    }

    render() {
        return (
            <div className={"change-order-detail " + (this.state.editMode ? "edit-mode" : "")}>
                <div className="actions">
                    {
                        this.props.detail.editable &&
                        (this.state.editMode ?
                            <div>
                                <i className="material-icons" onClick={this.handleSubmit.bind(this)}>done</i>
                                <i className="material-icons" onClick={this.cancelEditMode.bind(this)}>close</i>
                            </div>
                            : <i className="material-icons" onClick={this.enterEditMode.bind(this)}>create</i>)
                    }
                </div>
                <div className="detail-title">{this.props.detail.title}</div>
                <div>
                    {this.state.editMode ?
                        <input type="number" value={this.state.detailValue} onChange={this.handleChange.bind(this)} />
                        : this.props.detail.displayWith ?
                            this.props.detail.displayWith(this.props.detail.value)
                            : this.props.detail.value}
                </div>
            </div>
        )
    }
}

export default connect(null, { saveDetail })(ChangeOrderDetailComponent);

