import { Match } from '../api/types';
import { DropListItemData } from '../widgets/DropList';
import { TeamBadge } from '../components/TeamBadge';
import { ScoreDisplay } from '../components/ScoreDisplay';
import { CartItemContent } from '../widgets/CartItemContent';
import { CardContainer, UserCard } from '../components/UserCard';
import { AvatarIcon } from '../components/AvatarIcon';
import { UserCardWrapper } from '../components/UserCardWrapper';
import { UserCardKills } from '../components/UserCardKills';
import { ReactComponent as CrownIcon } from '../assets/icons/TeamBadge.svg';
import FacePNG from '../assets/icons/Ellipse 4.png';
import FramePNG from '../assets/icons/Frame.png';

export function transformMatchesToDropListData(matches: Match[]): DropListItemData[] {
  return matches.map((match, index) => {
    const homeTeam = match.homeTeam;
    const awayTeam = match.awayTeam;

    return {
      id: `${match.title}_${index}`,

      leftComponent: (
        <TeamBadge
          teamName={awayTeam.name}
          icon={<CrownIcon />}
        />
      ),

      centerComponent: (
        <ScoreDisplay
          status={match.status}
          homeScore={match.homeScore}
          awayScore={match.awayScore}
        />
      ),

      rightComponent: (
        <TeamBadge
          teamName={homeTeam.name}
          icon={<CrownIcon />}
          reverse
        />
      ),

      content: (
        <CartItemContent
          leftContent={
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                {awayTeam.players.map((player, idx) => (
                  <UserCard
                    key={idx}
                    icon={
                      <AvatarIcon
                        FaceComponent={FacePNG}
                        FrameComponent={FramePNG}
                        alt="User avatar"
                      />
                    }
                    username={player.username}
                    kills={player.kills}
                  />
                ))}
              </div>

              <div style={{ paddingTop: 8 }}>
                <UserCardWrapper>
                  <CardContainer>
                    <UserCardKills label="Points" kills={awayTeam.points} />
                    <UserCardKills label="Место" kills={awayTeam.place} />
                    <UserCardKills label="Всего убийств" kills={awayTeam.total_kills} />
                  </CardContainer>
                </UserCardWrapper>
              </div>
            </div>
          }

          rightContent={
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                {homeTeam.players.map((player, idx) => (
                  <UserCard
                    key={idx}
                    icon={
                      <AvatarIcon
                        FaceComponent={FacePNG}
                        FrameComponent={FramePNG}
                        alt="User avatar"
                      />
                    }
                    username={player.username}
                    kills={player.kills}
                  />
                ))}
              </div>

              <div style={{ paddingTop: 8 }}>
                <UserCardWrapper>
                  <CardContainer>
                    <UserCardKills label="Points" kills={homeTeam.points} />
                    <UserCardKills label="Место" kills={homeTeam.place} />
                    <UserCardKills label="Всего убийств" kills={homeTeam.total_kills} />
                  </CardContainer>
                </UserCardWrapper>
              </div>
            </div>
          }
        />
      )
    };
  });
}
