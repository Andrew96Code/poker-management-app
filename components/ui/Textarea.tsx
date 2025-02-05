interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Textarea({
  label,
  error,
  className = '',
  fullWidth = false,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`
          block rounded-md border-gray-300 shadow-sm
          focus:border-blue-500 focus:ring-blue-500
          dark:bg-gray-700 dark:border-gray-600 dark:text-white
          min-h-[100px]
          ${error ? 'border-red-500' : ''}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
} 