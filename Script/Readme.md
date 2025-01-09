

### **Beginner**

1. **Add two numbers using the `+` operator**:
   ```javascript
   let num1 = 5;
   let num2 = 7;
   let result = num1 + num2;
   console.log("The sum is:", result);
   ```

2. **Check if a number is even or odd using the modulus operator (`%`)**:
   ```javascript
   let number = 10;
   if (number % 2 === 0) {
       console.log(`${number} is even`);
   } else {
       console.log(`${number} is odd`);
   }
   ```

3. **Assign a value to a variable and update it using `+=`**:
   ```javascript
   let value = 10;
   value += 5;
   console.log("Updated value:", value);
   ```

---

### **Intermediate**

1. **Compare two numbers and log the larger one**:
   ```javascript
   let a = 15;
   let b = 20;
   if (a > b) {
       console.log("The larger number is:", a);
   } else {
       console.log("The larger number is:", b);
   }
   ```

2. **Validate if a user is logged in and has admin rights using the `&&` operator**:
   ```javascript
   let isLoggedIn = true;
   let isAdmin = false;
   if (isLoggedIn && isAdmin) {
       console.log("User has admin access");
   } else {
       console.log("Access denied");
   }
   ```

3. **Calculate the square of a number using the exponentiation operator (`**`)**:
   ```javascript
   let number = 4;
   let square = number ** 2;
   console.log(`The square of ${number} is:`, square);
   ```

---

### **Advanced**

1. **Calculate the total price of items in a cart using a loop**:
   ```javascript
   let cart = [10.5, 20.99, 5.0, 12.3];
   let totalPrice = 0;
   for (let price of cart) {
       totalPrice += price;
   }
   console.log("Total price of items in the cart:", totalPrice);
   ```

2. **Check if a person is eligible to vote based on age using the ternary operator**:
   ```javascript
   let age = 17;
   let message = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
   console.log(message);
   ```

3. **Function to check if two arguments are numbers and greater than 10**:
   ```javascript
   function checkNumbers(num1, num2) {
       return typeof num1 === "number" && typeof num2 === "number" && num1 > 10 && num2 > 10;
   }

   console.log(checkNumbers(15, 20)); // true
   console.log(checkNumbers(5, 20));  // false
   ```

4. **Filter out users based on multiple criteria**:
   ```javascript
   let users = [
       { name: "Alice", age: 25, subscribed: true },
       { name: "Bob", age: 17, subscribed: false },
       { name: "Charlie", age: 30, subscribed: true },
   ];

   let eligibleUsers = users.filter(user => user.age >= 18 && user.subscribed);
   console.log("Eligible users:", eligibleUsers);
   ```

### **Basic**
1. **Function to calculate the area of a rectangle**:
   ```javascript
   function areaOfRectangle(length, width) {
       return length * width;
   }
   console.log("Area:", areaOfRectangle(5, 3)); // Output: 15
   ```

