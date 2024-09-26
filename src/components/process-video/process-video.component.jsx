import { useRef, useEffect } from "react";

import videoBg from "../../assets/order-process.mp4";
import { ParentDiv, VideoWrapper } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { IphoneVideo } from "../../styles/video/video.styles";

const ProcessVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const { current: videoElement } = videoRef;
    videoElement.setAttribute("muted", "");
  }, []);

  return (
    <ParentDiv>
      <Text>
        see how easy it is to order by tapping the play button on the video
        below!
      </Text>
      <VideoWrapper>
        <IphoneVideo src={videoBg} controls ref={videoRef} type="video/mp4">
          Your browser does not support the video tag.
        </IphoneVideo>
      </VideoWrapper>
    </ParentDiv>
  );
};

export default ProcessVideo;
