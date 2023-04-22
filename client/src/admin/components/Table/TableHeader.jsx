import { useCallback } from "react";
import style from "./style";

const TableHeader = ({
  children,
  show,
  listDataOption,
  handleSelect,
  showNewButton,
  handleShowPopup,
}) => {
  const handleSetFilter = useCallback(
    (numberFilter) => {
      handleSelect(numberFilter.target.value);
    },
    [handleSelect]
  );

  const handleOpenPopup = useCallback(() => {
    handleShowPopup(true);
  }, [handleShowPopup]);

  return (
    <>
      <div className="card-header border-0">
        <div className="row">
          {showNewButton && (
            <div className="mb-0 col-sm">
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={handleOpenPopup}
              >
                New
              </button>
            </div>
          )}

          {show && (
            <div className="form-group col-sm-3" style={style.marginBottomForm}>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => {
                  handleSetFilter(e);
                }}
              >
                {listDataOption.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>

        {children}
      </div>
    </>
  );
};

export default TableHeader;
