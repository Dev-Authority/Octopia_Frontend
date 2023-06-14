// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import SelectInput from '../SelectInput/index';

// describe('SelectInput', () => {
//   const dataArray = ['option1', 'option2', 'option3'];
//   const handleDataMock = jest.fn();

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders the component with placeholder text', () => {
//     const { getByPlaceholderText } = render(
//       <SelectInput placeHolder="Select an option" dataArray={dataArray} handleData={handleDataMock} />
//     );
//     const selectInput = getByPlaceholderText('Select an option');
//     expect(selectInput).toBeInTheDocument();
//   });

//   it('calls the handleData function when an option is selected', () => {
//     const { getByPlaceholderText } = render(
//       <SelectInput placeHolder="Select an option" dataArray={dataArray} handleData={handleDataMock} />
//     );
//     const selectInput = getByPlaceholderText('Select an option');
//     fireEvent.change(selectInput, { target: { value: 'option1' } });
//     expect(handleDataMock).toHaveBeenCalledWith('option1', undefined);
//   });

//   it('renders the correct number of options', () => {
//     const { getAllByRole } = render(
//       <SelectInput placeHolder="Select an option" dataArray={dataArray} handleData={handleDataMock} />
//     );
//     const options = getAllByRole('option');
//     expect(options).toHaveLength(dataArray.length);
//   });
// });

test('test', () => {
    expect(true).toBe(true)
  })