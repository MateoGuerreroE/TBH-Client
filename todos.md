# Pendings

Here lays a list of the general steps for completition of the website

## Steps

### Stage 1 (Metting 10 APR)

1. Create product page visualization
2. STOP - Enhancements
   - Complete all TODOs up to this point
   - Enhance & clean code base -> Reuse logic, create variables for regexp, clean components
3. Investigate automated connection from web products to ML API.

### Stage 2 (Meeting 20 APR)

1. Finish & clean product page with all product list
2. Create filters on product pages and include native searchbar (aim this to connect with main SB)
3. Create Us & Contact pages
4. Connect product & cart adding
5. Create checkout page
6. Connect Checkout payment with ML Dev API

### Stage 3

... Will be developed based on discussions of meetings, etc

## Notes

### General TODOS/ Important pendings:

- Switch login/register to a separate component for external login. Mobile needs to be handled by `signInWithRedirect` and have global/localStorage persistence to fetch result & continue. Desktop is handled as It's now, with `signInWithPopUp`
- Have initial carousel with MS that can be adjusted at dashboard

### Desireable:

- Connection to ML API for product refresh -> Centralizes operation. This can be done also from an airtable and create automation tool to webpage + ML API.
- Metrics & report generation -> Base Metrics using DB values + AI reports using products to create Data analysis like best product, tips, etc.

## CONSIDER:

- Use React Query to minimize fetching on client (mostly boilerplate code as It just does the same)
- REFACTOR AND CLEAN! So I can keep moving. Feels messy.
