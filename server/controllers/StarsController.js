import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController{
    constructor() {
        super('api/stars')
        this.router
        .get('', this.getAll)

    }

    async getAll(req, res, next) {
        try {
            const stars = await starsService.getAll(req.query)
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }
}