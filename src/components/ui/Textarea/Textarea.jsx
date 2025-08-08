export default function Textarea({ label, id, placeholder, name, leftIcon, rows, ...props }) {
    return (
      <div>
        {label && (
          <label className="block font-medium text-gray-800 mb-1">
            {label}
          </label>
        )}
        <div className="flex border border-gray-800 p-2 rounded-xl transition-all duration-300 focus-within:border-blue-600 focus-within:shadow-blue-600/50 focus-within:shadow-lg relative">
          {leftIcon && <span className="pr-2">{leftIcon}</span>}
          <textarea
            id={id}
            placeholder={placeholder}
            rows={rows}
            name={name}
            className="w-full outline-0"
            {...props}
          />
        </div>
      </div>
    );
}