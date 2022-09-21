// import logo from './logo.svg';
import React, { useState } from 'react';
import useModal from './hooks/useModal';
import Modal from './components/Modal';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [email, setEmail ] = useState({input:'', valid: null});
  const [password, setPassword ] = useState({input:'', valid: null});
  const [passwordConfirm, setPasswordConfirm ] = useState({input:'', valid: null});

  const [isOpenLoginModal, openLoginModal ,closeLoginModal  ] = useModal();
  const [isOpenRegisterModal, openRegisterModal ,closeRegisterModal  ] = useModal();

  const expression = {
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/,
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <nav></nav>
        <button onClick={openLoginModal}>Open Modal1</button>

        <Modal 
          isOpen={isOpenLoginModal}
          closeModal={closeLoginModal}
          >
          <Login 
            openModal={openRegisterModal} 
            closeModal={closeLoginModal} 
            email={email} 
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            expression={expression}
             />
        </Modal>
        <Modal 
          isOpen={isOpenRegisterModal}
          closeModal={closeRegisterModal}
        >
          <Register 
            openModal={openLoginModal} 
            closeModal={closeRegisterModal}
            email={email} 
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordConfirm={passwordConfirm}
            setPasswordConfirm={setPasswordConfirm}
            expression={expression}
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;
