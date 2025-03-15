import { Button } from '../components/Button';
import styled from 'styled-components';
import { DropList } from '../widgets/DropList';
import { ReactComponent as Label } from '../assets/icons/Match Tracker.svg';
import { ReactComponent as Refresh } from '../assets/icons/Refresh.svg';
import { ReactComponent as ErrorIcon } from '../assets/icons/alert-triangle.svg';
import { UserCardWrapper } from '../components/UserCardWrapper';
import { CardContainer } from '../components/UserCard';
import { useMatches } from '../hooks/useMatches';
import { useAppSelector } from '../hooks/useAppSelector';
import { Typography } from '../components/Typography';
import { useState } from 'react';
import { Loader } from '../components/Loader';
import { transformMatchesToDropListData } from '../utils/transformMatchesToDropListData';

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
`;

const LoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const MatchTracker = () => {
  const [isInternet, setIsInternet] = useState<boolean>(true);
  const { isFetching, isError, error, refetch } = useMatches();
  const matches = useAppSelector((state) => state.matches.matches);

  const dropListItems = transformMatchesToDropListData(matches);

  const handleRefetch = async () => {
    if (!navigator.onLine) {
      setIsInternet(false);
      return;
    }
    setIsInternet(true);
    await refetch();
  };

  return (
    <div style={{ margin: 42 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Label />

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
          {isError || !isInternet ?
            <div style={{ display: 'flex' }}>
              <UserCardWrapper style={{ height: '56px' }}>
                <CardContainer style={{ gap: 10 }}>
                  <ErrorIcon />
                  <Typography variant={'medium'} fontWeight={500}>
                    Ошибка: не удалось загрузить информацию
                  </Typography>
                </CardContainer>
              </UserCardWrapper>
            </div>
            : <p>{error?.message}</p>
          }
          <Button variant={'primary'} onClick={handleRefetch} disabled={isFetching}>
            <ButtonContent>
              <Typography variant={'medium'}>Обновить</Typography>
              <Refresh />
            </ButtonContent>
          </Button>
        </div>

      </header>
      <main>
        {isFetching ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <DropList items={dropListItems} variant="dark" />
        )}
      </main>
    </div>
  );
};
