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
[**Common**](common/README.md)   | [Package](https://www.npmjs.com/package/@ticketit/common) |  Reusable package that deals with common re-usable tools e.g(error handling, middlewares, etc..)
[**Client**](client/README.md)  | Application |  **React Client application** that interacts with all of these services. 

---

<br>

## 🧪 **Setup**

1. ###  **Tools Setup**
   One of the main prerequisists to run this architecture is having Docker, Kubernetes/ Kubectl, Skaffold, Node.js, ingress-nginx controller installed.
   1. [**Node.js installation**](https://nodejs.org/en/)  | My setup (v12.21.0)
   2. [**Docker installation**](https://docs.docker.com/docker-for-mac/release-notes/) | My setup (v20.10.5)
   3. [**Kubectl installation**](https://kubernetes.io/docs/tasks/tools/) | My setup (v1.19.7)
   4. [**Skaffold installation**](https://skaffold.dev/docs/install/) | My setup (v1.22.0)
   4. [**NGINX Ingress installation**](https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop) | My setup (v0.46.0)

   ---

<br>


2. ### **Service object**
   Create a Service object that exposes the deployment.

   ```lua
   kubectl expose deployment ingress-nginx --target-port=80 --type=NodePort -n kube-system
   ```
   ---   


<br>

2. ### **Setting up environment secrets**
   This cluster has two environment secrets that must be setup before running it ```jwt-secret``` and ```stripe-secret```, so activate your Kubernetes in your Docker environment if you didn't, and let's setup those secrets 🔒

   ---

   **```jwt-secret```** is for the authentication service.

   ```lua
   kubectl create secret generic jwt-secret --from-literal=JWT_KEY=ANYTHING
   ```

   **```stripe-secret```** is for the payment service

   ```lua
   create secret generic stripe-secret --from-literal STRIPE_KEY=YOUR_SECRET_KEY_GOES_HERE
   ```
## 🚀 **Run**

You cna create/ run the cluster locally or on mutliple providers, but to run it locally after the setup use can do so using skaffold, which will cause all the images to build:

```
skaffold dev
```
---

<div align="center">

**And that was it, Thanks for reading 🎉**

</div>