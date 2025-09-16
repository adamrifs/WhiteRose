import React from 'react'
import '../css/Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe-container'>
            <div className="subscribe-head">
                <h2>Subscribe</h2>
                <p>Sign up to get the latest on sales, new releases and more …</p>
            </div>
            <div className="subscribe-inp">
                <div className="inp">
                    <input type='text' placeholder='Email' />
                </div>
                <div className="btn">
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe