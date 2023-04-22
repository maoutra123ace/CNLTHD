import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import AddSupplierPopup from "./AddSupplierPopup";
import ConfirmRemove from "./ConfirmRemoveSupplier";
import { useCallback } from "react";
import UpdateSupplierPopup from "./UpdateSupplierPopup";

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageSupplier = () => {
   const [suppliers, setSupplier] = useState([]);
   const [page, setOffset] = useState(1);
   const [showPopup, setShowPopup] = useState(false);
   const [showPopupConfirm, setShowPopupConfirm] = useState(false);
   const [showPopupUpdate, setShowPopupUpdate] = useState(false);
   const [idSupplier, setIdSupplier] = useState("");
   const [itemSupplier, setItemSupplier] = useState({});

 useEffect(() => {
   axios
     .get(`http://localhost:5000/suppliers/getSupplierFilters?page=${page}`)
     .then((res) => setSupplier(res.data));
 }, [page]);

  const handleRemovePopup = useCallback((value) => {
    setShowPopupConfirm(true);
    setIdSupplier(value);
  }, []);

  const handleShowPopupUpdate = useCallback((value) => {
    setShowPopupUpdate(true);
    setItemSupplier(value);
  }, []);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(suppliers || []).length}
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
          // }}]
        />
        <TableBody>
          <TableCol
            listCol={[
              // { title: "Id" },
              { title: "Name" },
              { title: "Address" },
              { title: "Action" },
            ]}
          />
          <TableRows>
            {(suppliers || []).map((item) => {
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
                      <h6 className="mb-0 text-sm">{item.Address}</h6>
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

      <AddSupplierPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        getData={(e) => setSupplier(e)}
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupConfirm(e)}
        idItem={idSupplier}
        getData={(e) => setSupplier(e)}
      />
      <UpdateSupplierPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => setShowPopupUpdate(e)}
        itemSupplier={itemSupplier}
        getData={(e) => setSupplier(e)}
      />
    </ContainerMainLayoutAdmin>
  );
};

export default ManageSupplier;
