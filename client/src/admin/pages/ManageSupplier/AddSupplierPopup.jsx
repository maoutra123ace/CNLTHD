import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const AddSupplierPopup = ({ showPopup, handleClosePopup, getData }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleCreateStaff = useCallback(async () => {
    const Supplier = {
      Name: name,
      Address: address,
    };

    await axios
      .post("http://localhost:5000/suppliers/addSupplier", Supplier)
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    await axios
      .get("http://localhost:5000/suppliers/getSupplierFilters?page=1")
      .then((res) => getData(res.data));
  }, [name, address, handleClosePopup, getData]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Add Supplier"
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
              onClick={handleCreateStaff}
            >
              Create
            </button>
          </>
        }
      />
    </>
  );
};

export default AddSupplierPopup;
