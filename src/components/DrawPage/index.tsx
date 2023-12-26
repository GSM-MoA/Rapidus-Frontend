import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./style";
import Timer from "./Timer";
import * as SVG from "../../../public/svg"
import axios from "axios";
import API from "@/api";
import { ThemeType } from "@/types/components/ThemeType";

export function DrawPage( time : {time : number}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [randTheme, setRandTheme] = useState<any>('');
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [currentColor, setCurrentColor] = useState<string>('#000000');
    const [seconds, setSeconds] = useState<number>(0);
    const [brushSize, setBrushSize] = useState<number>(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = 500;
          canvas.height = 500;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            setContext(ctx);
            ctx.lineWidth = brushSize;
          }
        }
    
        switch (time.time) {
          case 1:
            setSeconds(10);
            break;
          case 2:
            setSeconds(30);
            break;
          case 3:
            setSeconds(60);
            break;
        }
      }, [time.time]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const randNum: Number = Math.floor(Math.random() * 50);
            const response : ThemeType = (await API.get(`/draw/theme/${randNum}`)).data;
            setRandTheme(response.krName);
          } catch (error) {
            console.error("API 호출 오류:", error);
          }
        };
    
        fetchData();
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

    const onUpload = async () => {
        const getCanvas: HTMLCanvasElement | null  = canvasRef.current;
        
        if (!getCanvas) {
            console.error("그림이 존재하지 않습니다.");
            return;
        }

        const blob:Blob | null = await new Promise((resolve) => getCanvas.toBlob(resolve, 'image/png'));
        
        if (!blob) {
            console.error("Blob을 생성할 수 없습니다.");
            return;
        }

        const file = new File([blob!], 'drawing.png', { type: 'image/png' })

        const formData = new FormData();
        formData.append('file', file);
        formData.append('theme', randTheme);
        formData.append('type', `${time.time}`); 

        API.post(`/draw/upload`, formData,
        {
            headers:{
                'Content-Type': 'multipart/form-data',
            }
        }
            ).then(res => {
                console.log(res.data.file);
            })
            .catch(err => {
                console.log(err);
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
            <S.ThemeStyle>
                {randTheme}
            </S.ThemeStyle>

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