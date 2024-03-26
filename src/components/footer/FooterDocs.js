import React from 'react'
import './Footer.css';

function Docs() {
    return (
        <div>
            <p className='footer-title'>Docs</p>
            <u1 className="doc-links">
                <li><a class='footer-text' href={`${process.env.PUBLIC_URL}/docs/T2331_Analysis_and_Requirements_Report.pdf.pdf`} target="_blank" rel="noopener noreferrer">Analysis and Requirements Report</a></li>
                <li><a class='footer-text' href={`${process.env.PUBLIC_URL}/docs/T2331_Detailed_Design_report_1.pdf`} target="_blank" rel="noopener noreferrer">Detailed Design Report</a></li>
                <li><a class='footer-text' href={`${process.env.PUBLIC_URL}/docs/T2331_Project_Specification_Document.pdf`} target="_blank" rel="noopener noreferrer">Project Specifications Report</a></li>
            </u1>
        </div>
    );
}

export default Docs