import * as React from 'react';
import { cn } from '../utils';

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? 'checked' : 'unchecked'}
        className={cn(
          'peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
          checked ? 'bg-primary' : 'bg-input',
          className,
        )}
        onClick={() => onCheckedChange?.(!checked)}
        ref={ref}
        {...props}>
        <span
          data-state={checked ? 'checked' : 'unchecked'}
          className={cn(
            'pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform',
            checked ? 'translate-x-6' : 'translate-x-0.5',
          )}
        />
      </button>
    );
  },
);
Switch.displayName = 'Switch';

export { Switch };
