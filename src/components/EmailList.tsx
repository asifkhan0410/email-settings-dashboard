import React from 'react';
import { EmailItem, Email } from './EmailItem';

interface EmailListProps {
  emails: Email[];
  onManage: (email: Email) => void;
  onRemove: (email: Email) => void;
}

export const EmailList: React.FC<EmailListProps> = ({ emails, onManage, onRemove }) => {
  return (
    <div className="">
      <div className="mb-3 px-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-1 leading-6">Emails</h2>
        <p className="text-sm text-gray-400 font-light">
          Emails you can use to sign in to your account.
        </p>
      </div>
      
      <div className="space-y-0 bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
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