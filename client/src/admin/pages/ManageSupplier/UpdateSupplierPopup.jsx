import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const UpdateSupplierPopup = ({
  showPopup,
  handleClosePopup,
  itemSupplier,
  getData,
}) => {
  const [name, setName] = useState(itemSupplier.Name);
  const [address, setAddress] = useState(itemSupplier.Address);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  useEffect(() => {
    setName(itemSupplier.Name);
    setAddress(itemSupplier.Address);
  }, [itemSupplier]);

  const handleUpdateStaff = useCallback(async () => {
    const Supplier = {
      Name: name,
      Address: address,
    };

    await axios
      .put(
        `http://localhost:5000/suppliers/updateSupplier/${itemSupplier._id}`,
        Supplier
      )
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    await axios
      .get("http://localhost:5000/suppliers/getSupplierFilters?page=1")
      .then((res) => getData(res.data));
  }, [name, address, handleClosePopup, itemSupplier._id, getData]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Update Supplier"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div> */}
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

export default UpdateSupplierPopup;
