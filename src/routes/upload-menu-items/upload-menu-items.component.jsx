import { useEffect } from "react";

import { useDispatch } from "react-redux";

import useGetMenuSelectors from "../../hooks/selectors/use-get-upload-menu-items-selectors";
import { uploadMenuItemsToDatabaseAsync } from "../../store/upload-menu-items/upload-menu-items-thunks";
import { resetUploadMenuItemsError } from "../../store/upload-menu-items/upload-menu-items.slice";
import useFireSwal from "../../hooks/use-fire-swal";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { errorReceivedMessage } from "../../strings/errors/errors-strings";

const UploadMenuItems = () => {
  const { uploadMenuItemsIsLoading, uploadMenuItemsError } =
    useGetMenuSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const uploadItems = () => {
    dispatch(uploadMenuItemsToDatabaseAsync());
  };

  useEffect(() => {
    if (!uploadMenuItemsError) return;

    fireSwal(
      "error",
      errorReceivedMessage("error uploading menu items", uploadMenuItemsError),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetUploadMenuItemsError());
      }
    });
  }, [uploadMenuItemsError, dispatch, fireSwal]);

  return (
    <Container>
      {uploadMenuItemsIsLoading ? (
        <SkeletonBox loadingText="Uploading Menu Items..." />
      ) : null}
      <ParentDiv>
        <Title>upload menu items</Title>
      </ParentDiv>
      <ParentDiv>
        <YellowGreenButton onClick={uploadItems}>upload</YellowGreenButton>
      </ParentDiv>
    </Container>
  );
};

export default UploadMenuItems;
