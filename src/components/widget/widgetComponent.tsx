import React from 'react'

import { Widget } from '../../types'

import './widget.scss'

type Props = {
    widget: Widget
}


/**
 * Represents one widget of Change order
 */
class WidgetComponent extends React.Component<Props> {

    render() {
        return (
            <div className="widget">
                <div>
                    <span className="widget-name">{this.props.widget.name}</span>
                    <span className="widget-tag">{this.props.widget.tagName}</span>
                </div>
                <div className="widget-details">
                    <span className="widget-detail">
                        {this.props.widget.numberOfPages} pages
                    </span>
                    <span className="widget-detail">
                        {this.props.widget.sizeInMb} Mb
                    </span>
                </div>
            </div>
        )
    }
}


export default WidgetComponent