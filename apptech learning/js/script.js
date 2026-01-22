
document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("contectForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        
        alert("thank you for enquiry!");
        
        
        form.reset();
    });

});
