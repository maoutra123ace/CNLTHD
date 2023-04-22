import * as SupplierSvc from "../services/SupplierSvc.js";

export const getFiltersSupplier = async (req, res) => {
  try {
    const suppliers = await SupplierSvc.getFiltersSupplier(req.query);

    return res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const supplier = await SupplierSvc.getSupplierById(req.params);
    return res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addSupplier = async (req, res) => {
  try {
    const supplier = req.body;
    const newSupplier = await SupplierSvc.addSupplier(supplier);

    return res.status(200).json(newSupplier);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const { _id } = req.params;
    const supplier = req.body;

    await SupplierSvc.updateSupplier(_id, supplier);

    const supplierUpdate = await SupplierSvc.getSupplierById(_id);

    return res.status(200).json(supplierUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const { _id } = req.params;

    await SupplierSvc.deleteSupplier(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
