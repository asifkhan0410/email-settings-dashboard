import React from 'react';
import { EmailItem, Email } from './EmailItem';

interface EmailListProps {
  emails: Email[];
  onManage: (email: Email) => void;
  onRemove: (email: Email) => void;
}

export const EmailList: React.FC<EmailListProps> = ({ emails, onManage, onRemove }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Emails</h2>
        <p className="text-sm text-gray-600">
          Emails you can use to sign in to your account.
        </p>
      </div>
      
      <div className="space-y-0">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            onManage={onManage}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};