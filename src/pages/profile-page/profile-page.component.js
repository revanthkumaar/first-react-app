import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import PROFILE_INFO from './profile-data'

//class component

class ProfilePage extends React.Component{

    constructor(){

        super();

        this.state = {

           employeeData: PROFILE_INFO


        }

    }

    render(){
        return(

            <div>Profile Data</div>

        )
    }


}

export default ProfilePage;