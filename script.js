<script>
    // When the form is submitted, check the input fields
    document.querySelector("form").addEventListener("submit", function(event) {
        // Get the name and email values entered by the user
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        
        // If either the name or email field is empty
        if (!name || !email) {
            alert("Please fill out all fields."); // Show a message asking to fill all fields
            event.preventDefault(); // Stop the form from being submitted
        }
    });
</script>
