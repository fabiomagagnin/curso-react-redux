import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import selectTab from './tabActions'

export default props => (
    <div className='nav nav-tabs'>
        {props.children}
    </div>
)