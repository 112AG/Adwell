import React from "react";

function TermCondition() {
  const sitePolicies = [
    {
      id: 1,
      title: "License & Site Access",
      content: [
        "The contents of this site are generated electronically. All our communication with you would be in calls, electronic form either by e-mails or by posting notices and messages on the website.",
        "You agree to receive and accept all communication related to services offered by www.nightingaleshop.com.",
        "You can visit and make personal use of this site and services. However, you are restricted from downloading or modifying the contents of the website, including images.",
        "This site or any portion of this site shall not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Nightingale.",
      ],
    },
    {
      id: 2,
      title: "Account Creation Clauses",
      content: [
        "You agree to provide a valid e-mail address and create an account with a password on the website to take services rendered by www.nightingaleshop.com.",
        "By accepting the terms, you agree to take responsibility for maintaining your account, protecting your account with a password, restricting access to your computer, and accepting responsibility for all activities that occur under your account or password.",
        "Nightingale has the right but not the obligation to monitor and edit or remove any activity or content. It takes no responsibility and assumes no liability for any content posted by you or any third party.",
        "You may submit reviews, comments, suggestions, ideas, and questions, as long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing on intellectual property rights, or otherwise injurious to third parties or objectionable.",
        "If you do post content or submit material, and unless indicated otherwise, you grant Nightingale a non-exclusive, royalty-free, perpetual, irrevocable, and fully sub-licensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such contents throughout the world in any form.",
      ],
    },
    {
      id: 3,
      title: "Disclaimer of Warranties and Limitations of Liability",
      content: [
        "This site is provided by www.nightingaleshop.com, on an 'as is' and 'as available' basis.",
        "www.nightingaleshop.com makes no representation or warranty of any kind, express or implied, on the operation of this site or the information, content, materials, or products included on this site.",
        "You expressly agree that your use of this site is at your own risk.",
        "To the full extent permissible by applicable law, www.nightingaleshop.com disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.",
        "www.nightingaleshop.com does not warrant that this site, its servers, or e-mails sent from www.nightingaleshop.com are free of viruses or other harmful components.",
        "Nightingale will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.",
      ],
    },
    {
      id: 4,
      title: "Applicable Law",
      content: [
        "By visiting www.nightingaleshop.com, you agree that the laws of INDIA, without regard to principles of conflict of laws, shall govern these conditions of use and any dispute of any sort that might arise between you and Nightingale.",
      ],
    },
    {
      id: 5,
      title: "Disputes",
      content: [
        "Any dispute or claim relating in any way to your visit or purchase through www.nightingaleshop.com shall only be in competent courts of law at Srivilliputhur, in the state of Tamil Nadu.",
        "Arbitration under this agreement shall be conducted under the rules and prevailing laws.",
      ],
    },
    {
      id: 6,
      title: "Site Policies",
      content: [
        "Nightingale reserves the right to make changes to our site policies and these Terms and Conditions of Use at any time.",
        "If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.",
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col item-center justify-center py-2 sm:px-6 px-4">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl pb-4 font-bold text-gray-800 text-center">
          Terms & Conditions
        </h1>
        <p className="text-[16px] text-[#565050]">
          Welcome to www.adwell.com. We render our services to your acceptance
          of the conditions mentioned below and therefore request you to read
          them carefully. If you visit or use the services offered by
          www.nightingaleshop.com, it is taken that you understand and accept
          the conditions set hereunder. Nightingale reserves the right to update
          or modify these terms and conditions at any time and shall intimate
          about the same.
        </p>
        <div className="max-w-4xl mx-auto p-4">
          {sitePolicies.map((policy) => (
            <div key={policy.id} className="mb-6">
              <h2 className="text-lg font-semibold text-red-800">
                {policy.title}
              </h2>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {policy.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TermCondition;
