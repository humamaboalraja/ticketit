# **Ticketit - Tickets/ Products**
Tickets/ Products service (CRU - Create, Read, Update) features

![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/humam/tickets?color=0db7ed&label=%F0%9F%90%B3%20Docker%20image%20size&style=flat-square)

<br>

# 1. Service endpoints
The following table refers to this service endpoints

| Route | Method | Body | Porpose |
|----|-----|----------|--------------|
**/api/tickets**      |  GET | - | Retrieving all items|
**/api/tickets/:id**      |  GET | - | Retrieving an items with a specific ID|
**/api/tickets**      |  POST | { title: string, price: string} | Creating an item|
**/api/tickets**      |  PUT | { title: string, price: string} | Updating an item|


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