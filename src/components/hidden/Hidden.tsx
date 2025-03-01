interface IHiddenProps {
  show?: boolean;
  children: React.ReactNode;
}

function Hidden({ show = false, children }: IHiddenProps) {
  if (!show) return null;

  return children;
}

export default Hidden;
