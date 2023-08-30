interface ChatInputType extends React.ComponentProps<'input'> {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}

const ChatInput: React.FC<ChatInputType> = ({
  type,
  name,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`w-full border border-gray-300 rounded-full focus:outline-none px-4 py-2 h-12 ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default ChatInput;
