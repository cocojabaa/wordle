import {createContext, useState, useContext} from "react";
import "./modal-provider.scss"

 const ModalContext = createContext(null)

export const ModalProvider = ({children}) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content)
  const closeModal = () => setModalContent(null);

  const onClickHandler = (e) => {
    if (e.target.classList.contains("modal")) closeModal()
  }

  return <ModalContext.Provider value={{openModal, closeModal}}>
    {children}
    <div className={modalContent ? "modal" : "modal modal--hidden"} onClick={onClickHandler}>
      <div className="modal__content">
        {modalContent}
      </div>
    </div>
  </ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};