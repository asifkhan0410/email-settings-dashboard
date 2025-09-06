import React from "react";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";

interface EmailSettingsProps {
  primaryEmail: string;
  backupEmail: string;
  keepPrivate: boolean;
  emailOptions: Array<{ value: string; label: string; disabled?: boolean }>;
  backupOptions: Array<{ value: string; label: string; disabled?: boolean }>;
  onPrimaryEmailChange: (value: string) => void;
  onBackupEmailChange: (value: string) => void;
  onKeepPrivateChange: (checked: boolean) => void;
}

export const EmailSettings: React.FC<EmailSettingsProps> = ({
  primaryEmail,
  backupEmail,
  keepPrivate,
  emailOptions,
  backupOptions,
  onPrimaryEmailChange,
  onBackupEmailChange,
  onKeepPrivateChange,
}) => {
  return (
    <div className="">
      <div className="mb-3 px-5">
        <h2 className="text-2xl font-medium text-gray-900 mb-1 leading-6">
          Email settings
        </h2>
        <p className="text-sm text-gray-400 font-light">
          Configure how emails are used in relation to your account.
        </p>
      </div>

      <div className="space-y-6 bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        {/* Primary email address */}
        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row sm:gap-6 gap-3 border-b border-gray-200 pb-6">
          <div className="flex flex-col gap-1 w-full max-w-[100%] sm:max-w-[60%]">
            <label className="block text-sm font-medium text-gray-900">
              Primary email address
            </label>
            <p className="text-sm text-gray-400 font-light">
              Select an email to be used for account-related notifications and
              can be used for password reset.
            </p>
          </div>
          <Dropdown
            value={primaryEmail}
            options={emailOptions}
            onChange={onPrimaryEmailChange}
            placeholder="Select primary email"
          />
        </div>

        {/* Backup email address */}
        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row sm:gap-6 gap-3 border-b border-gray-200 pb-6">
          <div className="flex flex-col gap-1 w-full max-w-[100%] sm:max-w-[60%]">
            <label className="block text-sm font-medium text-gray-900">
              Backup email address
            </label>
            <p className="text-sm text-gray-400 font-light">
              Your backup email address will be used as an additional
              destination for security-relevant account notifications and can
              also be used for password resets.
            </p>
          </div>
          <Dropdown
            value={backupEmail}
            options={backupOptions}
            onChange={onBackupEmailChange}
            placeholder="Select backup email"
          />
        </div>

        {/* Keep email addresses private */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-6 gap-3">
          <div className="flex flex-col gap-1 w-full max-w-[100%] sm:max-w-[60%]">
            <h3 className="text-sm font-medium text-gray-900">
              Keep my email addresses private
            </h3>
            <p className="text-sm text-gray-400 font-light">
              We'll remove your public profile email when performing web-based
              operations and sending email on your behalf.
            </p>
          </div>
          <Toggle checked={keepPrivate} onChange={onKeepPrivateChange} />
        </div>
      </div>
    </div>
  );
};
