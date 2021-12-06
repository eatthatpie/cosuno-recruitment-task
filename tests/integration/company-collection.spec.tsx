import React from 'react';
import fetch from 'jest-fetch-mock';
import { CompanyCollection } from '../../src/ui/views/company-collection/company-collection';
import { IListParamsContext, ListParamsContext } from '../../src/ui/contexts/list-params-context';
import { render, waitFor } from '@testing-library/react';
import { TestWrapper } from '../helpers';
import companyCollectionValidMock from '../mocks/company-collection-valid-mock.json';

const listParamsContextValueMock: IListParamsContext = {
  applyNamePattern: jest.fn(),
  applySpecialties: jest.fn(),
  params: {}
};

const Fixture = (listParamsContextValue?: Partial<IListParamsContext>) => (
  <TestWrapper>
    <ListParamsContext.Provider value={{
      ...listParamsContextValueMock,
      ...listParamsContextValue
    }}>
      <CompanyCollection />
    </ListParamsContext.Provider>
  </TestWrapper>
);

jest.mock('../../src/ui/hooks/use-config', () => ({
  useConfig: () => ({
    apiHost: 'http://test.host'
  })
}))

describe('Integration test: Company collection view', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetch.mockClear();
  });

  describe('when component is mounted', () => {
    it('calls company collection endpoint with proper params', async () => {
      fetch.mockResponseOnce(JSON.stringify([]));

      render(<Fixture />);

      await waitFor(() => {
        expect(fetch.mock.calls[0][0])
          .toEqual('http://test.host/api/company?namePattern=&specialties=&limit=300');
      });
    });
  });

  describe('when list params change', () => {
    it('calls company collection endpoint with proper params', async () => {
      fetch.mockResponse(JSON.stringify([]));

      const result = render(<Fixture />);

      result.rerender(
        <Fixture
          params={{
            namePattern: 'test-pattern',
            specialties: ['test-id-1', 'test-id-2']
          }}
        />
      );

      await waitFor(() => {
        expect(fetch.mock.calls[1][0])
          .toEqual('http://test.host/api/company?namePattern=test-pattern&specialties=test-id-1%2Ctest-id-2&limit=300');
      });
    });
  });

  describe('when data is loading', () => {
    it('renders collection items in loading state', async () => {
      fetch.mockResponse(JSON.stringify([]));

      const result = render(<Fixture />);

      expect(result.queryByTestId('company-collection')).toHaveClass('is-loading');

      await waitFor(() => {
        expect(result.queryByTestId('company-collection')).not.toHaveClass('is-loading');
      });
    });
  });

  describe('when data is fetched successfully', () => {
    // #NotesToReviewer
    // We could test rendering of other fields here, like specialties, images etc.
    it('renders fetched data', async () => {
      fetch.mockResponse(JSON.stringify(companyCollectionValidMock));

      const result = render(<Fixture />);

      await waitFor(() => {
        expect(result.queryByText(companyCollectionValidMock[0].name)).toBeInTheDocument();
        expect(result.queryByText(companyCollectionValidMock[0].city)).toBeInTheDocument();

        expect(result.queryByText(companyCollectionValidMock[1].name)).toBeInTheDocument();
        expect(result.queryByText(companyCollectionValidMock[1].city)).toBeInTheDocument();
      });
    });
  });

  describe('when no data is fetched', () => {
    it('renders proper info', async () => {
      fetch.mockResponse(JSON.stringify([]));

      const result = render(<Fixture />);

      await waitFor(() => {
        expect(result.queryByText('No companies found')).toBeInTheDocument();
      });
    });
  });
});
