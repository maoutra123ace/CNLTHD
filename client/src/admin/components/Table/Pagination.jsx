import React, { useCallback, useMemo } from "react";

const Pagination = ({ totalPages, activePage, handleSelect }) => {
  const handleClickPage = useCallback(
    async (field, e) => {
      if (field === "number") {
        await handleSelect(e.target.value);
      } else if (field === "next") {
        await handleSelect(e + 1);
      } else if (field === "previous") {
        await handleSelect(e - 1);
      }
    },
    [handleSelect]
  );

  const renderPage = useMemo(() => {
    if (totalPages === 1) return [];
    let start = activePage - 2;
    let end = activePage + 3;

    if (start < 1) {
      start = 1;
      end = 6;
    }

    if (end > totalPages) {
      end = totalPages;
    }

    let list = [];
    for (let i = start; i <= end; i++) {
      list.push(
        <li className={`page-item ${activePage === i && "active"}`} key={i}>
          <button
            className="page-link"
            onClick={(e) => {
              handleClickPage("number", e);
            }}
            value={i}
          >
            {i}
          </button>
        </li>
      );
    }
    return list;
  }, [totalPages, handleClickPage, activePage]);
  return (
    <>
      <div className="card-footer py-4">
        <nav aria-label="...">
          <ul className="pagination justify-content-end mb-0">
            {activePage > 1 && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handleClickPage("previous", activePage)}
                >
                  <i className="fas fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </button>
              </li>
            )}
            {renderPage}
            {activePage < totalPages && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handleClickPage("next", activePage)}
                >
                  <i className="fas fa-angle-right" />
                  <span className="sr-only">Next</span>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
