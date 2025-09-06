import React from 'react';
import { Dropdown } from './Dropdown';
import { Toggle } from './Toggle';

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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Email settings</h2>
        <p className="text-sm text-gray-600">
          Configure how emails are used in relation to your account.
        </p>
      </div>

      <div className="space-y-6">
        {/* Primary email address */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Primary email address
          </label>
          <p className="text-sm text-gray-600 mb-3">
            Select an email to be used for account-related notifications and can be used for password reset.
          </p>
          <Dropdown
            value={primaryEmail}
            options={emailOptions}
            onChange={onPrimaryEmailChange}
            placeholder="Select primary email"
          />
        </div>

        {/* Backup email address */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Backup email address
          </label>
          <p className="text-sm text-gray-600 mb-3">
            Your backup email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.
          </p>
          <Dropdown
            value={backupEmail}
            options={backupOptions}
            onChange={onBackupEmailChange}
            placeholder="Select backup email"
          />
        </div>

        {/* Keep email addresses private */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Keep my email addresses private
            </h3>
            <p className="text-sm text-gray-600">
              We'll remove your public profile email when performing web-based operations and sending email on your behalf.
            </p>
          </div>
          <Toggle
            checked={keepPrivate}
            onChange={onKeepPrivateChange}
          />
        </div>
      </div>
    </div>
  );
};