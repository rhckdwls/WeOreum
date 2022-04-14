import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterContainer } from './styles';

function Footer() {
  return (
    <FooterContainer>
      <p>
        Jin{' '}
        <a href="https://github.com/rhckdwls/WeOreumTs" target="_blank">
          <FaGithub />
        </a>
      </p>
    </FooterContainer>
  );
}

export default Footer;