2. **Function to convert Celsius to Fahrenheit**:
   ```javascript
   function celsiusToFahrenheit(celsius) {
       return celsius * 9 / 5 + 32;
   }
   console.log("Fahrenheit:", celsiusToFahrenheit(25)); // Output: 77
   

### **Intermediate**
1. **Calculate total cost including tax**:
   ```javascript
   function calculateTotal(cartItems, taxRate = 0.08) {
       let subtotal = cartItems.reduce((acc, item) => acc + item, 0);
       let total = subtotal + (subtotal * taxRate);
       return total;
   }
   console.log("Total cost:", calculateTotal([10, 20, 30])); // Output: 64.8
   ```

2. **Calculate final amount after discount**:
   ```javascript
   function applyDiscount(originalPrice, discountPercentage) {
       let discount = originalPrice * (discountPercentage / 100);
       return originalPrice - discount;
   }
   console.log("Final price:", applyDiscount(100, 20)); // Output: 80
   ```

3. **Calculate average test score and determine pass/fail**:
   ```javascript
   function averageAndPass(score1, score2, score3) {
       let average = (score1 + score2 + score3) / 3;
       let passed = average >= 70;
       return { average, passed };
   }
   let result = averageAndPass(75, 80, 65);
   console.log(`Average: ${result.average}, Passed: ${result.passed}`); // Output: Average: 73.33, Passed: true
   ```

---

### **Advanced**
1. **Compound interest calculation**:
   ```javascript
   function compoundInterest(principal, rate, years) {
       return principal * Math.pow((1 + rate), years);
   }
   console.log("Compound interest:", compoundInterest(1000, 0.05, 5)); // Output: 1276.28
   ```

2. **Split bill among friends including tip**:
   ```javascript
   function splitBill(totalAmount, numFriends, tipPercentage) {
       let totalWithTip = totalAmount + (totalAmount * tipPercentage / 100);
       let perPerson = (totalWithTip / numFriends).toFixed(2);
       return perPerson;
   }
   console.log("Each person's share:", splitBill(100, 4, 15)); // Output: 28.75
   ```

3. **Calculate total points in a game**:
   ```javascript
   function totalPoints(wins, draws, losses) {
       return (wins * 3) + (draws * 1) + (losses * 0);
   }
   console.log("Total points:", totalPoints(10, 5, 3)); // Output: 35
   ```

---

### **Challenge**
1. **Calculate factorial using a loop**:
   ```javascript
   function factorial(n) {
       let result = 1;
       for (let i = 1; i <= n; i++) {
           result *= i;
       }
       return result;
   }
   console.log("Factorial:", factorial(5)); // Output: 120
   ```

2. **Simulate a simple bank account**:
   ```javascript
   class BankAccount {
       constructor(balance = 0) {
           this.balance = balance;
       }

       deposit(amount) {
           this.balance += amount;
           console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
       }

       withdraw(amount) {
           if (amount > this.balance) {
               console.log("Insufficient funds!");
           } else {
               this.balance -= amount;
               console.log(`Withdrawn: ${amount}. New Balance: ${this.balance}`);
           }
       }

       calculateInterest(rate, years) {
           return this.balance * Math.pow((1 + rate), years);
       }
   }

   const account = new BankAccount(1000);
   account.deposit(500);  // Deposited: 500. New Balance: 1500
   account.withdraw(300); // Withdrawn: 300. New Balance: 1200
   console.log("Balance after interest:", account.calculateInterest(0.05, 2)); // Output: 1323
   ```

### **Basic**
1. **Check if a user is old enough to vote (18 or older)**:
   ```javascript
   function canVote(age) {
       return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
   }
   console.log(canVote(20)); // Output: Eligible to vote
   console.log(canVote(16)); // Output: Not eligible to vote
   ```

2. **Check if a password is strong enough (at least 8 characters)**:
   ```javascript
   function isPasswordStrong(password) {
       return password.length >= 8;
   }
   console.log(isPasswordStrong("password123")); // Output: true
   console.log(isPasswordStrong("pass"));        // Output: false
   ```

---

### **Intermediate**
1. **Check if a number is between two values (inclusive)**:
   ```javascript
   function isNumberInRange(num, min, max) {
       return num >= min && num <= max;
   }
   console.log(isNumberInRange(10, 5, 15)); // Output: true
   console.log(isNumberInRange(20, 5, 15)); // Output: false
   ```

2. **Check if a user can proceed with checkout**:
   ```javascript
   function canCheckout(cartItems, hasValidPayment) {
       return cartItems.length > 0 && hasValidPayment;
   }
   console.log(canCheckout([1, 2, 3], true)); // Output: true
   console.log(canCheckout([], true));       // Output: false
   ```

3. **Return different shipping costs based on location using ternary operators**:
   ```javascript
   function getShippingCost(location) {
       return location === "domestic" 
           ? 5 
           : location === "international" 
           ? 15 
           : 0;
   }
   console.log(getShippingCost("domestic"));      // Output: 5
   console.log(getShippingCost("international")); // Output: 15
   console.log(getShippingCost("unknown"));       // Output: 0
   ```

---

### **Advanced**
1. **Validate a form (required fields must be filled, email must be valid)**:
   ```javascript
   function validateForm(formData) {
       const { name, email } = formData;
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return name && email && emailRegex.test(email);
   }
   console.log(validateForm({ name: "John", email: "john@example.com" })); // Output: true
   console.log(validateForm({ name: "", email: "john@example.com" }));    // Output: false
   ```

2. **Check if a date is a weekend OR holiday**:
   ```javascript
   function isOvertime(date, holidays = []) {
       const day = new Date(date).getDay();
       const isWeekend = day === 0 || day === 6;
       const isHoliday = holidays.includes(date);
       return isWeekend || isHoliday;
   }
   console.log(isOvertime("2025-01-11", ["2025-01-01"])); // Output: true (Weekend)
   console.log(isOvertime("2025-01-01", ["2025-01-01"])); // Output: true (Holiday)
   ```

3. **User access control function**:
   ```javascript
   function hasAccess(user) {
       const { level, subscription, accountStatus } = user;
       return level === "admin" && subscription === "active" && accountStatus === "verified";
   }
   console.log(hasAccess({ level: "admin", subscription: "active", accountStatus: "verified" })); // Output: true
   console.log(hasAccess({ level: "user", subscription: "active", accountStatus: "verified" }));  // Output: false
   ```

---

### **Challenge**
1. **Traffic light system using nested ternary operators**:
   ```javascript
   function nextTrafficLight(current) {
       return current === "red" 
           ? "green" 
           : current === "green" 
           ? "yellow" 
           : "red";
   }
   console.log(nextTrafficLight("red"));    // Output: green
   console.log(nextTrafficLight("green"));  // Output: yellow
   console.log(nextTrafficLight("yellow")); // Output: red
   ```

2. **Password validation with multiple criteria**:
   ```javascript
   function validatePassword(password) {
       const hasUpperCase = /[A-Z]/.test(password);
       const hasLowerCase = /[a-z]/.test(password);
       const hasNumber = /\d/.test(password);
       const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
       const isValidLength = password.length >= 8;

       return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;
   }
   console.log(validatePassword("Passw0rd!")); // Output: true
   console.log(validatePassword("password"));  // Output: false
   ```
