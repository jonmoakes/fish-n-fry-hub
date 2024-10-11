import { Fragment } from "react";
import Balancer from "react-wrap-balancer";

import { InnerFormDiv, ParentDiv } from "../../../styles/div/div.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { Form, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

import { categories } from "../../../constants/constants";

const ChooseCollection = ({
  category,
  handleChange,
  confirmChangeCategory,
}) => (
  <ParentDiv>
    {!category ? (
      <>
        <H2>choose collection</H2>
        <Text>
          <Balancer>which collection will this new product belong to?</Balancer>
        </Text>

        <Form className="no-margin-top">
          <InnerFormDiv>
            {categories.map((category) => {
              return (
                <Fragment key={category}>
                  <Label className="no-padding">{category}</Label>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    onChange={handleChange}
                  />

                  <BlackHr />
                </Fragment>
              );
            })}
          </InnerFormDiv>
        </Form>
      </>
    ) : (
      <>
        <Text>
          to change the category your new product will go in, tap the button
          below.
        </Text>
        <Text>
          note that this will reset any data that you have entered so far.
        </Text>
        <YellowGreenButton type="button" onClick={confirmChangeCategory}>
          change category
        </YellowGreenButton>
      </>
    )}
  </ParentDiv>
);

export default ChooseCollection;
