const TableCol = ({ listCol }) => {
  return (
    <>
      <thead className="thead-light">
        <tr>
          {listCol.map((item, index) => {
            return (
              <th scope="col" className="sort" data-sort="name" key={index}>
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableCol;
