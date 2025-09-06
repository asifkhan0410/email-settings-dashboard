import React from 'react';
import { Badge, BadgeVariant } from './Badge';
import { MoreMenu } from './MoreMenu';

export interface Email {
  id: string;
  address: string;
  status: 'primary' | 'verified' | 'unverified';
  isPrimary: boolean;
  description?: string;
}

interface EmailItemProps {
  email: Email;
  onManage: (email: Email) => void;
  onRemove: (email: Email) => void;
}

export const EmailItem: React.FC<EmailItemProps> = ({ email, onManage, onRemove }) => {
  const getBadgeVariant = (status: Email['status']): BadgeVariant => {
    switch (status) {
      case 'primary':
        return 'primary';
      case 'verified':
        return 'verified';
      case 'unverified':
        return 'unverified';
      default:
        return 'unverified';
    }
  };

  const getBadgeText = (status: Email['status']) => {
    switch (status) {
      case 'primary':
        return 'PRIMARY';
      case 'verified':
        return 'VERIFIED';
      case 'unverified':
        return 'UNVERIFIED';
      default:
        return 'UNVERIFIED';
    }
  };

  return (
    <div className="flex items-start justify-between py-4 first:pt-0 last:pb-0 border-b border-gray-100 last:border-b-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-medium text-gray-900 break-all">
            {email.address}
          </span>
          {email.isPrimary && (
            <Badge variant="primary">PRIMARY</Badge>
          )}
          <Badge variant={getBadgeVariant(email.status)}>
            {getBadgeText(email.status)}
          </Badge>
        </div>
        {email.description && (
          <p className="text-sm text-gray-500 leading-5">
            {email.description}
          </p>
        )}
      </div>
      
      <MoreMenu
        onManage={() => onManage(email)}
        onRemove={() => onRemove(email)}
      />
    </div>
  );
};