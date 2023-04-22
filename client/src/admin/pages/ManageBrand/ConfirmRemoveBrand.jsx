import axios from "axios";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import Popup from "../../components/Popup/Popup";

const ConfirmRemove = ({ showPopup, handleClosePopup, idItem, getData }) => {
  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleRemove = useCallback(async () => {
    await axios
      .delete(`/brands/deleteBrand/${idItem}`)
      .then((res) => res)
      .catch((error) => error);

    handleClosePopup(false);

    await axios
      .get(`http://localhost:5000/brands/getBrandFilters?page=1`)
      .then((res) => getData(res.data));
  }, [idItem, handleClosePopup, getData]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Brand"
        nameButton="RemoveBrand"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this Brand ?`}
        modelFooter={
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        }
      />
    </>
  );
};

export default ConfirmRemove;
