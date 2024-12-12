
import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();

  const liveStream = async (element) => {
    const appID =1420228908;
    const serverSecret = "6e44227e697b36ee39ed1e45e4b095bf";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Pooja"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${id}`,
        },
      ],
    });
  };

  return (
    <>
      <div ref={liveStream} />
    </>
  );
};

export default Room;