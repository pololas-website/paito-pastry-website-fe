function Hidden({ show = false, children }) {
  if (!show) return null;

  return children;
}

export default Hidden;
