import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {children}
    </div>;
};
export default Card;
export const CardHeader = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>;
};
export const CardContent = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
export const CardFooter = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`p-6 border-t border-gray-100 bg-gray-50 ${className}`}>
      {children}
    </div>;
};