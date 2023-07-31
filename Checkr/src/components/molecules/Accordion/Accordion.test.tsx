import React from 'react';
import { render } from '@testing-library/react';
import CustomAccordion from '../../../components/molecules/Accordion/index';
import '@testing-library/jest-dom/extend-expect';

describe('CustomAccordion Component', () => {
    test('renders the title correctly', () => {
      const title = 'Test Accordion';
      const { getByText } = render(<CustomAccordion title={title}>{title}</CustomAccordion>);
      const accordionTitle = getByText(title);
      expect(accordionTitle).toBeInTheDocument();
    });
  
    test('renders the content inside the accordion', () => {
      const content = 'Content here';
      const { getByText } = render(<CustomAccordion title="Test">{content}</CustomAccordion>);
      const accordionContent = getByText(content);
      expect(accordionContent).toBeInTheDocument();
    });
  });
  
