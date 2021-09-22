import { useCallback, useState } from 'react';
import { Switch, useHistory } from 'react-router-dom';

import Text from 'components/text';
import useButtonEffect from 'hooks/useButtonEffect/useButtonEffect';
import { PATHS } from 'routes';

const Views: React.FC = ({ children, ...props }) => {
  const history = useHistory();
  const [showNotice, setShowNotice] = useState(false);

  const handleBackButtonClick = useCallback(() => {
    if (history.location.pathname !== PATHS.Home) {
      history.goBack();
    } else if (showNotice) {
      window.close();
    } else {
      setShowNotice(true);

      setTimeout(() => {
        setShowNotice(false);
      }, 5 * 1000);
    }
  }, [history, showNotice]);

  useButtonEffect('Back', handleBackButtonClick);

  return (
    <div {...props}>
      {showNotice && (
        <div className="fixed top-2 right-2 p-4 z-999 shadow-xl rounded-xl bg-gray-500 bg-opacity-70">
          <Text>
            Чтобы закрыть приложение,
            <br />
            нажмите кнопку "назад" ещё раз
          </Text>
        </div>
      )}
      <Switch>{children}</Switch>
    </div>
  );
};

export default Views;
