import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  onChange,
  placeholder = "Select...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-2.5 py-1.5 text-left bg-white border border-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-blue-500 transition-colors"
      >
        <span className="text-sm text-gray-900 font-light">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-auto p-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value);
                  setIsOpen(false);
                }
              }}
              disabled={option.disabled}
              className={`
                flex items-center justify-between w-full px-2 py-1.5 text-left text-sm transition-colors font-light rounded-md
                ${
                  option.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-900 hover:bg-gray-50"
                }
                ${option.value === value ? "bg-gray-50" : ""}
              `}
            >
              <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                {option.label}
              </span>
              {option.value === value && (
                <Check className="w-4 h-4 text-gray-900" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
