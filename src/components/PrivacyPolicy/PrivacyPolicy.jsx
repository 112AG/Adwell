import React from "react";

function PrivacyPolicy() {
  const privacyPolicy = [
    {
      section: "What data do we collect?",
      content:
        "www.adwell.com collects basic personal information when you create an account, use products or services, or visit the site. This may include your name, address, email, phone number, birth date, gender, Zip/Pin code, etc. You can access, modify, delete, or restrict your account information at any time.",
    },
    {
      section: "Why do we collect this information?",
      content:
        "We use this information for order processing, shipping, customer service, product improvement, and to send emails containing advertisements, newsletters, and notifications. www.adwell.com does not share personal information with advertisers.",
    },
    {
      section: "Mandatory Communications & Opt-out",
      content:
        "We reserve the right to send you communications such as service announcements, administrative messages, and newsletters as part of your account. You can opt-out of these services.",
    },
    {
      section: "Why do we use cookies?",
      content:
        "Cookies help keep our site active in your browser and restore pages for user convenience. We automatically collect data such as your IP address and requested pages via cookies.",
    },
    {
      section: "How secured are the payments processed?",
      content:
        "Payments are processed with the highest level of encryption. All transactions go through secure and trusted payment gateways managed by leading banks, ensuring safety and security.",
    },
    {
      section: "Does your data get transferred?",
      content:
        "If www.adwell.com is acquired or merged, your data may be transferred, and you will be notified before any policy changes take effect.",
    },
    {
      section: "Third-party data sharing policy",
      content:
        "We do not rent, sell, or share your personal information with third parties, except with trusted partners under confidentiality agreements to manage the site. These partners cannot use the data for any other purpose.",
    },
    {
      section: "Changes to our privacy policy",
      content:
        "www.adwell.com may update this policy periodically. We will notify you via email or a site notice about significant changes.",
    },
    {
      section: "How to contact us?",
      content:
        "If you have any questions about our privacy policy or wish to exercise your data rights, contact us at adwell@sfa.co.in or call +91 0987654321.",
    },
    {
      section: "Time frame to respond to your request",
      content:
        "We will respond to any user request within one month. To exercise your rights, email us at adwell@sfa.co.in.",
    },
  ];

  return (
    <div className="w-full h-full flex item-center justify-center py-2">
      <div className="max-w-4xl">
        <h1 className="text-3xl pb-4 font-bold text-gray-800 text-center">
          Privacy and Cookie Policy
        </h1>
        <p className="text-[18px] text-[#565050]">
          This policy describes how Nightingale Paper Products, collects and
          receives your personal information through its website, devices,
          services and applications.
        </p>
        {privacyPolicy.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row max-w-4xl bg-red-100 shadow-md rounded-lg p-4 md:p-6 my-4"
          >
            {/* Section Title */}
            <h1 className="text-red-800 font-semibold text-lg md:text-xl w-full md:w-1/3 mb-2 md:mb-0 pr-4">
              {data.section}
            </h1>

            {/* Content */}
            <p className="text-gray-700 text-sm md:text-base w-full md:w-2/3">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
