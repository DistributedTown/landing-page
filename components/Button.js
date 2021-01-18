import classNames from 'classnames';
import { FaCircleNotch } from 'react-icons/fa';

function Button({
  filled,
  className,
  children,
  disabled,
  loading,
  icon,
  ...rest
}) {
  const isDisabled = disabled || loading;
  const classes = classNames(
    'px-4',
    'py-2',
    'rounded-lg',
    'border-2',
    'font-bold',
    'focus:outline-none',
    'focus:ring',
    'shadow',
    'hover:shadow-lg',
    'transition',
    `border-denim`,
    { 'opacity-50': isDisabled },
    { 'cursor-not-allowed': isDisabled },
    { 'text-black': !filled, 'text-white': filled },
    { 'bg-white': !filled, 'bg-denim': filled },
    className,
  );

  return (
    <button className={classes} type="button" disabled={isDisabled} {...rest}>
      <div className="flex items-center justify-center space-x-2">
        {loading && (
          <FaCircleNotch
            className={`animate-spin ${filled ? 'text-white' : 'text-denim'}`}
          />
        )}
        {icon}
        <span>{children}</span>
      </div>
    </button>
  );
}

export default Button;
