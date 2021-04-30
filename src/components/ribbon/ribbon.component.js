import React from 'react';
import {Link} from 'react-router-dom'
import './ribbon.styles.scss'

import {ReactComponent as Logo} from '../../assets/logo.svg'

const Ribbon = () => (
    <div className='ribbon'>

    <Link to="/">
        <Logo className='logo'/>
    </Link>

    

    </div>

)

export default Ribbon;
