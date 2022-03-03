import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"
import { logger } from "../utils/Logger"

class GalaxiesService{
    async remove(galaxyId, userId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)
        if (galaxy.creatorId.toString() !== userId) {
            throw new Forbidden('Nope')
        }
        await galaxy.remove()
        return 'delorted'
    }
    async create(body) {
        const galaxy = await dbContext.Galaxies.create(body)
        return galaxy
    }
    async getAll(query = {}) {
        logger.log(query)
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }
    
    async getById(id) {
        const galaxy = await dbContext.Galaxies.findById(id)
        if (!galaxy) {
            throw new BadRequest('Invalid Galaxy Id')
        }
        return galaxy
    }

}

export const galaxiesService = new GalaxiesService()