import { Router } from "express";
import Validate from "../middleware/Validate";
import auth from "../middleware/Authorize";
import UsersController from "../controllers/UsersController";

const router = Router();



router.post(
    "/apikey/binance",
    UsersController.saveBinance
);

router.post(
    "/apikey/kraken",
    UsersController.saveKraken
);

router.post(
    "/apikey/kucoin",
    UsersController.saveKucoin
);




export default router; 
