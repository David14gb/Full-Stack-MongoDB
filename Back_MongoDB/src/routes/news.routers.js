const {Router} = require ("express")
const router = Router();
const newsCtrl = require("../controller/news.cotroller")

router.get("/", newsCtrl.getStart);
router.get("/document", newsCtrl.getDocument);
router.post("/document", newsCtrl.postDocument);
router.delete("/document", newsCtrl.deleteDocument);


module.exports = router; 