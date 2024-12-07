import { Hidden } from '../../components';
import { useUserContext } from '../../context/userContext';

function HiddenLoggedElement({ showWhenLogged = false, children }) {
  const { user } = useUserContext();

  const showElement = (!user && !showWhenLogged) || (!!user && showWhenLogged);

  return <Hidden show={showElement}>{children}</Hidden>;
}

export default HiddenLoggedElement;
