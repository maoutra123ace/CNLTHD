import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const UpdateProductPopup = ({
  showPopup,
  handleClosePopup,
  itemProduct,
  brands,
  categories,
  getData,
}) => {
  const [name, setName] = useState(itemProduct.Name);
  const [brandId, setBrandId] = useState(itemProduct.BrandId);
  const [categoryId, setCategoryId] = useState(itemProduct.CategoryId);
  const [image, setImage] = useState(itemProduct.Image);
  const [description, setDescription] = useState(itemProduct.Description);
  const [price, setPrice] = useState(itemProduct.Price);
  const [status, setStatus] = useState(itemProduct.Status);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  useEffect(() => {
    setName(itemProduct.Name);
    setBrandId(itemProduct.BrandId);
    setCategoryId(itemProduct.CategoryId);
    setImage(itemProduct.Image);
    setDescription(itemProduct.Description);
    setPrice(itemProduct.Price);
    setStatus(itemProduct.Status);
  }, [itemProduct]);

  const handleUpdateStaff = useCallback(async () => {
    const Product = {
      Name: name,
      BrandId: brandId,
      CategoryId: categoryId,
      Image: image,
      Description: description,
      Price: price,
      Status: status,
    };

    await axios
      .put(
        `http://localhost:5000/Products/updateProduct/${itemProduct._id}`,
        Product
      )
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    axios
      .get(`http://localhost:5000/Products/getProductsFilters?page=1`)
      .then((res) => getData(res.data));
  }, [
    name,
    brandId,
    categoryId,
    image,
    description,
    price,
    status,
    handleClosePopup,
    itemProduct._id,
    getData,
  ]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Update Product"
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
              <label htmlFor="exampleFormControlSelect1">Brand</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setBrandId(e.target.value)}
              >
                {(brands || []).map((brand) => (
                  <option value={brand?._id}>{brand?.Name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {(categories || []).map((category) => (
                  <option value={category?._id}>{category?.Name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Image</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                value={description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Price</label>
              <input
                type="number"
                min="0"
                max="1"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ex: 0 - 1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                <option value="Trading">Trading</option>
                <option value="Stop trading">Stop trading</option>
                <option value="Sold out">Sold out</option>
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

export default UpdateProductPopup;
