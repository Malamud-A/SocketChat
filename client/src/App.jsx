import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import reducer from './reducer';
import Messenger from './components/Messenger';
import Modals from './components/Modals';
import utils from './utils';


const App = () => {
  const initialState = {
    conversations: [],
    selectedConversation: {},
    userId: 1,
    socket: {},
  };
  const [store, dispatch] = useReducer(reducer, initialState);
  const [selectUsernameModal, setSelectUsernameModal] = useState(false);

  const toggleModal = () => {
    setSelectUsernameModal(!selectUsernameModal);
  };

  useEffect(() => {
    if (utils.getUUID()) {
      utils.setupSocket(dispatch);
    } else {
      console.log('toggled');
      toggleModal();
    }
  }, []);
  console.log('store', store);
  console.log('socket', store.socket);

  return (
  <div>
    <Messenger
      store={store}
      dispatch={dispatch}
    />
    <Modals.selectUsername
      isOpen={selectUsernameModal}
      toggleModal={toggleModal}
      dispatch={dispatch}
    />
  </div>
  );
};

export default App;
