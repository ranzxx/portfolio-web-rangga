import { GoPerson } from "react-icons/go";

export default function Input({ label, type = 'text', name, id, placeholder, leftIcon, ...props }) {
    return (
      <div>
        {label && (
          <label className="block font-medium text-gray-800 mb-1">
            {label}
          </label>
        )}
        <div className="flex border border-gray-800 p-2 rounded-xl transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-blue-500/50 focus-within:shadow-md">
          {leftIcon && <span className="pr-2">{leftIcon}</span>}
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="w-full outline-0"
            name={name}
            {...props}
          />
        </div>
      </div>
    );
}