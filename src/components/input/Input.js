import './input.css';

function Input({ className, children, ...rest }) {
  const currentClassName = `input ${className}`;

  if (children)
    return (
      <span className={currentClassName}>
        <input {...rest} />
        {children}
      </span>
    );

  return <input className={currentClassName} {...rest} />;
}

export default Input;
