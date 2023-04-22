import { useCallback } from "react";

const ButtonContainer = () => {
  const handleLogicShow = useCallback((envent) => {

  }, []);

  return (
    <>
      <div className="mb-0 col-sm">
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={handleLogicShow(true)}
        >
          New
        </button>
      </div>
    </>
  );
};

export default ButtonContainer;
