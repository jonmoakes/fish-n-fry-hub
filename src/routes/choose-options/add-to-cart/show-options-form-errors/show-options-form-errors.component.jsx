import ShowSizeNotChosenError from "./option-errors/show-size-not-chosen-error.component";
import ShowQuantityError from "./option-errors/show-quantity-error.component";
import ShowCondimentsError from "./option-errors/show-condiments-error.component";
import ShowSaucesError from "./option-errors/show-sauces-error.component";
import ShowMeatsError from "./option-errors/show-meats-error.component";
import ShowSaltAndVinegarNotChosenError from "./option-errors/show-salt-and-vinegar-not-chosen-error.component";
import ShowPieNotChosenError from "./option-errors/show-pie-not-chosen-error.component";
import ShowCanNotChosenError from "./option-errors/show-can-not-chosen-error.component";

const ShowOptionsFormErrors = () => (
  <>
    <ShowSizeNotChosenError />
    <ShowSaltAndVinegarNotChosenError />
    <ShowSaucesError />
    <ShowCondimentsError />
    <ShowMeatsError />
    <ShowPieNotChosenError />
    <ShowCanNotChosenError />
    <ShowQuantityError />
  </>
);

export default ShowOptionsFormErrors;
