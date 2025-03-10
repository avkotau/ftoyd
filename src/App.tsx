import { Provider } from 'react-redux';
import { store } from './app/store';
import { MatchTracker } from './pages/MatchTracker';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './hooks/queryClient';

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MatchTracker />
      </QueryClientProvider>
    </Provider>
  );
}
