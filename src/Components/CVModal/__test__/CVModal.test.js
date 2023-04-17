import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CvDetailsModal from '../CvDetailsModal';

describe('CvDetailsModal', () => {
  const marketplaces = [
    {
      id: 1,
      Name: 'Marketplace 1',
      Description: 'Description 1',
      Features: ['Feature 1', 'Feature 2']
    },
    {
      id: 2,
      Name: 'Marketplace 2',
      Description: 'Description 2',
      Features: ['Feature 3', 'Feature 4']
    }
  ];

  it('renders correctly when visible prop is true', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CvDetailsModal visible={true} onClose={onClose} marketIndex={1} />
    );

    // Assert that the marketplace name is rendered
    expect(getByText('Marketplace 1')).toBeInTheDocument();

    // Simulate click on close button
    fireEvent.click(getByText('Close modal'));

    // Assert that onClose callback is called
    expect(onClose).toHaveBeenCalled();
  });

  it('renders nothing when visible prop is false', () => {
    const onClose = jest.fn();
    const { container } = render(
      <CvDetailsModal visible={false} onClose={onClose} marketIndex={1} />
    );

    // Assert that the component renders nothing
    expect(container.firstChild).toBeNull();
  });

  it('renders loading ring when isLoading is true', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <CvDetailsModal visible={true} onClose={onClose} marketIndex={1} isLoading={true} />
    );

    // Assert that the loading ring component is rendered
    expect(getByTestId('loading-ring')).toBeInTheDocument();
  });

  it('renders error message when error prop is provided', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CvDetailsModal visible={true} onClose={onClose} marketIndex={1} error="Error message" />
    );

    // Assert that the error message is rendered
    expect(getByText('Error message')).toBeInTheDocument();
  });
});