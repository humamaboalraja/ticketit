# **Ticketit - Tickets/ Products**
Tickets/ Products service (CRU - Create, Read, Update) features


<br>

# 1. Service endpoints
The following table refers to this service endpoints

| Route | Method | Body | Porpose |
|----|-----|----------|--------------|
**/api/tickets**      |  GET | - | Retrieving all items|
**/api/tickets/:id**      |  GET | - | Retrieving an items with a spesific ID|
**/api/tickets**      |  POST | { title: string, price: string} | Createing an item|
**/api/tickets**      |  PUT | { title: string, price: string} | Updating an item|


---

<br> <br>

# 2. Tests



**Status** | File name/ Endpoint|
-------|-----------|
 ✅ **PASS** |  src/routes/__test__/new.test.ts
 ✅ **PASS** |  src/routes/__test__/current-user.test.ts
 ✅ **PASS** |  src/routes/__test__/signup.test.ts
 ✅ **PASS** |  src/routes/__test__/signin.test.ts

<br>

Stats        | Results
-------------|---------
Test Suites: | 4 passed, 4 total
Tests:       | 11 passed, 11 total
Snapshots:   | 0 total
Time:        | 5.757 s

---

<div align="center">

## Ran all test suites 🎉

</div>