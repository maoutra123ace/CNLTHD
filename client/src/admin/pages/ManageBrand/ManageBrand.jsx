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
import AddBrandPopup from "./AddBrandPopup";
import ConfirmRemove from "./ConfirmRemoveBrand";
import UpdateBrandPopup from "./UpdateBrandPopup";

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageBrand = () => {
  const [brands, setBrand] = useState([]);
  const [page, setOffset] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);
  const [idBrand, setIdBrand] = useState("");
  const [itemBrand, setItemBrand] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/brands/getBrandFilters?page=${page}`)
      .then((res) => setBrand(res.data));
  }, [page]);


  const handleRemovePopup = useCallback((value) => {
    setShowPopupConfirm(true);
    setIdBrand(value);
  }, []);

  const handleShowPopupUpdate = useCallback((value) => {
    setShowPopupUpdate(true);
    setItemBrand(value);
  }, []);


  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(brands || []).length}
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
            {(brands || []).map((item) => {
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

      <AddBrandPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        getData={(e) => setBrand(e)}
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupConfirm(e)}
        idItem={idBrand}
        getData={(e) => setBrand(e)}
      />
      <UpdateBrandPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => setShowPopupUpdate(e)}
        itemBrand={itemBrand}
        getData={(e) => setBrand(e)}
      />
    </ContainerMainLayoutAdmin>
  );
};

export default ManageBrand;
