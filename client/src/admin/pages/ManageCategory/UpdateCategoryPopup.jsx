import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const UpdateCategoryPopup = ({
  showPopup,
  handleClosePopup,
  itemCategory,
  getData,
}) => {
  console.log(itemCategory);
  const [name, setName] = useState(itemCategory.name);
  const [status, setStatus] = useState(itemCategory.email);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  useEffect(() => {
    setName(itemCategory.Name);
    setStatus(itemCategory.Status);
  }, [itemCategory]);

  const handleUpdateStaff = useCallback(async () => {
    const Category = {
      Name: name,
      Status: status,
    };

    await axios
      .put(
        `http://localhost:5000/categories/updateCategory/${itemCategory._id}`,
        Category
      )
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    await axios
      .get(`http://localhost:5000/categories/getCategoriesFilters?page=1`)
      .then((res) => getData(res.data));
  }, [name, status, handleClosePopup, itemCategory._id, getData]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Update Category"
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
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Cooperating">Cooperating</option>
                <option value="Stop cooperate">Stop cooperate</option>
              </select>
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

export default UpdateCategoryPopup;
