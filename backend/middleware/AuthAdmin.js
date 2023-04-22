import { AccountModel } from "../models/data/AccountModel.js";

export const authAdmin = async (req, res, next) => {
  try {
    const account = await AccountModel.findOne({ _id: req.account.id });

    if (account.role !== 1)
      return res.status(500).json({ msg: "Admin resources access denied." });

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export default authAdmin;
