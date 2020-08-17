import React from 'react'
import { connect } from 'react-redux'

import Button from '../button/buttonComponent'
import WidgetsComponent from '../widgets/widgetsComponent'
import ChangeOrderSectionComponent from '../changeOrderSection/changeOrderSectionComponent'

import { fetchChangeOrder } from '../../actions'
import { ChangeOrder, ChangeOrderSection } from '../../types'

import './changeOrder.scss'
import { separateNumberWithCommas } from '../../utils'

type Props = {
    changeOrder: ChangeOrder
    fetchChangeOrder: () => {},
}

type State = {
    sections: ChangeOrderSection[]
}

class ChangeOrderComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { sections: [] }
    }

    componentDidMount() {
        this.props.fetchChangeOrder()
    }

    /**
     * Updates the 'sections' in the state when the props changes by dividing the details of the 
     * Change Order to different sections
     * @param props 
     */
    static getDerivedStateFromProps(props: Props) {
        return {
            sections: [
                {
                    title: "Schedule Impact",
                    details: [
                        {
                            title: "devision Code",
                            key: "devisionCode",
                            value: props.changeOrder.devisionCode,
                            editable: false
                        },
                        {
                            title: "devision Code",
                            key: "devisionCode",
                            value: props.changeOrder.devisionCode,
                            editable: false
                        },
                        {
                            title: "devision Code",
                            key: "devisionCode",
                            value: props.changeOrder.devisionCode,
                            editable: false
                        },
                        {
                            title: "number of days",
                            key: "numberOfDays",
                            value: props.changeOrder.numberOfDays,
                            editable: true
                        },
                        {
                            title: "cost of impact",
                            key: "costOfImpact",
                            value: props.changeOrder.costOfImpact,
                            editable: true,
                            displayWith: separateNumberWithCommas
                        }
                    ]
                },
                {
                    title: "Schedule Impact",
                    details: [
                        {
                            title: "submitted cost",
                            key: "submittedCost",
                            value: props.changeOrder.submittedCost,
                            editable: true,
                            displayWith: separateNumberWithCommas
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="main-content">
                    <h1>Details of Change Order</h1>

                    {this.state.sections.map((section, key) => (
                        <ChangeOrderSectionComponent {...{ section, key }}></ChangeOrderSectionComponent>
                    ))}

                    <div className="bottom-buttons">
                        <Button>
                            <i className="material-icons">arrow_back</i>
                            Previous
                        </Button>
                        <Button>
                            Next
                            <i className="material-icons">arrow_forward</i>
                        </Button>
                    </div>
                </div>

                <div className="sidebar">
                    <WidgetsComponent widgets={this.props.changeOrder.widgets}></WidgetsComponent>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        changeOrder: state.changeOrder
    }
}

export default connect(mapStateToProps, { fetchChangeOrder })(ChangeOrderComponent);