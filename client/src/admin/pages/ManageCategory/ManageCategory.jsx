import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import AddCategoryPopup from "./AddCategoryPopup";
import ConfirmRemove from "./ConfirmRemoveCategory";
import UpdateCategoryPopup from "./UpdateCategoryPopup";

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageCategory = () => {
  const [categories, setCategory] = useState([]);
  const [page, setOffset] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);
  const [idCategory, setIdCategory] = useState("");
  const [itemCategory, setItemCategory] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories/getCategoriesFilters?page=${page}`)
      .then((res) => setCategory(res.data));
  }, [page]);

  const handleRemovePopup = useCallback((value) => {
    setShowPopupConfirm(true);
    setIdCategory(value);
  }, []);

  const handleShowPopupUpdate = useCallback((value) => {
    setShowPopupUpdate(true);
    setItemCategory(value);
  }, []);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(categories || []).length}
        activePage={page}
        handleSelect={(e) => {
          setOffset(e);
        }}
      >
        <TableHeader
          showNewButton={true}
          show={false}
          listDataOption={listDataOption}
          handleShowPopup={(e) => setShowPopup(e)}
          // handleSelect={(e) => {
          //   handleSelectRole(e);
          // }}
        />
        <TableBody>
          <TableCol
            listCol={[
              // { title: "Id" },
              { title: "Name" },
              { title: "Status" },
              { title: "Action" },
            ]}
          />
          <TableRows>
            {(categories || []).map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    {/* <TableCell>
                      <h6 className="mb-0 text-sm">{item._id}</h6>
                    </TableCell> */}
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.Name}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.Status}</h6>
                    </TableCell>
                    <TableCell>
                      <button
                        type="type"
                        className="btn btn-sm btn-info"
                        onClick={() => handleShowPopupUpdate(item)}
                      >
                        <i class="fa-solid fa-pencil"></i>
                      </button>
                      <button
                        type="type"
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemovePopup(item._id)}
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>

      <AddCategoryPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        getData={(e) => setCategory(e)}
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupConfirm(e)}
        idItem={idCategory}
        getData={(e) => setCategory(e)}
      />
      <UpdateCategoryPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => setShowPopupUpdate(e)}
        itemCategory={itemCategory}
        getData={(e) => setCategory(e)}
      />
    </ContainerMainLayoutAdmin>
  );
};

export default ManageCategory;
