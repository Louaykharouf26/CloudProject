import './Auth.css'
//import App from '../../Todo-App-Front/src/App'
import App from './App';
function SignUp()
{
  return (
   <>
   <App></App>
   <p className="typewriter">To access to the application ! Please Sign Up to your Account !</p>
   <div className="signbx">
   <div className="row mb-3">
   <div className="col-md-6">
   <input id="name" placeholder="Name" type="text" className="form-control " name="name"  required ></input>
   </div>
   </div>
   <div className="row mb-3">

<div className="col-md-6">
    <input id="email" placeholder="Email Address" type="email" className="form-control " name="email"  required ></input>
</div>
</div>         

<div className="row mb-3">

<div className="col-md-6">
<input id="password" placeholder="Password" type="password" className="form-control" name="password" required ></input>
</div>
</div>
<div className="row mb-0">
                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary register ">
                                    Register
                                </button>
                            </div>
                        </div>
</div>

   </>
  )
}
export default SignUp;