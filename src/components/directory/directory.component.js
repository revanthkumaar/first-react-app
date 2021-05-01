import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

//class component

class Directory extends React.Component{

    constructor(){

        super();

       
       

    }

    render(){
        return(

         <div className="directory-menu">
        
        { this.state.sections.map(({title}) => (
             <MenuItem title={title}/>
         ))
        }
 
         </div>

        )
    }


}

export default Directory;