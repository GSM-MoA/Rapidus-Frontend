import serverApi from "@/mocks/handlers/serverApi"
import { rest } from "msw"

const data = [
    {
        id: 1,
        image: "사진1"
    },
    {
        id: 2,
        image: "사진2"
    },
    {
        id: 3,
        image: "사진3"
    }
]

const getMostPicture = rest.get(
    serverApi('/draw/:id/image'),
    async (req, res, ctx) => {
        const id = Number(req.params.id)


        if (!id) return res(ctx.status(400))

        const image = data.find((i) => i.id === id)?.image;

        if (!image) {
            return res(ctx.status(404), ctx.json({ error: "Image not found" }));
        }

        return res(
            ctx.set({
                'Content-Type': 'image/png'
            }),
            ctx.status(200),
            ctx.body(image)
        );
    }
);

export default getMostPicture;