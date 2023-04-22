import style from "./style";

const TableRows = ({ children }) => {
  return (
    <>
      <tbody className="list" style={style.borderTop}>
        {children}
      </tbody>
    </>
  );
};

export default TableRows;
