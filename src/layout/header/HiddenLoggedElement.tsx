import { Hidden } from '../../components';
import { useUserContext } from '../../context/userContext';

interface IHiddenLoggedElementProps {
  showWhenLogged?: boolean;
  children: React.ReactNode;
}

function HiddenLoggedElement({
  showWhenLogged = false,
  children,
}: IHiddenLoggedElementProps) {
  const { user } = useUserContext();

  const showElement = (!user && !showWhenLogged) || (!!user && showWhenLogged);

  return <Hidden show={showElement}>{children}</Hidden>;
}

export default HiddenLoggedElement;
