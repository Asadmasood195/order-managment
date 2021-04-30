// import React, { useEffect } from 'react'
import './login.scss'
import React, { Component } from 'react'
export default class Login extends Component {

    working = () => {
        var head = document.getElementsByTagName('head')[0]
        var script = document.createElement('script')
        script.defer = 1
        script.src = "resources/login.js"
        // script.src = ""

        head.appendChild(script)
    }

    componentDidMount = () => {
        this.working()
    }
    signUpUser = (e) => {
        e.preventDefault()
        this.props.history.push("/dashboard")
    }
    loginUser = (e) => {
        e.preventDefault()
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div className='parent_login'>
                <div class="form-structor">
                    <form onSubmit={this.signUpUser} >
                        <div class="signup">
                            <h2 class="form-title" id="signup"><span>or</span>Sign up</h2>
                            <div class="form-holder">
                                <input type="text" class="input" placeholder="Name" />
                                <input type="email" class="input" placeholder="Email" />
                                <input type="password" class="input" placeholder="Password" />
                            </div>
                            <button type='submit' class="submit-btn">Sign up</button>
                        </div>
                    </form>
                    <form onSubmit={this.loginUser} >
                        <div class="login slide-up">
                            <div class="center">
                                <h2 class="form-title" id="login"><span>or</span>Log in</h2>
                                <div class="form-holder">
                                    <input type="email" class="input" placeholder="Email" />
                                    <input type="password" class="input" placeholder="Password" />
                                </div>
                                <button type='submit' class="submit-btn">Log in</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <AdsensComponent /> */}
            </div>
        )
    }
}
