function Modal({ show, onClose, title, children }) {
  if (!show) return null;

  return (
    <div className="modal d-block" style={{ background: "#00000088" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>{title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
