interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
} 