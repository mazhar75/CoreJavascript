let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        zipCode: "10001"
    },
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};
