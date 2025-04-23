// src/pages/TermsConditions.jsx
import React from 'react';
import PolicySection from '../../../components/messagesection';

const termsPoints = [
  "By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from using our services. These terms apply to all users of the service, including but not limited to browsers, vendors, customers, merchants, and content contributors. It is your responsibility to review these terms periodically for any changes.",

  "We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any time without prior notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the service. Continued use of the service after any changes constitutes acceptance of those changes.",

  "All content on our platform — including text, graphics, logos, icons, images, and software — is the property of our company or our licensors and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without explicit written consent. Unauthorized use may result in legal action.",

  "You agree not to use our services for any unlawful purpose or to violate any international, federal, provincial, or state regulations. You must not transmit any worms, viruses, or any code of a destructive nature. We reserve the right to terminate your use of the service for violating any of the prohibited uses.",

  "We do not guarantee that your use of our service will be uninterrupted, timely, secure, or error-free. The service is provided ‘as is’ and ‘as available’ without any warranties of any kind. We do not warrant that the results obtained from the use of the service will be accurate or reliable.",

  "These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered. Any disputes arising out of or relating to these terms will be resolved in the competent courts of that jurisdiction. If any provision of these terms is found to be unlawful, void, or unenforceable, it shall not affect the validity and enforceability of the remaining provisions."
];

const TermsConditions = () => {
  return <PolicySection title="Terms and Conditions" points={termsPoints} />;
};

export default TermsConditions;
