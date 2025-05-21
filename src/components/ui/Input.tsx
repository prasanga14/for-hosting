import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}
const Input = ({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const baseStyles = 'block px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors';
  const errorStyles = error ? 'border-red-500 text-red-900 placeholder-red-300' : 'border-gray-300';
  const widthClass = fullWidth ? 'w-full' : '';
  return <div className={`mb-4 ${widthClass}`}>
      {label && <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>}
      <input id={inputId} className={`${baseStyles} ${errorStyles} ${className}`} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>;
};
export default Input;