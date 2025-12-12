"use client";

/* eslint-disable @next/next/no-img-element */
import { UnencodedFrame } from "modern-gif";
import { BsGear } from "react-icons/bs";
import { FileInput, Label } from "flowbite-react";
import { ChangeEvent, useState } from "react";

export default function GifCustomizer({
  frames,
  handle,
}: {
  frames: UnencodedFrame[];
  handle: (value: UnencodedFrame[]) => void;
}) {
  const [myFrames, setMyFrames] = useState(frames);

  const changeImgDelay = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newFrames = [...myFrames];
    newFrames[index] = {
      ...newFrames[index],
      delay: parseInt(value),
    };
    setMyFrames(newFrames);
    handle(newFrames);
  };

  const changeImgLeft = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newFrames = [...myFrames];
    newFrames[index] = {
      ...newFrames[index],
      left: parseInt(value),
    };
    setMyFrames(newFrames);
    handle(newFrames);
  };

  const changeImgTop = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newFrames = [...myFrames];
    newFrames[index] = {
      ...newFrames[index],
      top: parseInt(value),
    };
    setMyFrames(newFrames);
    handle(newFrames);
  };

  const removeFrame = (index: number) => {
    // console.log("remove ", index);
    const newFrames = [...myFrames];
    const filtrdFrames = newFrames.filter((_, i) => i !== index);
    setMyFrames(filtrdFrames);
    handle(filtrdFrames);
  };

  const addNewFrame = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { files } = e.target;
    if (files) {
      const url = URL.createObjectURL(files[0]);
      const newFrame: UnencodedFrame = {
        data: url,
        delay: 100,
        left: 0,
        top: 0,
      };
      const nFrames = [...myFrames];
      nFrames.splice(index + 1, 0, newFrame);
      setMyFrames(nFrames);
      handle(nFrames);
    }
  };

  return (
    <div className=" gif-customizer flex flex-col gap-5 mt-10">
      <h2 className=" flex gap-5 mb-2 justify-start items-center font-semibold text-xl">
        <BsGear />
        Giv Options:
      </h2>
      <ul className=" flex flex-col gap-10">
        {frames.map((f, i) => {
          return (
            <div key={i} className=" flex flex-col">
              <li className=" flex flex-row h-40 gap-4 w-full border border-gray-400 p-1">
                <div className="h-36 my-auto w-1/2 relative ">
                  <p className="absolute top-0 left-0 p-2 bg-gray-500">{i}</p>
                  <img
                    src={String(f.data)}
                    alt=""
                    className=" h-full w-full object-fill"
                  />
                </div>
                <ul className=" flex flex-col gap-2 ">
                  <div className="flex  gap-2">
                    <span className=" font-semibold w-10">Delay:</span>
                    <input
                      type="number"
                      name="delay"
                      id="delay"
                      onChange={(e) => changeImgDelay(e, i)}
                      defaultValue={f.delay || 0}
                      className=" h-8 bg-gray-100 w-16 text-center  border rounded"
                    />
                  </div>

                  <div className="flex gap-2">
                    <span className=" font-semibold w-10">Left:</span>
                    <input
                      type="number"
                      name="delay"
                      id="delay"
                      onChange={(e) => changeImgLeft(e, i)}
                      defaultValue={f.left || 0}
                      className=" h-8 bg-gray-100 w-16 text-center border rounded"
                    />
                  </div>

                  <div className="flex gap-2">
                    <span className=" font-semibold w-10">Top:</span>
                    <input
                      type="number"
                      name="delay"
                      id="delay"
                      onChange={(e) => changeImgTop(e, i)}
                      defaultValue={f.top || 0}
                      className=" h-8 bg-gray-100 w-16 text-center border rounded"
                    />
                  </div>
                  <div
                    onClick={() => removeFrame(i)}
                    className="remove shadow rounded border text-center bg-red-600 cursor-pointer ml-10 w-16 h-8"
                  >
                    Delete
                  </div>
                </ul>
              </li>
              <div className=" my-5" key={i}>
                <Label className="mb-2 block" htmlFor="file-upload">
                  Add image frame here
                </Label>
                <FileInput
                  id="file-upload"
                  accept="image/*"
                  onChange={(e) => addNewFrame(e, i)}
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
