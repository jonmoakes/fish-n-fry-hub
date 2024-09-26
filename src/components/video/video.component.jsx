import { ParentDiv, VideoWrapper } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { IphoneVideo } from "../../styles/video/video.styles";

const Video = () => (
  <ParentDiv>
    <Text>
      see how easy it is to order by tapping the play button on the video below!
    </Text>
    <VideoWrapper>
      <IphoneVideo controls>
        <source src="/src/assets/order-process.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </IphoneVideo>
    </VideoWrapper>
  </ParentDiv>
);

export default Video;
