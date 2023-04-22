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
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const [ordersDetails, setOrderDetails] = useState([]);
  const [products, setProduct] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/orderDetails/getOrderDetailsByOrderId/${orderId}`
      )
      .then((res) => setOrderDetails(res.data));
  }, [orderId]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/getProductsFilters`)
      .then((res) => setProduct(res.data));

  }, []);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(ordersDetails || []).length}
      >
        <TableHeader
          showNewButton={false}
          show={false}
          // handleSelect={(e) => {
          //   handleSelectRole(e);
          // }}
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Product" },
              { title: "UnitPrice" },
              { title: "Quantity" },
              { title: "Total" },
            ]}
          />
          <TableRows>
            {(ordersDetails || []).map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    {/* <TableCell>
                      <h6 className="mb-0 text-sm">{item._id}</h6>
                    </TableCell> */}
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {
                          (products || []).find(
                            (element) => element._id === item.ProductId
                          )?.Name
                        }
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {numberWithCommas(item.UnitPrice)}
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {numberWithCommas(item.Quantity)}
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {numberWithCommas(item.Total)}
                      </h6>
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

export default OrderDetails;
