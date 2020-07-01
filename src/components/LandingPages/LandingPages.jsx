
import React, { Component } from 'react'
import StudentInfo from '../StudentInfo/StudentInfo.js'
import image from '../Images/Heading.png'


//class component
class LandingPages extends Component {
    state = {
        name:'Geraldo Sepdwijaya',
        avatar:image,
        address:'Kp Bojong Binong No.114'
    }

    render() {
        return (
            <div>
                <StudentInfo avatar={this.state.avatar} name={this.state.name} address={this.state.address}/>
            </div>
        )
    }
}

export default LandingPages;