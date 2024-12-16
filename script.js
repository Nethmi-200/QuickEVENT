// script.js
document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const eventDetails = {
        title: formData.get("title"),
        description: formData.get("description"),
        date: formData.get("date"),
        category: formData.get("category"),
        account: formData.get("account"),
    };

    const poster = formData.get("poster");
    if (poster) {
        const reader = new FileReader();
        reader.readAsDataURL(poster);
        reader.onload = () => {
            eventDetails.poster = reader.result;
            console.log("Event Posted Successfully", eventDetails);
        };
    } else {
        console.log("Please upload a poster!");
    }
});
