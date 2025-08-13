import { createContext, useState, useContext, useEffect } from 'react';
import './modal-provider.scss';
import { useLocation } from 'react-router-dom';

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const location = useLocation();

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const onClickHandler = (e) => {
    if (e.target.classList.contains('modal')) closeModal();
  };

  useEffect(() => {
    closeModal();
  }, [location]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <div
        className={modalContent ? 'modal' : 'modal modal--hidden'}
        onClick={onClickHandler}
      >
        <div className="modal__content">{modalContent}</div>
      </div>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
