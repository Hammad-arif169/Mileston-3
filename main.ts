// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value.replace(/\n/g, '<br>');
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.replace(/\n/g, '<br>');
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.replace(/\n/g, '<br>');

        // Generate the resume content dynamically
        const resumeHTML = `
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error('Form or resume display element is missing.');
}
