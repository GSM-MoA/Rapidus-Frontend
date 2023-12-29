import getPictureRanking from './api/picture/get'
import getMostPicture from './api/picture/[id]/get'


const handlers = [
    getPictureRanking,
    getMostPicture
]
export default handlers;