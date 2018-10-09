import React, { Component } from 'react';
import DetailUser from './DetailUser';

class MainContent extends Component {
    
    render() {
        // console.log("maincontent");console.log(this.props.img);
        const alluser = this.props.user.map(user=>(
            <div key={user._id}  className="col-4">
                <DetailUser user={user} />
            </div>
        ));
        return (
            <div className="container">
                <div className="row">
                    {alluser}
                </div>
            </div>
        )
    }
}
export default MainContent;