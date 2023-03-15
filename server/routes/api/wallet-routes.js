const router = require("express").Router();
const walletController = require("../../controllers/wallet-controller");



const {
  createWallet,
  getAllWallets,
  getWalletById,
  updateWallet,
  deleteWallet,
} =walletController;


router.route("/").get(getAllWallets);
router.route("/:id").get(getWalletById);
router.route("/").post(createWallet);
router.route("/:id").put(updateWallet);
router.route("/:id").delete(deleteWallet);
