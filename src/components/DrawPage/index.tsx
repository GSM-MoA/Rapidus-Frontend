import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./style";
import Timer from "./Timer";
import * as SVG from "../../../public/svg"
import axios from "axios";
import API from "@/api";
export function DrawPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [currentColor, setCurrentColor] = useState<string>('#000000');
    const [seconds, setSeconds] = useState<number>(10);
    const [brushSize, setBrushSize] = useState<number>(5);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth * 0.5;
            canvas.height = window.innerHeight * 0.5;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                setContext(ctx);
                ctx.lineWidth = brushSize;
            }
        }
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!context || seconds <= 0) return;
        const { offsetX, offsetY } = e.nativeEvent;
        context.beginPath();
        context.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !context || seconds <= 0) return;
        const { offsetX, offsetY } = e.nativeEvent;
        context.strokeStyle = currentColor;
        context.lineWidth = brushSize;
        context.lineTo(offsetX, offsetY);
        context.stroke();
    };

    const stopDrawing = () => {
        if (context) {
            context.closePath();
        }
        setIsDrawing(false);
    };

    const onReset = () => {
        if (!context) return;
        if (seconds > 0) context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    const onUpload = () => {
        const getCanvas: any = canvasRef.current;
        const dataUrl = getCanvas.toDataURL('image/png');
        const imageData = dataUrl.split(',')[1];
        API.post(`/upload-base64`,
            {
                file: imageData,
                theme: 'cat',
                type: 1
            }).then(res => {
                console.log(res.data.file);
            })
    }

    const onColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentColor(e.target.value);
    };

    const onBrushSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBrushSize(parseInt(e.target.value, 10));
    };

    return (
        <S.CanvasContainer>
            <Timer
                initialTime={seconds}
                onTimeout={() => {
                    setSeconds(0);
                    setIsDrawing(false)
                }
                } />
            <S.CanvasStyle>
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseOut={stopDrawing}
                />
            </S.CanvasStyle>
            <S.ToolBarStyle>
                <S.Button onClick={onReset}>
                    <SVG.ResetIcon />
                </S.Button>
                <S.ColorPickStyle>
                    <input type="color" onChange={onColorChange} value={currentColor} />
                </S.ColorPickStyle>
                <input type="range" min="1" max="50" value={brushSize} onChange={onBrushSizeChange} />
            </S.ToolBarStyle>
            {seconds == 0 && (
                <S.UploadStyle>
                    <S.Button onClick={onUpload}>
                        <SVG.UploadIcon />
                    </S.Button>
                </S.UploadStyle>
            )}
        </S.CanvasContainer>
    );

}


export default DrawPage;