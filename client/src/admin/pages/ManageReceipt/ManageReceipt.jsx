import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";
import numberWithCommas from "../../../utils/ConvertNumber";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import { Link } from "react-router-dom";

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageReceipt = () => {
  const [receipts, setReceipt] = useState([]);
  const [page, setOffset] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/receipts/getReceiptsFilters?page=${page}`)
      .then((res) => setReceipt(res.data));
  }, [page]);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(receipts || []).length}
        activePage={page}
        handleSelect={(e) => {
          setOffset(e);
        }}
      >
        <TableHeader
          showNewButton={true}
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
              { title: "Date" },
              { title: "Total" },
              { title: "Action" },
            ]}
          />
          <TableRows>
            {(receipts || []).map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    {/* <TableCell>
                      <h6 className="mb-0 text-sm">{item._id}</h6>
                    </TableCell> */}
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.Date}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {numberWithCommas(item.Total)}
                      </h6>
                    </TableCell>
                    <TableCell>
                      <Link to={`/admin/receiptDetails/${item._id}`}>
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
    </ContainerMainLayoutAdmin>
  );
};

export default ManageReceipt;
