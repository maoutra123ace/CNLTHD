import TableBody from "../../components/Table/TableBody";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";

const data_dummy = [
  {
    id: 1,
    name: "Khuong Huy Hieu",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 2,
    name: "Truong Nhat Vy",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 3,
    name: "Phan The Hieu",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 4,
    name: "Thai Kim Luong",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 5,
    name: "Lam Chi Hien",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
];

const listDataOption = [
  { name: "Hieu", value: 1 },
  { name: "Hien", value: 2 },
  { name: "Vy", value: 3 },
];

const TestAdmin = () => {
  const totalPages = 10;
  const activePage = 2;
  return (
    <ContainerMainLayoutAdmin>
      {/* <>
        <TableContainer
          showPagination={true}
          totalPages={totalPages}
          activePage={activePage}
        >
          <TableHeader
            showNewButton={true}
            show={true}
            listDataOption={listDataOption}
          />
          <TableBody>
            <TableCol
              listCol={[
                { title: "Hieu" },
                { title: "Hien" },
                { title: "Edit" },
              ]}
            />
            <TableRows>
              {data_dummy.map((item) => {
                return (
                  <>
                    <TableRow key={item}>
                      <TableCell>
                        <h6 className="mb-0 text-sm">{item.name}</h6>
                      </TableCell>
                      <TableCell>
                        <h6 className="mb-0 text-sm">{item.name}</h6>
                      </TableCell>
                      <TableCell>
                        <button type="type" className="btn btn-sm btn-danger">
                          Remove
                        </button>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableRows>
          </TableBody>
        </TableContainer>
      </> */}
    </ContainerMainLayoutAdmin>
  );
};

export default TestAdmin;
