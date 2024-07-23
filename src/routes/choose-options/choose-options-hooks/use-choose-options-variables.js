import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";

const useChooseOptionsVariables = () => {
  const { name, price } = useGetChooseOptionsSelectors();

  return { name, price };
};

export default useChooseOptionsVariables;
