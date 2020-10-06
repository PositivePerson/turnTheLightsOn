import React from 'react';


const ProfileButtons = () => {
    return (
        <div className="d-flex">
            <a href="https://www.linkedin.com/in/bartosz-galaszewicz/">
                <button className="btn waves-effect waves-light mx-2" style={constWidth} name="action">Linkedin
            <i className="fab fa-linkedin" style={{ "marginLeft": "15px" }}></i>
                </button>
            </a>
            <a href="https://github.com/PositivePerson">
                <button className="btn waves-effect waves-light mx-2" style={constWidth} name="action">Github
            <i className="fab fa-github-square" style={{ "marginLeft": "15px" }}></i>
                </button>
            </a>
            <button className="btn waves-effect waves-light mx-2 disabled" style={constWidth} name="action">Portfolio
            <i className="fab fa-wpforms" style={{ "marginLeft": "15px" }}></i>
            </button>
        </div>
    )
}

const constWidth = {
    width: "10em"
}

export default ProfileButtons
