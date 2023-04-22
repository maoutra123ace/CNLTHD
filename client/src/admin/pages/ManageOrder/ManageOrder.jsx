import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import numberWithCommas from "../../../utils/ConvertNumber";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import UpdateOrderPopup from "./UpdateOrderPopup";
import { Link } from "react-router-dom";

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageOrder = () => {
  const [orders, setOrder] = useState([]);
  const [page, setOffset] = useState(1);
  const [account, setAccount] = useState([]);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);
  const [itemOrder, setItemOrder] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/getOrderFilters?page=${page}`)
      .then((res) => setOrder(res.data));
  }, [page]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/accounts/getAccountsFilters?page=1`)
      .then((res) => setAccount(res.data));
  }, []);

  const handleShowPopupUpdate = useCallback((value) => {
    setShowPopupUpdate(true);
    setItemOrder(value);
  }, []);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(orders || []).length}
        activePage={page}
        handleSelect={(e) => {
          setOffset(e);
        }}
      >
        <TableHeader
          showNewButton={false}
          show={false}
          listDataOption={listDataOption}
          // handleSelect={(e) => {
          //   handleSelectRole(e);
          // }}
        />
        <TableBody>
          <TableCol
            listCol={[
              // { title: "Id" },
              { title: "AccountId" },
              { title: "Date" },
              { title: "Total" },
              { title: "Status" },
              // { title: "Email" },
              // { title: "Phone" },
              // { title: "Address" },
              { title: "Action" },
            ]}
          />
          <TableRows>
            {(orders || []).map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    {/* <TableCell>
                      <h6 className="mb-0 text-sm">{item._id}</h6>
                    </TableCell> */}
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {
                          (account || []).find(
                            (element) => element._id === item.AccountId
                          )?.name
                        }
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.Date}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {numberWithCommas(item.Total)}
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.Status}</h6>
                    </TableCell>
                    {/* <TableCell>
                    <h6 className="mb-0 text-sm">{item.Email}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Phone}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Address}</h6>
                  </TableCell> */}
                    <TableCell>
                      <button
                        type="type"
                        className="btn btn-sm btn-info"
                        onClick={() => handleShowPopupUpdate(item)}
                      >
                        <i class="fa-solid fa-pencil"></i>
                      </button>
                      <Link
                        to={`/admin/orderDetails/${item._id}`}                      
                      >
                        <button
                          type="type"
                          className="btn btn-sm btn-primary"
                          // onClick={() => handleShowPopupUpdate(item)}
                        >
                          Details
                        </button>
                      </Link>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>

      <UpdateOrderPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => setShowPopupUpdate(e)}
        itemOrder={itemOrder}
        getData={(e) => setOrder(e)}
      />
    </ContainerMainLayoutAdmin>
  );
};

export default ManageOrder;
