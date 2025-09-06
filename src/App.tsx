import React, { useState } from "react";
import { Header } from "./components/Header";
import { EmailList } from "./components/EmailList";
import { EmailSettings } from "./components/EmailSettings";
import { Email } from "./components/EmailItem";

const mockEmails: Email[] = [
  {
    id: "1",
    address: "hello@example.com",
    status: "verified",
    isPrimary: true,
    description:
      "This email address is the default for all notifications and account access.",
  },
  {
    id: "2",
    address: "alternative@example.com",
    status: "verified",
    isPrimary: false,
  },
  {
    id: "3",
    address: "alternative-unverified@example.com",
    status: "unverified",
    isPrimary: false,
  },
];

function App() {
  const [emails] = useState<Email[]>(mockEmails);
  const [primaryEmail, setPrimaryEmail] = useState("hello@example.com");
  const [backupEmail, setBackupEmail] = useState("all-verified");
  const [keepPrivate, setKeepPrivate] = useState(true);

  const verifiedEmails = emails.filter(
    (email) => email.status !== "unverified"
  );

  const emailOptions = verifiedEmails.map((email) => ({
    value: email.address,
    label: email.address,
  }));

  const backupOptions = [
    { value: "all-verified", label: "Allow all verified emails" },
    ...verifiedEmails.map((email) => ({
      value: email.address,
      label: email.address,
    })),
  ];

  const handleManage = (email: Email) => {
    console.log("Manage email:", email);
    // Implement manage functionality
  };

  const handleRemove = (email: Email) => {
    console.log("Remove email:", email);
    // Implement remove functionality
  };

  const handleBack = () => {
    console.log("Navigate back");
    // Implement navigation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <Header title="Your personal account" onBack={handleBack} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-9">
          <EmailList
            emails={emails}
            onManage={handleManage}
            onRemove={handleRemove}
          />

          <EmailSettings
            primaryEmail={primaryEmail}
            backupEmail={backupEmail}
            keepPrivate={keepPrivate}
            emailOptions={emailOptions}
            backupOptions={backupOptions}
            onPrimaryEmailChange={setPrimaryEmail}
            onBackupEmailChange={setBackupEmail}
            onKeepPrivateChange={setKeepPrivate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
