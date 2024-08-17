document.getElementById('generateBtn').addEventListener('click', generateResume);
document.getElementById('downloadBtn').addEventListener('click', downloadResume);

function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
}

function downloadResume() {
    const resumePreview = document.getElementById('resumePreview').innerHTML;
    const blob = new Blob([resumePreview], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
}
