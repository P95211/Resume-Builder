// Resume Builder JavaScript

class ResumeBuilder {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.updatePreview();
    }

    initializeElements() {
        // Form elements
        this.form = document.getElementById('resumeForm');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.email = document.getElementById('email');
        this.phone = document.getElementById('phone');
        this.address = document.getElementById('address');
        this.summary = document.getElementById('summary');
        this.skills = document.getElementById('skills');
        
        // Lists
        this.educationList = document.getElementById('educationList');
        this.experienceList = document.getElementById('experienceList');
        
        // Buttons
        this.addEducationBtn = document.getElementById('addEducation');
        this.addExperienceBtn = document.getElementById('addExperience');
        this.downloadPDFBtn = document.getElementById('downloadPDF');
        
        // Preview
        this.preview = document.getElementById('resumePreview');
    }

    bindEvents() {
        // Personal information events
        [this.firstName, this.lastName, this.email, this.phone, this.address, this.summary, this.skills].forEach(element => {
            element.addEventListener('input', () => this.updatePreview());
        });

        // Add education/experience buttons
        this.addEducationBtn.addEventListener('click', () => this.addEducation());
        this.addExperienceBtn.addEventListener('click', () => this.addExperience());

        // Download PDF
        this.downloadPDFBtn.addEventListener('click', () => this.downloadPDF());

        // Dynamic form event delegation
        this.educationList.addEventListener('input', (e) => {
            if (e.target.classList.contains('education-degree') || 
                e.target.classList.contains('education-field') ||
                e.target.classList.contains('education-institution') ||
                e.target.classList.contains('education-year') ||
                e.target.classList.contains('education-gpa')) {
                this.updatePreview();
            }
        });

        this.experienceList.addEventListener('input', (e) => {
            if (e.target.classList.contains('experience-title') ||
                e.target.classList.contains('experience-company') ||
                e.target.classList.contains('experience-start') ||
                e.target.classList.contains('experience-end') ||
                e.target.classList.contains('experience-description')) {
                this.updatePreview();
            }
        });

        // Remove buttons event delegation
        this.educationList.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-education')) {
                this.removeEducation(e.target.closest('.education-item'));
            }
        });

        this.experienceList.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-experience')) {
                this.removeExperience(e.target.closest('.experience-item'));
            }
        });
    }

    addEducation() {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item border rounded p-3 mb-3';
        educationItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h6 class="text-success mb-0">Education Entry</h6>
                <button type="button" class="btn btn-outline-danger btn-sm remove-education">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2">
                    <label class="form-label">Degree</label>
                    <input type="text" class="form-control education-degree" placeholder="Bachelor of Science">
                </div>
                <div class="col-md-6 mb-2">
                    <label class="form-label">Field of Study</label>
                    <input type="text" class="form-control education-field" placeholder="Computer Science">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2">
                    <label class="form-label">Institution</label>
                    <input type="text" class="form-control education-institution" placeholder="University Name">
                </div>
                <div class="col-md-6 mb-2">
                    <label class="form-label">Graduation Year</label>
                    <input type="text" class="form-control education-year" placeholder="2023">
                </div>
            </div>
            <div class="mb-2">
                <label class="form-label">GPA (Optional)</label>
                <input type="text" class="form-control education-gpa" placeholder="3.8">
            </div>
        `;
        this.educationList.appendChild(educationItem);
        this.updatePreview();
    }

    addExperience() {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item border rounded p-3 mb-3';
        experienceItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h6 class="text-info mb-0">Experience Entry</h6>
                <button type="button" class="btn btn-outline-danger btn-sm remove-experience">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2">
                    <label class="form-label">Job Title</label>
                    <input type="text" class="form-control experience-title" placeholder="Software Developer">
                </div>
                <div class="col-md-6 mb-2">
                    <label class="form-label">Company</label>
                    <input type="text" class="form-control experience-company" placeholder="Tech Company Inc.">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2">
                    <label class="form-label">Start Date</label>
                    <input type="text" class="form-control experience-start" placeholder="Jan 2022">
                </div>
                <div class="col-md-6 mb-2">
                    <label class="form-label">End Date</label>
                    <input type="text" class="form-control experience-end" placeholder="Present">
                </div>
            </div>
            <div class="mb-2">
                <label class="form-label">Description</label>
                <textarea class="form-control experience-description" rows="3" placeholder="Describe your responsibilities and achievements..."></textarea>
            </div>
        `;
        this.experienceList.appendChild(experienceItem);
        this.updatePreview();
    }

    removeEducation(item) {
        if (this.educationList.children.length > 1) {
            item.remove();
            this.updatePreview();
        }
    }

    removeExperience(item) {
        if (this.experienceList.children.length > 1) {
            item.remove();
            this.updatePreview();
        }
    }

    getEducationData() {
        const educationItems = this.educationList.querySelectorAll('.education-item');
        return Array.from(educationItems).map(item => ({
            degree: item.querySelector('.education-degree')?.value || '',
            field: item.querySelector('.education-field')?.value || '',
            institution: item.querySelector('.education-institution')?.value || '',
            year: item.querySelector('.education-year')?.value || '',
            gpa: item.querySelector('.education-gpa')?.value || ''
        })).filter(edu => edu.degree || edu.institution);
    }

    getExperienceData() {
        const experienceItems = this.experienceList.querySelectorAll('.experience-item');
        return Array.from(experienceItems).map(item => ({
            title: item.querySelector('.experience-title')?.value || '',
            company: item.querySelector('.experience-company')?.value || '',
            startDate: item.querySelector('.experience-start')?.value || '',
            endDate: item.querySelector('.experience-end')?.value || '',
            description: item.querySelector('.experience-description')?.value || ''
        })).filter(exp => exp.title || exp.company);
    }

    updatePreview() {
        const personalInfo = {
            firstName: this.firstName.value || 'Praveen',
            lastName: this.lastName.value || 'Kumar',
            email: this.email.value || 'praveenkaswan1023@email.com',
            phone: this.phone.value || '+91 9521109910',
            address: this.address.value || '123 Main, Bhadra, Hanumangarh, Rajasthan 335501',
            summary: this.summary.value || 'Professional summary will appear here...'
        };

        const education = this.getEducationData();
        const experience = this.getExperienceData();
        const skills = this.skills.value || 'JavaScript, React, Node.js, Python, SQL, Git';

        this.renderPreview(personalInfo, education, experience, skills);
    }

    renderPreview(personalInfo, education, experience, skills) {
        const skillsList = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

        this.preview.innerHTML = `
            <div class="resume-header">
                <h1>${personalInfo.firstName} ${personalInfo.lastName}</h1>
                <div class="contact-info">
                    <div>${personalInfo.email} | ${personalInfo.phone}</div>
                    <div>${personalInfo.address}</div>
                </div>
                <div class="summary">${personalInfo.summary}</div>
            </div>

            ${education.length > 0 ? `
                <div class="resume-section">
                    <h2>Education</h2>
                    ${education.map(edu => `
                        <div class="education-item">
                            <h3>${edu.degree} ${edu.field ? `in ${edu.field}` : ''}</h3>
                            <div class="institution">${edu.institution}</div>
                            <div class="dates">${edu.year}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${experience.length > 0 ? `
                <div class="resume-section">
                    <h2>Work Experience</h2>
                    ${experience.map(exp => `
                        <div class="experience-item">
                            <h3>${exp.title}</h3>
                            <div class="company">${exp.company}</div>
                            <div class="dates">${exp.startDate} - ${exp.endDate}</div>
                            ${exp.description ? `<div class="description">${exp.description}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${skillsList.length > 0 ? `
                <div class="resume-section">
                    <h2>Skills</h2>
                    <div class="skills-list">
                        ${skillsList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        `;
    }

    async downloadPDF() {
        try {
            this.downloadPDFBtn.disabled = true;
            this.downloadPDFBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating PDF...';

            // Use html2canvas to capture the resume preview
            const canvas = await html2canvas(this.preview, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            // Add first page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add additional pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Generate filename
            const firstName = this.firstName.value || 'Praveen';
            const lastName = this.lastName.value || 'Kumar';
            const filename = `${firstName}_${lastName}_Resume.pdf`;

            pdf.save(filename);

            // Show success message
            this.showNotification('PDF downloaded successfully!', 'success');
        } catch (error) {
            console.error('Error generating PDF:', error);
            this.showNotification('Error generating PDF. Please try again.', 'error');
        } finally {
            this.downloadPDFBtn.disabled = false;
            this.downloadPDFBtn.innerHTML = '<i class="fas fa-download me-2"></i>Download PDF';
        }
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
}

// Initialize the Resume Builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
});

// Add some sample data for demonstration
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the form to be initialized
    setTimeout(() => {
        // Fill in some sample data
        const sampleData = {
            firstName: 'Praveen',
            lastName: 'Kumar',
            email: 'praveenkaswan1023@gmail.com',
            phone: '+91 9521109910',
            address: '123 Main Chowk, Bhadra , Hanumangarh , Rajasthan 335501',
            summary: 'Software developer with expertise in full-stack development, specializing in JavaScript, React, and Node.js. Passionate about creating scalable web applications.',
            skills: 'JavaScript, React, Node.js, Python, SQL, Git, C/C++, TypeScript, Express.js'
        };

        // Fill personal information
        Object.keys(sampleData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = sampleData[key];
            }
        });

        // Fill education
        const educationDegree = document.querySelector('.education-degree');
        const educationField = document.querySelector('.education-field');
        const educationInstitution = document.querySelector('.education-institution');
        const educationYear = document.querySelector('.education-year');
        const educationGpa = document.querySelector('.education-gpa');

        if (educationDegree) educationDegree.value = 'Bachelor of Science';
        if (educationField) educationField.value = 'Computer Science';
        if (educationInstitution) educationInstitution.value = 'University of Delhi';
        if (educationYear) educationYear.value = '2024';
        if (educationGpa) educationGpa.value = '5.5';

        // Fill experience
        const experienceTitle = document.querySelector('.experience-title');
        const experienceCompany = document.querySelector('.experience-company');
        const experienceStart = document.querySelector('.experience-start');
        const experienceEnd = document.querySelector('.experience-end');
        const experienceDescription = document.querySelector('.experience-description');

        if (experienceTitle) experienceTitle.value = '';
        if (experienceCompany) experienceCompany.value = '';
        if (experienceStart) experienceStart.value = '';
        if (experienceEnd) experienceEnd.value = '';
        if (experienceDescription) experienceDescription.value = '';

        // Trigger preview update
        const event = new Event('input');
        document.getElementById('firstName').dispatchEvent(event);
    }, 100);
});
