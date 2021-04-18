export default () => {
   return <form>
      <h1>Sign up</h1>
      <div className="form-group">
         <label>E-mail Adress:</label>
         <input type="text" name="email" className="form-control" placeholder="E.g humam@ticketit.com"/>
      </div>
      <div className="form-group">
         <label>Password:</label>
         <input type="password" name="password" className="form-control" placeholder="Your Password"/>
      </div>
      <button className="btn btn-primary">Sign Up</button>
   </form>
}