import { dbContext } from "../db/DbContext"
import { logger } from "../utils/Logger"

class StarsService{
    getAll(query = {}) {
        logger.log(query)
        const stars = await dbContext
    }

}

export const starsService = new StarsService()