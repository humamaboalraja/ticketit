import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { doRequest, errors } = useRequest({
      url: '/api/users/signup',
      method: 'post',
      body: {
         email, password
      },
      onSuccess: () => Router.push('/')
   });

   const onSubmit = async event => {
      event.preventDefault();

      await doRequest();
}

   return (
      <div className="centered container">
         <div className="col-lg-5">
         <h1 className="text-center">Sign up ❤️</h1>
         <br />
         <div className="card">
            <div className="card-body">
            <form onSubmit={onSubmit}>
               <div className="form-group">
                  <label>E-mail Adress:</label>
                  <input 
                     value={email} 
                     onChange={ e => setEmail(e.target.value)} 
                     type="text" 
                     name="email" 
                     className="form-control" 
                     placeholder="E.g humam@ticketit.com"
                  />
               </div>
               <div className="form-group">
                  <label>Password:</label>
                  <input 
                     value={password}
                     onChange={ e => setPassword(e.target.value)}
                     type="password" 
                     name="password" 
                     className="form-control" 
                     placeholder="Your Password"
                  />
               </div>
               {errors}
               <button className="btn btn-dark btn-block">Sign Up</button>
            </form>
            </div>
         </div>
         </div>
      </div>
   )
}