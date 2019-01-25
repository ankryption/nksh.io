import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import styled from 'styled-components';
import { mixins, media, Section, Heading } from '../styles';

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.about, srConfig());
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title } = frontmatter;

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        <Heading>{title}</Heading>
        <FlexContainer>
          <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </ContentContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;
