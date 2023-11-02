export interface OpenableProps {
  trigger: React.ReactNode;
  children?: (close: () => void) => React.ReactNode | React.ReactNode;
}
