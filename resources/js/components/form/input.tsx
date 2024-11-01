import { cn } from '@/lib/utils';
import { Input as BaseInput, InputProps as BaseInputProps } from '../ui/input';

interface InputProps extends BaseInputProps {
  error?: string;
}

export default function Input(props: InputProps) {
  return (
    <label htmlFor={props.name} className="flex flex-col gap-2">
      <span className="font-medium">{props.placeholder}</span>
      <BaseInput
        {...props}
        className={cn(props.className, props.error && 'border-red-500')}
      />
      <small className="text-red-700">{props.error}</small>
    </label>
  );
}
