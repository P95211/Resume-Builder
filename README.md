# Interactive Resume Builder

A modern, responsive web application that allows users to create professional resumes with real-time preview and PDF download functionality.

## Features

- **Real-time Preview**: See your resume update as you type
- **Dynamic Forms**: Add/remove education and experience entries
- **Professional Styling**: Clean, modern design using Bootstrap
- **PDF Export**: Download your resume as a professional PDF
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Sample Data**: Pre-filled with example content to get you started

## How to Use

### 1. Getting Started
1. Open `index.html` in your web browser
2. The app will load with sample data to demonstrate functionality
3. Start customizing your resume by editing the form fields

### 2. Personal Information
- Fill in your basic details: name, email, phone, address
- Write a compelling professional summary
- All fields update the preview in real-time

### 3. Education
- Add your educational background
- Include degree, field of study, institution, graduation year, and GPA
- Use the "Add Education" button to add multiple entries
- Remove entries using the trash icon (minimum 1 entry required)

### 4. Work Experience
- Add your work history with job titles, companies, and dates
- Describe your responsibilities and achievements
- Use the "Add Experience" button to add multiple entries
- Remove entries using the trash icon (minimum 1 entry required)

### 5. Skills
- Enter your skills as a comma-separated list
- Skills will appear as attractive tags in the preview

### 6. Download PDF
- Click the "Download PDF" button to generate a professional PDF
- The PDF will automatically download with your name in the filename
- The PDF maintains the same formatting as the preview

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with animations and responsive design
- **Bootstrap 5**: UI framework for responsive layout
- **JavaScript (ES6+)**: Modern JavaScript with classes and async/await
- **jsPDF**: PDF generation library
- **html2canvas**: HTML to canvas conversion for PDF generation
- **Font Awesome**: Icon library for enhanced UI

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

### File Structure
```
Resume Builder/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Adding New Sections
To add new resume sections (e.g., Certifications, Projects):

1. Add the HTML form elements in `index.html`
2. Update the CSS styling in `style.css`
3. Modify the JavaScript in `script.js` to handle the new data
4. Update the `renderPreview()` method to display the new section

### Styling Changes
- Modify `style.css` to change colors, fonts, and layout
- The resume preview uses a different font family (Georgia) for a professional look
- Form elements use Bootstrap classes for consistent styling

### PDF Customization
- The PDF generation uses A4 page size
- Multiple pages are automatically created for longer resumes
- The scale factor (2x) ensures high-quality output

## Troubleshooting

### PDF Download Issues
- Ensure you're using a modern browser
- Check that all external libraries are loading properly
- Try refreshing the page if the download button becomes unresponsive

### Preview Not Updating
- Check the browser console for JavaScript errors
- Ensure all form elements have the correct IDs
- Verify that the JavaScript file is properly linked

### Styling Issues
- Clear browser cache if styles aren't loading
- Check that Bootstrap CSS is accessible
- Ensure the custom CSS file is properly linked

## Future Enhancements

Potential improvements for future versions:
- Multiple resume templates/themes
- Save/load resume data (localStorage or cloud)
- Social media integration
- Cover letter builder
- Resume sharing via email
- ATS (Applicant Tracking System) optimization
- Multiple language support

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify all files are in the correct directory
3. Ensure all external CDN links are accessible
4. Test in different browsers to isolate issues

---

**Happy Resume Building!** 🚀
