import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const UpdateOrderPopup = ({
  showPopup,
  handleClosePopup,
  itemOrder,
  getData,
}) => {

  const [status, setStatus] = useState(itemOrder.Status);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  useEffect(() => {
    setStatus(itemOrder.Status);
  }, [itemOrder]);

  const handleUpdateStaff = useCallback(async () => {
    const Order = {
      Status: status,
    };

    await axios
      .put(
        `http://localhost:5000/orders/updateOrder/${itemOrder._id}`,
        Order
      )
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    await axios
      .get(`http://localhost:5000/orders/getOrderFilters?page=1`)
      .then((res) => getData(res.data));
  }, [status, handleClosePopup, itemOrder._id, getData]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Update Order"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Unconfirmed">Unconfirmed</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Delivering">Delivering</option>
                <option value="Delivered">Delivered</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </form>
        }
        modelFooter={
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateStaff}
            >
              Update
            </button>
          </>
        }
      />
    </>
  );
};

export default UpdateOrderPopup;
