import { SectionSty, Title, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <SectionSty>
        <Title>{title}</Title>
        {children}
      </SectionSty>
    </Wrapper>
  );
};
