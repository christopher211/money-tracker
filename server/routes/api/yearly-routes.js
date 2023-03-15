const router = require('express').Router();
const yearlyController = require('../../controllers/yearlyController');


const {
    getYearlyDataById,    updateYearly,
     deleteYearly,
} = yearlyController;


router.route("/:user_id/:type").get(getYearlyDataById);
router.route("/:id").put(updateYearly);
router.route("/:id").delete(deleteYearly);


module.exports = router;


