function sendToWhatsApp() {
    // 1. Enter your phone number here (include country code, no + or spaces)
    const phoneNumber = "254798891652"; 

    // 2. Get the data from the form
    const name = document.getElementById('custName').value;
    const service = document.getElementById('custService').value;
    const date = document.getElementById('custDate').value;
// Add this inside your script.js
document.getElementById('custDate').min = new Date().toISOString().split("T")[0];
    // 3. Check if fields are empty
    if(name === "" || date === "") {
        alert("Please fill in all fields");
        return;
    }

    // 4. Create the message
    const message = `Hello Brevicks Car Wash! %0A%0A` +
                    `I'd like to book a wash:%0A` +
                    `*Name:* ${name}%0A` +
                    `*Service:* ${service}%0A` +
                    `*Date:* ${date}`;

    // 5. Open WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank').focus();
}