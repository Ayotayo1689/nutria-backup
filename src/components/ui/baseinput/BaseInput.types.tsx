export interface BaseInputProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  type?: string;
  text?: string;
  label?: string;
  className?: string;
}
