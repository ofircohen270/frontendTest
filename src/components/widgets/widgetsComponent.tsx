import React, { FunctionComponent, useState } from 'react'

import { Widget } from '../../types'
import WidgetComponent from '../widget/widgetComponent'

import './widgets.scss'

/**
 * Contains the widgest of the Check Order
 */
const WidgetsComponent: FunctionComponent<{ widgets: Widget[] }> = ({ widgets }) => {

    const [folded, setFolded] = useState<boolean>(false)

    const fold = () => setFolded(true)
    const unfold = () => setFolded(false)

    return (
        <div>
            <div className={"widgets-content " + (folded ? "folded" : "unfolded")}>
                <div className="widgets-title">
                    <i className="material-icons">folder_open</i>
                        Reference
                        {
                        folded ?
                            <i className="material-icons widgets-fold-icon" onClick={unfold}>keyboard_arrow_down</i>
                            : <i className="material-icons widgets-fold-icon" onClick={fold}>keyboard_arrow_up</i>
                    }
                </div>
                {!folded && widgets && (
                    <div>
                        {widgets.map((widget: Widget, key: number) => (
                            <WidgetComponent {...{ widget, key }}></WidgetComponent>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}


export default WidgetsComponent