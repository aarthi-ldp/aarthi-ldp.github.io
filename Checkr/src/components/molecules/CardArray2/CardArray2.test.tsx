import CardArray2 from '../../../components/molecules/CardArray2/index'; 
import { render } from '@testing-library/react';

describe('CardArray2', () => {
  it('should be an array', () => {
    expect(Array.isArray(CardArray2)).toBe(true);
  });

  it('should contain the expected number of cards', () => {
    expect(CardArray2).toHaveLength(6); 
  });

  it('should have valid card objects with required properties', () => {
    CardArray2.forEach((card) => {
      expect(card).toHaveProperty('id');
      expect(card).toHaveProperty('iconComponent');
      expect(card).toHaveProperty('iconAlt');
      expect(card).toHaveProperty('text1');
      expect(card).toHaveProperty('text2');
    });
  });

  it('should have valid iconComponent for each card', () => {
    CardArray2.forEach((card) => {
      expect(typeof card.iconComponent).toBe('object'); // Assuming iconComponent is an object representing the icon
    });
  });

  it('should have valid iconAlt for each card', () => {
    CardArray2.forEach((card) => {
      expect(typeof card.iconAlt).toBe('string');
    });
  });

  
});
