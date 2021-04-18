import { useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/use-request';

export default () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { doRequest, errors } = useRequest({
      url: '/api/users/signup',
      method: 'post',
      body: {
         email, password
      }
   });

   const onSubmit = async event => {
      event.preventDefault();
      doRequest();
}

   return (
   <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
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
   )
}