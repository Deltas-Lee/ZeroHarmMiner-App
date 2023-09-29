const Router = require('express')
const controller = require('./controller')


const router = Router();

router.get("/", controller.getLocationPins);
router.post("/", controller.addLocationPin);
router.get("/:id", controller.getLocationPinById);
router.delete("/:id", controller.removeLocationPin);


module.exports = router;
