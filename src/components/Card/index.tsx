import { useState } from "react";
import "./style.scss";
import Modal from "react-modal";
import quotes from '../../assets/images/quotes.png'

type CardProps = {
  imageBook: string;
  name: string;
  author: string;
  numberOfPages: number;
  publishingCompany: string;
  yearOfPublication: number;
  language: string;
  originalTitle: string;
  codeOne: string;
  codeTwo: string;
  review: string;
};

export function Card(props: CardProps) {
  const [modalsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgb(39 39 39 / 58%)"
    },
  };

  return (
    <>
      <div
        className="card"
        onClick={() => {
          handleOpenModal();
        }}
      >
        <div className="image">
          <img src={props.imageBook} alt="book-image" className="book-image" />
        </div>
        <div className="informations">
          <div className="names">
            <h1 className="book_name">{props.name}</h1>
            <p className="book_author_name">{props.author}</p>
          </div>
          <div className="more-informations">
            <p className="number-pages">{props.numberOfPages} páginas</p>
            <p className="publishing-company">{props.publishingCompany}</p>
            <p className="year-of-publication">
              Publicado em {props.yearOfPublication}
            </p>
          </div>
        </div>
      </div>

      <Modal
        onRequestClose={handleCloseModal}
        isOpen={modalsOpen}
        style={modalStyle}
      >
        <div
        className="modal"
      >
        <div className="modal_div_image">
          <img src={props.imageBook} alt="modal_book_image" className="modal_book_image" />
        </div>

        <div className="modal_informations">
          <div className="modal_names">
            <h1 className="moda_book_name">{props.name}</h1>
            <p className="book_author_name">{props.author}</p>
          </div>
          <div className="modal_more_informations">
            <p id="modal_informations_title">INFORMAÇÕES</p>
            <p className="modal_info">Páginas <span>{props.numberOfPages}</span></p>
            <p className="modal_info">Editora <span>{props.publishingCompany}</span></p>
            <p className="modal_info">Publicação <span>{props.yearOfPublication}</span></p>
            <p className="modal_info">Idioma <span>{props.language}</span></p>
            <p className="modal_info">Título Original <span>{props.originalTitle}</span></p>
            <p className="modal_info">ISBN-10 <span>{props.codeOne}</span></p>
            <p className="modal_info">ISBN-13 <span>{props.codeTwo}</span></p>
          </div>
          <div className="modal_review">
            <p id="modal_review_title">RESENHA DA EDITORIA</p>
            <p id="review"><span><img src={quotes} alt="quotes"/></span>   {props.review}</p>
          </div>

        </div>
      </div>

      </Modal>
    </>
  );
}
