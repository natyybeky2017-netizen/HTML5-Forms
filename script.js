
const form = document.getElementById("survey-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const role = document.getElementById("role").value;

    const recommend = document.querySelector(
        'input[name="recommend"]:checked'
    ).value;

    const languages = document.querySelectorAll(
        'input[name="languages"]:checked'
    );

    const selectedLanguages = [];

    languages.forEach(function(language) {
        selectedLanguages.push(language.value);
    });

    const formData = {
        name: name,
        email: email,
        age: age,
        role: role,
        recommend: recommend,
        languages: selectedLanguages
    };

    console.log(formData);
});
