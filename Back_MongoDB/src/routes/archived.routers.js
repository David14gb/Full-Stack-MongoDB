const {Router} = require ("express")
const router = Router();
const archCtrl = require("../controller/archived.controller")

router.get("/arch", archCtrl.getStart);
router.get("/archived", archCtrl.getArchived);
router.post("/archived", archCtrl.postArchived);
router.delete("/archived", archCtrl.deleteArchived);



module.exports = router; 