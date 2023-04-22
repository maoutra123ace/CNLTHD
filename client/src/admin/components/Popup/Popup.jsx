import { useCallback } from "react";

const Popup = ({
  modelBody,
  showPopup,
  handleClosePopup,
  name,
  minWidth,
  modelFooter,
}) => {
  const handleClose = useCallback(() => {
    handleClosePopup(false);
  }, [handleClosePopup]);

  return (
    <div
      className={`modal fade ${showPopup && "show"}`}
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={
        showPopup
          ? { display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }
          : {}
      }
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ minWidth }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={handleClose}>
                ×
              </span>
            </button>
          </div>
          <div className="modal-body scroll">{modelBody}</div>
          <div className="modal-footer">{modelFooter}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
