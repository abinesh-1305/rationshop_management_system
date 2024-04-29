class EnquiryForm {
    constructor(private name: HTMLInputElement, private email: HTMLInputElement, private phone: HTMLInputElement, private address: HTMLTextAreaElement, private enquiryType: HTMLSelectElement, private ratings: HTMLInputElement, private message: HTMLTextAreaElement) {}
  
    submitEnquiry(event: Event) {
      event.preventDefault();
  
      const name = this.name.value;
      const email = this.email.value;
      const phone = this.phone.value;
      const address = this.address.value;
      const enquiryType = this.enquiryType.value;
      const ratings = parseInt(this.ratings.value);
      const message = this.message.value;
      console.log("Enquiry submitted:", name, email, phone, address, enquiryType, ratings, message);
  
      const responseElement = document.getElementById("response")!;
      responseElement.innerText = "Enquiry submitted successfully!  Action on your enquiry will be taken within 2 working days!";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiryForm") as HTMLFormElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const addressInput = document.getElementById("address") as HTMLTextAreaElement;
    const enquiryTypeInput = document.getElementById("enquiryType") as HTMLSelectElement;
    const ratingsInput = document.getElementById("ratings") as HTMLInputElement;
    const messageInput = document.getElementById("message") as HTMLTextAreaElement;
  
    const enquiry = new EnquiryForm(nameInput, emailInput, phoneInput, addressInput, enquiryTypeInput, ratingsInput, messageInput);
  
    form.addEventListener("submit", (event) => enquiry.submitEnquiry(event));
  });
  