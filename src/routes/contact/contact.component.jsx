import useSendContactFormMessageResultSwal from "./contact-form-hooks/use-send-contact-form-message-result-swal";
import useGetContactFormSelectors from "../../hooks/selectors/use-get-contact-form-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import ContactForm from "./sections/contact-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import Footer from "../../components/footer/footer.component";

const Contact = () => {
  const { contactFormIsLoading } = useGetContactFormSelectors();
  useSendContactFormMessageResultSwal();

  return (
    <Container>
      {contactFormIsLoading ? (
        <SkeletonBox loadingText="Sending Message..." />
      ) : null}

      <ParentDiv>
        <Title>contact us</Title>
      </ParentDiv>

      <ContactForm />
      <Footer />
    </Container>
  );
};

export default Contact;
