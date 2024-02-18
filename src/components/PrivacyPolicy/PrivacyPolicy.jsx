import React from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

const modalRoot = document.querySelector('#modal-root');

export const PrivacyPolicy = ({ onPrivacyPolicyClickClose }) => {
  const onDropboxPolicyClick = e => {
    if (e.target === e.currentTarget) {
      onPrivacyPolicyClickClose();
    }
  };

  return createPortal(
    <div className="privacy-policy-dropbox" onClick={onDropboxPolicyClick}>
      <div className="privacy-policy-content">
        <button
          className="privacy-policy-close-btn"
          onClick={() => onPrivacyPolicyClickClose()}
        >
          <IoClose size={20} />
        </button>
        <h2>Privacy Policy</h2>
        <div className="privacy-policy-text">
          <p>
            Effective date: February 18, 2024 Food Boutique ("us", "we", or
            "our") operates the website (the "Service").
          </p>
          <br />
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>
          <br />
          <p>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy.
          </p>
          <br />
          <h3>Information Collection and Use</h3>
          <br />
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <br />
          <h3>Types of Data Collected</h3>
          <br />
          <p>Personal Data</p>
          <br />
          <ul>
            <li>- Email address</li>
            <li>- First name and last name</li>
            <li>- Phone number</li>
            <li>- Address, State, Province, ZIP/Postal code, City</li>
            <li>- Cookies and Usage Data</li>
          </ul>
          <br />
          <h3>Use of Data</h3>
          <br />
          <p>Food Boutique uses the collected data for various purposes:</p>
          <br />
          <ul>
            <li>- To provide and maintain our Service</li>
            <li>- To notify you about changes to our Service</li>
            <li>- To provide customer support</li>
            <li>
              - To gather analysis or valuable information so that we can
              improve our Service
            </li>
            <li>- To monitor the usage of our Service</li>
            <li>- To detect, prevent and address technical issues</li>
          </ul>
          <h3>Retention of Data</h3>
          <br />
          <p>
            Food Boutique will retain your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <br />
          <h3>Transfer of Data</h3>
          <br />
          <p>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ from those of your jurisdiction.
          </p>
          <br />
          <p>
            If you are located outside Poland and choose to provide information
            to us, please note that we transfer the data, including Personal
            Data, to Poland and process it there.
          </p>
          <br />
          <p>
            Your consent to this Privacy Policy followed by your submission of
            such information represents your agreement to that transfer.
          </p>
          <br />
          <h3>Disclosure of Data</h3>
          <br />
          <h3>Legal Requirements</h3>
          <br />
          <p>
            Food Boutique may disclose your Personal Data in the good faith
            belief that such action is necessary to:
          </p>
          <br />
          <ul>
            <li>- To comply with a legal obligation</li>
            <li>
              - To protect and defend the rights or property of Food Boutique
            </li>
            <li>
              - To prevent or investigate possible wrongdoing in connection with
              the Service
            </li>
            <li>
              - To protect the personal safety of users of the Service or the
              public
            </li>
            <li>- To protect against legal liability</li>
          </ul>
          <br />
          <h3>Security of Data</h3>
          <br />
          <p>
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is
          </p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
