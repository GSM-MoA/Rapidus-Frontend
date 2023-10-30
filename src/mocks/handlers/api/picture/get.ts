import { rest } from "msw";
import serverApi from "../../serverApi";


const data = [
    {
        id:1,
        fileName:"fjfjfj",
        filePath:"src/main/resource",
        likes:130,
        thema: "cat",
        type: 1,
    },
    {
        id:2,
        fileName:"fjfjfj",
        filePath:"src/main/resource",
        likes:122,
        thema: "cat",
        type: 2,
    },
    {
        id:3,
        fileName:"fjfjfj",
        filePath:"src/main/resource",
        likes:112,
        thema: "cat",
        type: 3,
    },
]
const getPictureRanking = rest.get(serverApi('/draw/most-liked/type/:type'),async (req,res,ctx) => {
    const type  = Number(req.params.type);
    return res(ctx.status(200),ctx.json(data.find((i) => i.type === type)))
})


export default getPictureRanking