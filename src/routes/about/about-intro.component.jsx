import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const AboutIntro = () => (
  <>
    <ParentDiv>
      <Title>about the app</Title>
    </ParentDiv>

    <ParentDiv>
      <Text>
        the fish 'n' fry hub is a demonstration of a{" "}
        <a
          className="red"
          href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
        >
          progressive web app
        </a>{" "}
        for a theoretical fish and chip shop.
      </Text>
      <Text>
        it allows users to order their food online quickly and securely.
      </Text>
      <Text>
        for the app owner, they can manage their business more efficiently by
        seeing orders appear in real-time on their screen.
      </Text>
      <Text>
        they can mark off orders as completed once they are cooked and also
        manage all parts of their menu, including updating prices, adding or
        deleting products and more - all in a few taps!
      </Text>
      <Text>
        lets take a look in more detail, first from the customers point of view
        and then from the owners.
      </Text>
    </ParentDiv>
  </>
);

export default AboutIntro;
