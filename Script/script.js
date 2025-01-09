function validateForm(formData) {
    const { name, email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name && email && emailRegex.test(email);
}
console.log(validateForm({ name: "John", email: "john@example.com" })); // Output: true
console.log(validateForm({ name: "", email: "john@example.com" }));    // Output: false
```