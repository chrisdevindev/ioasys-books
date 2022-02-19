import logo from "../../assets/images/ioasys-logo-black.png";
import book1 from "../../assets/books-images/Book-1.png";
import book2 from "../../assets/books-images/Book-2.png";
import book3 from "../../assets/books-images/Book-3.png";
import book4 from "../../assets/books-images/Book-4.png";
import book5 from "../../assets/books-images/Book-5.png";
import book6 from "../../assets/books-images/Book-6.png";
import book7 from "../../assets/books-images/Book-7.png";
import book8 from "../../assets/books-images/Book-8.png";
import book9 from "../../assets/books-images/Book-9.png";
import book10 from "../../assets/books-images/Book-10.png";
import book11 from "../../assets/books-images/Book-11.png";

import { FiLogOut, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import "./style.scss";
import { useState } from "react";

export default function Home() {
  const [modalsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  const logoutModalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "549px",
      height: "195px"
    },
    overlay: {
      backgroundColor: "rgb(39 39 39 / 58%)"
    },
  };

  return (
    <div className="home_page">
      <div className="home_container">

      <Modal 
      onRequestClose={handleCloseModal}
      isOpen={modalsOpen}
      style={logoutModalStyle}>
        <div className="exitModal">
          <div className="exitModalTitle">
            <p id="exit">Sair</p>
            <p className="exit_modal_description">Você tem certeza que deseja sair?</p>
          </div>
          <div className="close_modal_buttons">
            <button className="cancel_button" onClick={() => handleCloseModal()}>Cancelar</button>
            <button className="ok_button" onClick={() => navigate("/")}>Ok</button>
          </div>
        </div>
      </Modal>

        <header>
          <div className="logo_group">
            <img id="logo" src={logo} alt="logo-ioasys"/>
            <p>Books</p>
          </div>
          <div className="info">
            <p>Bem vindo, Guilherme</p>
            <button id="logout" onClick={() => handleOpenModal()}>
              <FiLogOut />
            </button>
          </div>
        </header>

        <div className="books">
          <Card
            imageBook={book1}
            author="Geoffrey A. Moore"
            name="Crossing the Chasm"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Crossing the Chasm"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book2}
            author="Steve Krug"
            name="Don’t Make me Think"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Don’t Make me Think"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book3}
            author="Don Norman"
            name="The Design of Everyday Things"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="T.D. Everyday Things"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book4}
            author="Jake Knapp"
            name="Sprint"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Sprint"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book5}
            author="Tim Brown"
            name="Change By Design"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Change By Design"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book6}
            author="Mary Johnson, Wiliam Pitt"
            name="Web Design 101"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Web Design 101"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book7}
            author="Ken Kocienda"
            name="Creative Selection"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Creative Selection"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book8}
            author="Charles Duhigg"
            name="The Power of Habit"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="The Power of Habit"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book9}
            author="Nir Eyal Ryan Hoover"
            name="The Making of a Manager"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="The Making of a Manager"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book10}
            author="Nir Eyal Ryan Hoover"
            name="Hooked"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Hooked"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book11}
            author="Unknown Author"
            name="The Unknown Book"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="The Unknown Book"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
          <Card
            imageBook={book10}
            author="Nir Eyal Ryan Hoover"
            name="Hooked"
            numberOfPages={150}
            publishingCompany="Editora Loyola"
            yearOfPublication={2020}
            originalTitle="Hooked"
            language="Inglês"
            codeOne="0062856626"
            codeTwo="978-0062856623"
            review="The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
            "
          />
        </div>

        <div className="pagination">
          <p id="page_information">Página 1 de 100</p>
          <button id="pagination_back">
            <FiChevronLeft />
          </button>
          <button id="pagination_next">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
