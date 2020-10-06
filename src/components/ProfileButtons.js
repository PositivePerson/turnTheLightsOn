import React from 'react';


const ProfileButtons = () => {
    return (
        <div className="d-flex">
            <button className="btn waves-effect waves-light mx-2" style={constWidth} type="submit" name="action">Linkedin
            <i className="fab fa-linkedin" style={{ "marginLeft": "15px" }}></i>
            </button>
            <button className="btn waves-effect waves-light mx-2" style={constWidth} type="submit" name="action">Github
            <i className="fab fa-github-square" style={{ "marginLeft": "15px" }}></i>
            </button>
            <button className="btn waves-effect waves-light mx-2 disabled" style={constWidth} type="submit" name="action">Portfolio
            <i className="fab fa-wpforms" style={{ "marginLeft": "15px" }}></i>
            </button>
        </div>
    )
}

const constWidth = {
    width: "10em"
}

export default ProfileButtons
