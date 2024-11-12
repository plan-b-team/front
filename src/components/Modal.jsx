import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header_title">Add Post</div>
        </div>
        <div className="modal__container__main">
          <div className="modal__container__main_date">
            <input
              className="modal__container__main_date_input-year"
              placeholder="YYYY"
              type="text"
            />
            <input
              className="modal__container__main_date_input-month"
              placeholder="MM"
              type="text"
            />
            <input
              className="modal__container__main_date_input-day"
              placeholder="DD"
              type="text"
            />
          </div>
          <div className="modal__container__main_title">
            <input
              className="modal__container__main_title_input"
              placeholder="Title..."
              type="text"
            />
          </div>
          <div className="modal__container__main_content">
            <input
              className="modal__container__main_content_input"
              placeholder="Content..."
              type="text"
            />
          </div>
        </div>
        <div className="modal__container__footer">
          <div className="modal__container__footer_add-btn">Add</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
