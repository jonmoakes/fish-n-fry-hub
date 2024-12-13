import { useEffect } from "react";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { useDispatch } from "react-redux";
import { getUserOnLoadAsync } from "../../store/user/user.thunks";

const SocialSignInSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOnLoadAsync());
  }, [dispatch]);

  return (
    <Container>
      <ParentDiv>
        <Title>signing you in...</Title>
      </ParentDiv>
    </Container>
  );
};

export default SocialSignInSuccess;
