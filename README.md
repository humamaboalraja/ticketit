![](.github_assets/cover.jpg)


The aim of this project is to build an e-commerce microservices architecutre ticket for exchanging and resaling tickets/ Products 💈

---

<br>



## 🏛 **Architecture**
Application Architecture/ Components

![](.github_assets/Architecture.jpg)



---

<br>

## 💎 **Repository structure**
- The architecutre consists of five **microservices**.
- The source code of each **microservice** resides in its own sub-directory, which is named after the microservice.
- **React Client application** that interacts with all of these services. 
- Reusable package that deals with common re-usable tools e.g(error handling, middlewares, etc..)



Overview of the application services

| Service | Type | Description |
----------|-----|------------|
[**Auth**](auth/README.md)  | Microservice |    Authentication functionalities
[**Tickets**](tickets/README.md)   | Microservice |  Tickets functionalities
**Orders**    | Microservice |  Order functionalities
**Expiration** | Microservice |  Orders cancellation system
**Payments**   | Microservice |  Payments functionalities
[**Common**](https://www.npmjs.com/package/@ticketit/common)   | Package |  Reusable package that deals with common re-usable tools e.g(error handling, middlewares, etc..)
[**Client**](client/README.md)  | Application |  **React Client application** that interacts with all of these services. 

---

<br>

## 🧪 **Setup**
- The architecutre consists of five **microservices**.
- The source code of each **microservice** resides in its own sub-directory, which is named after the microservice.
- **React Client application** that interacts with all of these services. 
- Reusable package that deals with common re-usable tools e.g(error handling, middlewares, etc..)
