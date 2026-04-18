import { useEffect } from "react";

function Toast({ message, show, onClose, type = "success" }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
      <div
        className={`alert ${
          type === "success"
            ? "alert-success"
            : type === "error"
              ? "alert-danger"
              : "alert-info"
        } shadow`}>
        {message}
      </div>
    </div>
  );
}

export default Toast;
