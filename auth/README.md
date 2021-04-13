# **Ticketit - Auth**
Authentication system (Signup, Signin, Signout, Userdata) features


<br>

# 1. Service endpoints
The following table refers to this service endpoints

| Route | Method | Body | Porpose |
|----|-----|----------|--------------|
**/api/users/signup**      |  Post | { email: string, password: string } | Sign up for an account|
**/api/users/signin**      |  Post | { email: string, password: string } | Sign into an existing account|
**/api/users/signout**      |  Post | { } | Sign out|
**/api/users/currentuser**      |  Get | - | Return some details about the user|