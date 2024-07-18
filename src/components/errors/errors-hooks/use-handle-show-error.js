import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";

const useHandleShowError = () => {
  const { menuError } = useGetMenuSelectors();

  const showErrorHeading = () => {
    if (menuError) return "failed to fetch menu data.";
    // add more if needed with if statement for each
  };

  const errorToDisplay = () => {
    const errors = [
      menuError,
      // add more separated by comma
    ];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
