function classifyAge() {
    var yearOfBirth = document.getElementById("yearOfBirth").value;
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
    var outputText = "";

    if (age < 18) {
        outputText = "You are a minor.";
    } else if (age >= 18 && age <= 36) {
        outputText = "You are a youth.";
    } else {
        outputText = "You are an elder.";
    }

    document.getElementById("ageClassification").textContent = outputText;
}
