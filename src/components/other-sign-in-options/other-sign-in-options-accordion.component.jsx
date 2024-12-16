import { useDispatch } from "react-redux";

import useGetShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import Balancer from "react-wrap-balancer";
import { ListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const OtherSignInOptionsAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();
  const arrow = "↓";

  return (
    <Accordion className="small-top-margin" {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>
            {shouldShowElement
              ? "ok, close"
              : `${arrow} what are these? ${arrow}`}
          </div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <BlueH2>
              <Balancer>Understanding Sign-In Options:</Balancer>
            </BlueH2>

            <Text>
              In today's digital world, there are several convenient ways to
              sign in to apps and websites.
            </Text>
            <Text>Let’s take a closer look at three popular methods:</Text>

            <BlackHr />

            <StyledUnorderedList>
              <ListItem className="black">Sign-In with Google</ListItem>
              <ListItem className="black">Sign-In with Facebook</ListItem>
              <ListItem className="black">
                <Balancer>One-Time Passcodes (OTP) via email.</Balancer>
              </ListItem>
            </StyledUnorderedList>

            <BlackHr />

            <BlueH2>
              <Balancer>Sign-In with Google or Facebook</Balancer>
            </BlueH2>

            <Text>
              These methods allow you to log in to an app or website using your
              existing Google or Facebook account credentials.{" "}
            </Text>
            <Text>Here's how they work: </Text>
            <Text>
              Quick and Easy - Instead of creating a new username and password
              for every app, you can log in with just one click.
            </Text>
            <Text>
              Authorisation, Not Sharing - When you choose to sign in with
              Google or Facebook, the app doesn’t get access to your password.
            </Text>
            <Text>
              Instead, Google or Facebook verifies your identity and confirms it
              to the app.
            </Text>
            <BlueH2>What Information Is Shared?</BlueH2>
            <Text>
              We only access basic information - your name & email address - in
              order to authorise you and create your account details in our app.
            </Text>
            <Text>
              the app could potentially see your profile picture too, although
              we do not need this and therefore do not access it.
            </Text>
            <Text>
              Apps usually ask for your permission before accessing any
              additional details.
            </Text>
            <BlueH2>
              <Balancer>
                Sign-In with a One-Time Passcode (OTP) via Email
              </Balancer>
            </BlueH2>
            <Text>
              This method lets you sign in without needing a password.
            </Text>
            <Text>
              Instead of typing a username or password, you simply provide your
              email address.
            </Text>
            <Text>The app then sends a unique code to your email.</Text>
            <Text>
              This code is valid for 15mins and can only be used once.{" "}
            </Text>
            <Text>Enter the code in the app, and you’re signed in!</Text>
            <Text>There’s no need to remember a password.</Text>
            <BlueH2>
              <Balancer>Why Use These Methods?</Balancer>
            </BlueH2>
            <Text>
              Convenience - No need to remember multiple passwords for different
              apps.
            </Text>
            <Text>
              Security - Password free methods like OTP reduce the risk of weak
              or reused passwords.
            </Text>
            <Text>
              Plus, Google and Facebook accounts often have strong security
              features, like two-factor authentication (2FA).
            </Text>
            <Text>
              Speed - Both methods make signing in faster and hassle-free.
            </Text>
            <BlueH2>Which Should You Choose? </BlueH2>
            <BlackHr />
            <Text>Sign-In with Google or Facebook:</Text>
            <BlackHr />
            <Text>
              Great if you already use these accounts and want quick access.
            </Text>
            <Text>
              Perfect for frequent users who prefer not to manage multiple login
              credentials.
            </Text>
            <BlackHr />
            <Text>Sign-In with OTP via Email:</Text>
            <BlackHr />
            <Text>
              Ideal if you don’t use Google or Facebook or prefer not to link
              those accounts to apps.
            </Text>
            <Text>It’s also a good fallback if you forget your password.</Text>
            <Text>
              By offering these options, we ensure you can sign in to our app in
              a way that’s secure, flexible, and works best for you.
            </Text>
            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default OtherSignInOptionsAccordion;
