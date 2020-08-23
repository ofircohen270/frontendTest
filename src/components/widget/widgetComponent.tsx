import React, { FunctionComponent } from 'react'

import { Widget } from '../../types'

import './widget.scss'

/**
 * Represents one widget of Change order
 */
const WidgetComponent: FunctionComponent<{ widget: Widget }> = ({ widget }) => {

    return (
        <div className="widget">
            <div>
                <span className="widget-name">{widget.name}</span>
                <span className="widget-tag">{widget.tagName}</span>
            </div>
            <div className="widget-details">
                <span className="widget-detail">
                    {widget.numberOfPages} pages
                    </span>
                <span className="widget-detail">
                    {widget.sizeInMb} Mb
                    </span>
            </div>
        </div>
    )
}


export default WidgetComponent