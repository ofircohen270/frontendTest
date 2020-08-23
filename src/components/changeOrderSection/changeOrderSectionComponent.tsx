import React, { useState, FunctionComponent } from 'react'

import { ChangeOrderSection } from '../../types'
import ChangeOrderDetailComponent from '../changeOrderDetail/changeOrderDetailComponent'

import './changeOrderSection.scss'

/**
 * Represents one section of Change order. Each section contains details
 */
const ChangeOrderSectionComponent: FunctionComponent<{ section: ChangeOrderSection }> = ({ section }) => {
    const [folded, setFolded] = useState<boolean>(false)

    const fold = () => setFolded(true)
    const unfold = () => setFolded(false)

    return (
        <div>
            <div className="section-title">
                {
                    folded ?
                        <i className="material-icons fold-icon" onClick={unfold}>keyboard_arrow_up</i>
                        : <i className="material-icons fold-icon" onClick={fold}>keyboard_arrow_down</i>
                }
                {section.title}
            </div>
            {
                !folded && (
                    <div className="flex-layout">
                        {section.details.map((detail, key) => (
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


export default ChangeOrderSectionComponent