# **Knix Test**

---

## **a. Test Cases for the Product Page**

---

### **a-i. Prioritized Test Cases**

1. **Search for a product and ensure it returns relevant results.**
2. **Verify that the selected product from the product list page displays correctly on the product detail page (name, price, and image).**
3. **Ensure that selected product details (name, price, description) are displayed accurately in the "Your Bag" page.**
4. **Verify the functionality of the "Add to Bag" button. The selected product should be available in the "Your Bag" page.**
5. **Verify that the selected size for the product displays correctly in the "Your Bag" page.**
6. **Verify that the selected color of the product displays correctly in the "Your Bag" page.**
7. **Check that the "checkout" button leads to the "Payment" page.**
8. **Ensure that the customer can increase the product quantity by clicking the + button in the "Your Bag" page.**
9. **Ensure that the customer can decrease the product quantity by clicking the - button in the "Your Bag" page.**
10. **Verify Quick View in the product list page works as expected by giving options for Color and Size.**
11. **Verify that the product list switches to CAD currency when the user selects CAD at the bottom of the page.**
12. **Verify that the customer can add the product into the product basket from the Quick View window.**
13. **Verify all the links on the product list page correctly.**
14. **Check the responsiveness of the product page on different devices and screen sizes (e.g., desktop, tablet, mobile).**
15. **Ensure that navigation links (e.g., "Home," "Shop All," "New Arrivals") work correctly.**

---

### **a-ii. Test Cases Suitable for Automation and Why**

1. **Search for a product and ensure it returns relevant results.**

   - **Why**: Automated tests can simulate search queries and verify that the correct products are returned without manual intervention.

2. **Verify that the selected product from the product list page displays correctly on the product detail page (name and price)**

   - **Why**: Automated tests can compare the details of the selected product (name and price) on the list page with those on the detail page to ensure consistency.

3. **Ensure that selected product details (name and price) are displayed accurately in the "Your Bag" page**

   - **Why**: Automated tests can validate that the details match what was selected, ensuring accuracy in the shopping cart.

4. **Verify the functionality of the "Add to Bag" button. The selected product should be available in the "Your Bag" page**

   - **Why**: Automated tests can click the button and verify that the product appears in the cart, simulating user actions.

5. **Verify that the selected size for the product displays correctly in the "Your Bag" page**

   - **Why**: Automated tests can ensure that the correct size is displayed, reducing the risk of user errors.

6. **Verify that the selected color of the product displays correctly in the "Your Bag" page**

   - **Why**: Automated tests can check the selected color, ensuring the correct item is added to the cart.

7. **Check that the "checkout" button leads to the "Payment" page**

   - **Why**: Automated tests can verify navigation to the correct page, ensuring a smooth checkout process.

8. **Ensure that the customer can increase the product quantity by clicking the + button in the shopping cart or product basket page**

   - **Why**: Automated tests can simulate quantity changes and verify the results, ensuring functionality.

9. **Ensure that the customer can decrease the product quantity by clicking the - button in the shopping cart or product basket page**

   - **Why**: Automated tests can simulate quantity reductions and verify the results, ensuring functionality.

10. **Verify Quick View in the product list page works as expected by giving options for Color and Size**

    - **Why**: Automated tests can ensure that the Quick View functionality works correctly, enhancing user experience.

11. **Verify that the product list switches to CAD currency when the user selects CAD at the bottom of the page**

    - **Why**: Automated tests can verify currency changes, ensuring accurate pricing.

12. **Verify that the customer can add the product into the product basket from the Quick View window**

    - **Why**: Automated tests can verify that products can be added from Quick View, ensuring functionality.

13. **Ensure that navigation links (e.g., "Home," "Shop All," "New Arrivals") work correctly**
    - **Why**: Automated tests can verify that navigation links lead to the correct pages.

---

### **b. Prioritize Automated Test Cases**

#### **Following test cases can be automated:**

1. **Search**: Search for a product and ensure it returns relevant results.

   - **Why**: Automated tests can simulate search queries and verify that the correct products are returned without manual intervention.

2. **Product Detail Page**: Verify that the selected product from the product list page displays correctly on the product detail page (name and price)
   - **Why**: Automated tests can compare the details of the selected product (name and price) on the list page with those on the detail page to ensure consistency.
3. **Product Basket**: Ensure that selected product details (name and price) are displayed accurately in the "Your Bag" page
   - **Why**: Automated tests can validate that the details match what was selected, ensuring accuracy in the shopping cart.
4. **Quantity in Product Basket**: Ensure that the customer can increase the product quantity by clicking the + button in the shopping cart or product basket page
   - **Why**: Automated tests can simulate quantity changes and verify the results, ensuring functionality.
5. **Quick View Window**: Verify that the customer can add the product into the product basket from the Quick View window
   - **Why**: Automated tests can verify that products can be added from Quick View, ensuring functionality.
6. **Currency**: Verify that the product list switches to CAD currency when the user selects CAD at the bottom of the page

   - **Why**: Automated tests can verify currency changes, ensuring accurate pricing.

7. **Payment Page**: Check that the "checkout" button leads to the "Payment" page
   - **Why**: Automated tests can verify navigation to the correct page, ensuring a smooth checkout process.

---

### **The selected tool for the Test Automation is Nightwatch.js**

Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers. It is written in Node.js and uses the W3C WebDriver API to interact with various browsers. It is a complete solution for end-to-end and cross-browser testing. It aims to simplify the process of writing and running various types of tests, including:

- End-to-end tests on all major web browsers
- Unit tests of Node.js services
- Integration tests of HTTP APIs
- Verify that the product page loads successfully.

---

## **c. Bug Report and Prioritization**

### **Bug Report:**

- **Title**: Slow Page Load Time
- **Description**: The product page takes longer than 3 seconds to load, impacting user experience.
- **Priority**: High
- **Steps to Reproduce**: Visit the product page and measure the load time.
- **Expected Result**: The product page should load within 3 seconds.
- **Actual Result**: The product page takes 5 seconds to load.
- **Severity**: High (Affects user experience and can lead to higher bounce rates)
