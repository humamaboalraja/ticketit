# **Ticketit - Auth**
Authentication system (Signup, Signin, Signout, Userdata) features

![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/humam/auth?color=0db7ed&label=%F0%9F%90%B3%20Docker%20image%20size&style=flat-square)

<br>

# 1. Service endpoints
The following table refers to this service endpoints

| Route | Method | Body | Porpose |
|----|-----|----------|--------------|
**/api/users/signup**      |  Post | { email: string, password: string } | Sign up for an account|
**/api/users/signin**      |  Post | { email: string, password: string } | Sign into an existing account|
**/api/users/signout**      |  Post | { } | Sign out|
**/api/users/currentuser**      |  Get | - | Return some details about the user|


---

<br> <br>

# 2. Tests



**Status** | File name/ Endpoint|
-------|-----------|
 ✅ **PASS** |  src/routes/__test__/signout.test.ts
 ✅ **PASS** |  src/routes/__test__/current-user.test.ts
 ✅ **PASS** |  src/routes/__test__/signup.test.ts
 ✅ **PASS** |  src/routes/__test__/signin.test.ts

<br>

Stats        | Results
-------------|---------
Test Suites: | 4 passed, 4 total
Tests:       | 12 passed, 12 total
Snapshots:   | 0 total
Time:        | 8.192 s

---

<div align="center">

## Ran all test suites 🎉

</div>