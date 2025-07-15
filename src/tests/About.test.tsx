import About from "@/components/portfolio/About";
import { render, screen } from '@testing-library/react';

describe('About Component', () => {
  test('renders heading correctly', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders key content text', () => {
    render(<About />);
    expect(screen.getByText(/seasoned developer with expertise/i)).toBeInTheDocument();
    expect(screen.getByText(/currently leading frontend development/i)).toBeInTheDocument();
    expect(screen.getByText(/FidyPay/i)).toBeInTheDocument();
  });

  test('renders highlighted spans correctly', () => {
    render(<About />);
    const keywords = [
      'Android POS systems',
      'payment gateways',
      'merchant/admin dashboards',
      'cooperative banking apps',
      'BBPS systems',
    ];
    keywords.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});

