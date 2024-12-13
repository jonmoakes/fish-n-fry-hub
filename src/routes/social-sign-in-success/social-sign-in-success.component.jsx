import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import { getUserOnLoadAsync } from "../../store/user/user.thunks";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Navigate } from "react-router-dom";
import { menuRoute } from "../../strings/routes/routes-strings";

const SocialSignInSuccess = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOnLoadAsync());
  }, [dispatch]);

  return (
    <Container>
      {currentUser && <Navigate replace to={menuRoute} />}
      <ParentDiv>
        <Title>signing you in...</Title>
      </ParentDiv>
    </Container>
  );
};

export default SocialSignInSuccess;
