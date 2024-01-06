"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";

const MediaPlayer = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    overflowY: "scroll",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    outline: "none",
    borderRadius: "5px",
    p: 2,
    color: "#222",
    background: "#FFF",
    zIndex: "50",
    textAlign: "center",
    width: "fit",
  };
  return (
    <div className="lg:w-full h-[240px] md:h-[395px] lg:h-[750px] justify-center items-center px-4 pt-4 md:px-12 lg:px-28 lg:pt-16 rounded">
      <ReactPlayer
        className="rounded"
        url={"htps:/youtu.be/Nw4Bq3Gembw?si=uD271pGzkA1wIgDR"}
        // controls
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default MediaPlayer;
