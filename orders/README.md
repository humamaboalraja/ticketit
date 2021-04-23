# **Ticketit - Orders**
Orders service (CRU - Create, Read, Delete) features


<br>

# 1. Service endpoints
The following table refers to this service endpoints

| Route | Method | Body | Porpose |
|----|-----|----------|--------------|
**/api/orders**      |  GET | - | Retrieving all active orders for the given user makign the request|
**/api/orders/:id**      |  GET | - | Get details about specific order|
**/api/orders**      |  POST | { ticketID: string} | Create and order to purchase the specified ticket|
**/api/orders**      |  DELETE | - | Cancel and order|


---

<br> <br>

# 2. Tests



**Status** | File name/ Endpoint|
-------|-----------|
 ✅ **PASS** |  src/routes/__test__/show.test.ts
 ✅ **PASS** |  src/routes/__test__/new.test.ts
 ✅ **PASS** |  src/routes/__test__/update.test.ts
 ✅ **PASS** |  src/routes/__test__/index.test.ts

<br>

Stats        | Results
-------------|---------
Test Suites: | 4 passed, 4 total
Tests:       | 14 passed, 14 total
Snapshots:   | 0 total
Time:        | 30.757 s

---

<div align="center">

## Ran all test suites 🎉

</div>