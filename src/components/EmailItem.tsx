import React from "react";
import { Badge, BadgeVariant } from "./Badge";
import { MoreMenu } from "./MoreMenu";

export interface Email {
  id: string;
  address: string;
  status: "primary" | "verified" | "unverified";
  isPrimary: boolean;
  description?: string;
}

interface EmailItemProps {
  email: Email;
  onManage: (email: Email) => void;
  onRemove: (email: Email) => void;
}

export const EmailItem: React.FC<EmailItemProps> = ({
  email,
  onManage,
  onRemove,
}) => {
  const getBadgeVariant = (status: Email["status"]): BadgeVariant => {
    switch (status) {
      case "primary":
        return "primary";
      case "verified":
        return "verified";
      case "unverified":
        return "unverified";
      default:
        return "unverified";
    }
  };

  const getBadgeText = (status: Email["status"]) => {
    switch (status) {
      case "primary":
        return "PRIMARY";
      case "verified":
        return "VERIFIED";
      case "unverified":
        return "UNVERIFIED";
      default:
        return "UNVERIFIED";
    }
  };

  return (
    <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col flex-1 min-w-0 gap-2">
        <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-3 gap-2">
          <span className="text-sm font-normal text-gray-900 break-all">
            {email.address}
          </span>
          <div className="flex items-center gap-1">
            {email.isPrimary && <Badge variant="primary">PRIMARY</Badge>}
            <Badge variant={getBadgeVariant(email.status)}>
              {getBadgeText(email.status)}
            </Badge>
          </div>
        </div>
        {email.description && (
          <p className="text-sm text-gray-400 leading-5 font-light">
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
