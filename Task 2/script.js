document.getElementById('admissionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value;
    let classValue = document.getElementById('class').value;
    let contact = document.getElementById('contact').value.trim();
    let email = document.getElementById('email').value.trim();

    if (!name || !age || !classValue || !contact || !email) {
        alert("⚠ Please fill all the fields!");
        return;
    }

    if (!/^[0-9]{10}$/.test(contact)) {
        alert("⚠ Enter a valid 10-digit contact number!");
        return;
    }

    alert("✅ Admission Form Submitted Successfully!");
    document.getElementById('admissionForm').reset();
});
