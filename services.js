// Get all modals
const modals = document.querySelectorAll(".modal");

// Get all close buttons
const closeButtons = document.querySelectorAll(".close");

// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modal.classList.add("show");
}

// Close modal when clicking close button
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.style.display = "none";
        modal.classList.remove("show");
    });
});

// Close modal when clicking outside modal-content
window.addEventListener("click", (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            modal.classList.remove("show");
        }
    });
});

// --------------------
// Prescriptions Logic
// --------------------

// Toggle the Add Prescription Form
function togglePrescriptionForm() {
    const form = document.getElementById("addPrescriptionForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
}

// Add Prescription to Table
function addPrescription(event) {
    event.preventDefault();

    // Get form values
    const patientName = document.getElementById("patientName").value;
    const medicine = document.getElementById("medicine").value;
    const dosage = document.getElementById("dosage").value;
    const date = document.getElementById("date").value;

    // Insert new row
    const table = document.getElementById("prescriptionsTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
    <td>${patientName}</td>
    <td>${medicine}</td>
    <td>${dosage}</td>
    <td>${date}</td>
  `;

    // Reset and hide form
    document.getElementById("addPrescriptionForm").reset();
    document.getElementById("addPrescriptionForm").style.display = "none";
}