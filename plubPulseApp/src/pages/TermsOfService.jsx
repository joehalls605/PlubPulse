import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4">Terms of Service</h1>

            <p>
                Welcome to <strong>PLAB Pulse</strong>. By accessing or using our website and services, you agree to be bound by the following Terms of Service. Please read them carefully before using our platform.
            </p>

            <h4 className="mt-4">1. Purpose</h4>
            <p>
                PLAB Pulse is an educational tool designed to help medical professionals prepare for the PLAB 1 examination. Our platform provides access to practice questions, medical content, and related learning resources for personal study purposes.
            </p>

            <h4 className="mt-4">2. User Responsibilities</h4>
            <p>
                You agree to use PLAB Pulse only for lawful purposes and in accordance with these terms. You must not attempt to disrupt our service, access it in unauthorized ways, or misuse the content for commercial or unethical purposes.
            </p>

            <h4 className="mt-4">3. Account and Data</h4>
            <p>
                If you create an account, you are responsible for maintaining the confidentiality of your login details. You are also responsible for all activities under your account. We may collect limited personal information to enhance your experience as outlined in our <a href="/privacy-policy" className="text-primary">Privacy Policy</a>.
            </p>

            <h4 className="mt-4">4. Intellectual Property</h4>
            <p>
                All content provided on PLAB Pulse, including questions, explanations, and design elements, are the intellectual property of PLAB Pulse or its licensors. You may not copy, reproduce, or distribute any part of the platform without written permission.
            </p>

            <h4 className="mt-4">5. Disclaimers</h4>
            <p>
                PLAB Pulse provides content for educational purposes only. While we strive for accuracy, we do not guarantee that all information is error-free or up to date. You are encouraged to cross-reference with official PLAB guidance and clinical resources.
            </p>

            <h4 className="mt-4">6. Modifications</h4>
            <p>
                We may update these Terms of Service at any time. Significant changes will be communicated through our platform. Continued use of the service after changes are posted means you accept the new terms.
            </p>

            <h4 className="mt-4">7. Contact</h4>
            <p>
                For questions about these Terms of Service, please contact us at <a href="mailto:contact@plabpulse.com" className="text-primary">contact@plabpulse.com</a>.
            </p>
        </div>
    );
};

export default TermsOfService;
