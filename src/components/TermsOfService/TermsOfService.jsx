import React from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

const modalRoot = document.querySelector('#modal-root');

export const TermsOfService = ({ onTermsOfServiceClickClose }) => {
  const onDropboxPolicyClick = e => {
    if (e.target === e.currentTarget) {
      onTermsOfServiceClickClose();
    }
  };

  return createPortal(
    <div className="terms-of-service-dropbox" onClick={onDropboxPolicyClick}>
      <div className="terms-of-service-content">
        <button
          className="terms-of-service-close-btn"
          onClick={() => onTermsOfServiceClickClose()}
        >
          <IoClose size={20} />
        </button>
        <h2>Terms of Service</h2>
        <div className="terms-of-service-text">
          <p>
            These Terms of Service ("Terms") govern your access to and use of
            the Food Boutique website ("Website") operated by Food Boutique
            ("Company", "we", or "us"). Please read these Terms carefully before
            accessing or using our Website.
          </p>
          <br />
          <p>
            By accessing or using any part of the Website, you agree to be bound
            by these Terms. If you do not agree to all the Terms, then you may
            not access the Website or use any services. These Terms apply to all
            visitors, users, and others who access or use the Website.
          </p>
          <br />
          <h3>1. Use of the Website</h3>
          <br />
          <p>
            1.1. By accessing the Website, you agree to use it solely for lawful
            purposes and in compliance with these Terms and any applicable laws,
            regulations, and policies.
          </p>
          <br />
          <p>
            1.2. You agree not to engage in any activity that interferes with or
            disrupts the functioning of the Website or its services.
          </p>
          <br />
          <p>
            1.3. You acknowledge that we may terminate or suspend your access to
            the Website immediately, without prior notice or liability, for any
            reason whatsoever, including without limitation if you breach these
            Terms.
          </p>
          <br />
          <h3>2. Content</h3>
          <br />
          <p>
            2.1. The content on the Website, including but not limited to text,
            images, graphics, videos, and logos, is owned by or licensed to us
            and is subject to copyright and other intellectual property rights.
          </p>
          <br />
          <p>
            2.2. You may not use, reproduce, modify, or distribute any content
            from the Website without our prior written consent.
          </p>
          <br />
          <p>
            2.3. You agree not to upload or transmit any content that is
            unlawful, defamatory, obscene, or otherwise objectionable.
          </p>
          <br />
          <h3>3. Links to Other Websites</h3>
          <br />
          <p>
            3.1. The Website may contain links to third-party websites or
            services that are not owned or controlled by us.
          </p>
          <br />
          <p>
            3.2. We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party websites
            or services.
          </p>
          <br />
          <p>
            3.3. You acknowledge and agree that we shall not be responsible or
            liable, directly or indirectly, for any damage or loss caused or
            alleged to be caused by or in connection with the use of or reliance
            on any such content, goods, or services available on or through any
            such websites or services.
          </p>
          <br />
          <h3>4. Limitation of Liability</h3>
          <br />
          <p>
            4.1. In no event shall the Company, its directors, employees,
            partners, agents, suppliers, or affiliates be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Website; (ii) any conduct or
            content of any third party on the Website; (iii) any content
            obtained from the Website; and (iv) unauthorized access, use, or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence), or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose.
          </p>
          <br />
          <h3>5. Governing Law</h3>
          <br />
          <p>
            5.1. These Terms shall be governed by and construed in accordance
            with the laws of [Your jurisdiction], without regard to its conflict
            of law provisions.
          </p>
          <br />
          <h3>6. Changes to Terms</h3>
          <br />
          <p>
            6.1. We reserve the right, at our sole discretion, to modify or
            replace these Terms at any time. If a revision is material, we will
            try to provide at least 30 days' notice prior to any new terms
            taking effect. What constitutes a material change will be determined
            at our sole discretion.
          </p>
          <br />
          <h3>7. Contact Us</h3>
          <br />
          <p>
            7.1. If you have any questions about these Terms, please contact us
            at [insert contact information]. By accessing or using the Website,
            you agree to be bound by these Terms of Service. If you do not agree
            to any part of these Terms, you may not access the Website.
          </p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
