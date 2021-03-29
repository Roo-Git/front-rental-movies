import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'



function ProfileScreen(props) {

    let history = useHistory();


    const home = () => {
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    return (
        <div className="profileComponent">
            <Header onClick={() => home()} />
            <div className="profileBody">
                Email: {props.user.email}<br></br>
                Password: ******
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

export default connect(mapStateToProps)(ProfileScreen);
