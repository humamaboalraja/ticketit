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
 ✅ **PASS** |  src/events/listeners/__test__/ticket-created-listener.test.ts
 ✅ **PASS** |  src/events/listeners/__test__/ticket-updated-listener.test.ts
 ✅ **PASS** |  src/events/listeners/__test__/expiration-complete-listener.test.ts

<br>

Stats        | Results
-------------|---------
Test Suites: | 7 passed, 7 total
Tests:       | 17 passed, 17 total
Snapshots:   | 0 total
Time:        | 1.757 s

---

<div align="center">

## Ran all test suites 🎉

</div>


