import { renderHook } from '@testing-library/react-hooks';
import { useConfig } from '../../src/ui/hooks/use-config';

const envs = process.env;

describe('useConfig', () => {
  // #NoteToReviewer
  // I know it doesn't seem safe, but I know what I'm doing in this small test suite.
  process.env.REACT_APP_API_HOST = 'http://test.host';
  process.env.REACT_APP_DEBOUNCE_TIMEOUT = '300';

  afterAll(() => {
    process.env = envs;
  });

  it('returns env variables', () => {
    const { result } = renderHook(useConfig);

    expect(result.current).toEqual({
      apiHost: 'http://test.host',
      debounceTimeout: 300
    })
  });
});
