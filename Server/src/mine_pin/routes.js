const Router = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getMinePins);
router.post("/", controller.addLocationPin);
router.get("/:id", controller.getLocationPinById);
router.put("/:id", controller.updateLocationPin);
router.delete("/:id", controller.removeLocationPin);

module.exports = router;
