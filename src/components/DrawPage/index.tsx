import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage, Line, Rect } from "react-konva";
import API from "@/api";
import { ThemeType } from "@/types/components/ThemeType";
import { v4 as uuidv4 } from "uuid"; 
import * as SVG from "@/../public/svg";
import * as S from "./style";

export default function DrawPage({ time }: { time: number }){
  const [randTheme, setRandTheme] = useState<string>("");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lines, setLines] = useState<{ points: number[]; color: string; brushSize: number }[]>([]);
  const [currentColor, setCurrentColor] = useState<string>("#000000");
  const [brushSize, setBrushSize] = useState<number>(5);
  const stageRef = useRef<any>(null);

  const reTimer = () => {
    switch (time) {
      case 1:
        return 10;
      case 2:
        return 30;
      case 3:
        return 60;
      default:
        return 0;
    }
  };

  const [timer, setTimer] = useState<number>(reTimer());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (timer === 0) {
      setIsDrawing(false);
    }
  }, [timer]);

  const fetchTheme = async () => {
    try {
      const randNum: number = Math.floor(Math.random() * 50);
      const response: ThemeType = (await API.get(`/draw/theme/${randNum}`)).data;
      setRandTheme(response.krName);
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  useEffect(() => {
    fetchTheme();
  }, [time]);


  const startDrawing = (e: any) => {
    if (timer <= 0) return;
    setIsDrawing(true);

    setLines([...lines, { points: [e.evt.layerX, e.evt.layerY], color: currentColor, brushSize }]);
  };

  const draw = (e: any) => {
    if (!isDrawing || timer <= 0) return;
    const lastLine = lines[lines.length - 1];
    if (!lastLine.points) return;

    lastLine.points = lastLine.points.concat([e.evt.layerX, e.evt.layerY]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines([...lines]);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const onResetCanvas = () => {
    if (timer > 0) {
      setLines([]);
    }
  };

  const onReset = () => {
    setLines([]);
    setTimer(reTimer());
    fetchTheme();
  };

  const onUpload = async () => {
    const stage = stageRef.current;

    if (!stage) {
      alert("그림이 존재하지 않습니다.");
      return;
    }

    const dataUrl = stage.toDataURL();
    const blob = await fetch(dataUrl).then((res) => res.blob());

    const file = new File([blob], "drawing.png", { type: "image/png" });

    const formData = new FormData();
    formData.append("file", file);
    const jsonData = { theme: randTheme, type: `${time}` };
    formData.append("data", new Blob([JSON.stringify(jsonData)], { type: "application/json" }));
  
    try {
      const response = await API.post(`/draw/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        alert("성공적으로 등록 되었습니다.");
        onReset();
      }
    } catch (error) {
      console.error("업로드 오류:", error);
    }
  };

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(e.target.value);
  };

  const onBrushSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(e.target.value, 10));
  };

  return (
    <S.CanvasContainer>
      <S.ThemeStyle>{randTheme}</S.ThemeStyle>
      남은 시간: {timer}
      <S.CanvasStyle>
        <Stage
          width={500}
          height={500}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          ref={stageRef}
          style={{ background: "#ffffff" }}
        >
          <Layer>
            <Rect width={500} height={500} fill="#ffffff" />
            {lines.map((line) => (
              <Line
                key={uuidv4()}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.brushSize}
                tension={0.5}
                lineCap="round"
              />
            ))}
          </Layer>
        </Stage>
      </S.CanvasStyle>
      <S.ToolBarStyle>
        <S.Button onClick={onReset}>
          <SVG.ResetIcon />
        </S.Button>
        <S.Button onClick={onResetCanvas}>
          <SVG.LitterBin />
        </S.Button>
        <S.ColorPickStyle>
          <input type="color" onChange={onColorChange} value={currentColor} />
        </S.ColorPickStyle>
        <input type="range" min="1" max="50" value={brushSize} onChange={onBrushSizeChange} />
      </S.ToolBarStyle>
      {timer === 0 && (
        <S.UploadStyle>
          <S.Button onClick={onUpload}>
            <SVG.UploadIcon />
          </S.Button>
        </S.UploadStyle>
      )}
    </S.CanvasContainer>
  );
};


