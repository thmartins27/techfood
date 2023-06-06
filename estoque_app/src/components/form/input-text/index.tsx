interface Props {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  label?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
}

const InputText: React.FC<Props> = ({
  type,
  placeholder,
  name,
  label,
  onChange,
  value,
  disabled,
}) => {
  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={name}
          className="block text-[1.3rem] font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      ) : null}

      <div className="mt-3">
        <input
          disabled={disabled}
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ea1d2c] sm:text-sm sm:leading-6 "
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export { InputText };
