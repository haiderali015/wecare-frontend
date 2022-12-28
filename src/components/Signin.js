import React from 'react'

const Signin = () => {
  return (
    
    <>
        <div className="signupimage">
        <div className='signin_contents'>
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                <h1 className="text-center login-title" style={{ fontFamily: "Lucida Handwriting", textDecoration: "none" }}>Sign in to continue to <span style={{ color:"white", fontWeight: 'bold' }}>We</span><span style={{ fontWeight: 'bold' }}>Care</span></h1>
                <div className="account-wall">
                    <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt=""/>
                    <form className="form-signin">
                    <input type="text" className="form-control" placeholder="Email" required autofocus/>
                    <input type="password" className="form-control" placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Sign in</button>
                    <label className="checkbox pull-left">
                        <input type="checkbox" value="remember-me"/>
                        Remember me
                    </label>
                    <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                    </form>
                </div>
                <a href="#" className="text-center new-account">Create an account </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin