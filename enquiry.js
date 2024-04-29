// enquiry.ts
var EnquiryForm = /** @class */ (function () {
    function EnquiryForm(name, email, phone, address, enquiryType, ratings, message) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.enquiryType = enquiryType;
        this.ratings = ratings;
        this.message = message;
    }
    EnquiryForm.prototype.submitEnquiry = function (event) {
        event.preventDefault(); // Prevent form submission
        var name = this.name.value;
        var email = this.email.value;
        var phone = this.phone.value;
        var address = this.address.value;
        var enquiryType = this.enquiryType.value;
        var ratings = parseInt(this.ratings.value);
        var message = this.message.value;
        // Here you can implement the logic to submit the enquiry, like sending it to a server
        console.log("Enquiry submitted:", name, email, phone, address, enquiryType, ratings, message);
        var responseElement = document.getElementById("response");
        responseElement.innerText = "Enquiry submitted successfully!  Action on your enquiry will be taken within 2 working days!";
    };
    return EnquiryForm;
}());
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("enquiryForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("address");
    var enquiryTypeInput = document.getElementById("enquiryType");
    var ratingsInput = document.getElementById("ratings");
    var messageInput = document.getElementById("message");
    var enquiry = new EnquiryForm(nameInput, emailInput, phoneInput, addressInput, enquiryTypeInput, ratingsInput, messageInput);
    form.addEventListener("submit", function (event) { return enquiry.submitEnquiry(event); });
});
