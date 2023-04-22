const TableBody = ({ children }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table align-items-center table-flush">
          {children}
        </table>
      </div>
    </>
  );
};

export default TableBody;
