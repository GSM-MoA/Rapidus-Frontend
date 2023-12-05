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

        // 이미지 응답을 보내기 위해 데이터 URI 형식으로 변환

        // Content-Type을 이미지로 설정하고 이미지 데이터 URI를 응답으로 보냄
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