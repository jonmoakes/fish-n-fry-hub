import { Fragment } from "react";

import { InnerFormDiv, ParentDiv } from "../../../styles/div/div.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { Form, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import { categories } from "../../../constants/constants";

const ChooseCollection = ({ handleChange }) => (
  <ParentDiv>
    <H2>choose collection</H2>
    <Text>which collection will this new product belong to?</Text>

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
  </ParentDiv>
);

export default ChooseCollection;
