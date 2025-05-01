
import React from 'react';
import PolicySection from '../../../components/messagesection/Messagesection';

const PrivacyPolicy = () => {
  const privacyPoints = [
    "We are deeply committed to maintaining your trust and protecting your privacy. When you visit our platform, we may collect various types of information to help us improve our services and provide a personalized experience. This information includes, but is not limited to, your name, email address, contact number, IP address, browser type, device type, and pages visited. All this data is stored securely and is only accessible to authorized personnel with proper credentials. We believe in transparency, and you will always be informed about what data we collect and how it is being used.",

    "We do not sell, trade, or rent your personal information to others. Any data shared externally will be limited to trusted third-party service providers who assist us in delivering services to you — such as payment processors, hosting services, and email platforms — all of whom are contractually obligated to maintain the confidentiality of your information. These partners are prohibited from using your data for any purpose other than delivering services on our behalf. We ensure that such disclosures are minimal and conducted with strict oversight.",

    "Our website uses cookies to distinguish you from other users and help us provide you with a better experience. Cookies are small text files stored on your device that track your activity on our site, remember your preferences, and enhance your browsing experience. These may include session cookies that expire when you close your browser, or persistent cookies that remain until deleted. You can choose to accept or decline cookies by modifying your browser settings. However, disabling cookies may limit certain functionalities of the website.",

    "We take data protection seriously and follow industry-standard practices to prevent unauthorized access, data loss, or misuse. This includes using secure socket layer (SSL) technology, encrypted databases, and two-factor authentication wherever applicable. All data transmission between you and our servers is encrypted. We conduct regular audits, penetration tests, and staff training to ensure that your personal data is protected at every level of our operations. In the unlikely event of a data breach, affected users will be informed promptly in accordance with applicable laws.",

    "You have complete control over your data. You may at any time request access to the personal information we hold about you, request corrections to inaccuracies, or ask for your data to be deleted entirely. To do this, simply contact our support team via email. Additionally, you can manage your preferences for receiving marketing communications by unsubscribing via the link provided in each promotional email. Your choices will always be respected, and we will never send you spam or unwanted messages.",

    "We reserve the right to update this privacy policy from time to time as we evolve and improve our services. Any changes made will be reflected on this page, and where appropriate, notified to you via email or platform alerts. We encourage you to periodically review this page to stay informed about how we are protecting your data. Your continued use of our services after any changes signifies your acceptance of the updated terms. This policy is governed by and construed in accordance with the laws of the applicable jurisdiction in which we operate."
  ];

  return <PolicySection title="Privacy Policy" points={privacyPoints} />;
};

export default PrivacyPolicy;
