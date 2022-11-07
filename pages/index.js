import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import { StyledAluraTubes } from '../src/components/AluraTubes';

import styled from 'styled-components';
import config from '../config.json';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

  #profile {
    width: 85px;
    height: 85px;
    border-radius: 50%;
  }

  #banner {
    object-fit: cover;
    width: 100%;
    height: 143px;
    margin-top: 40px;
    background-color: ${config["banner-color"]};
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`

const Header = ({ banner }) => {
  return (
    <StyledHeader>
      {banner
        ? <img src={banner} alt="profile-banner" id="banner"/>
        : <div id="banner"></div>
      }
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} id="profile" alt="profile-pic"/>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

const Timeline = ({ playlists }) => {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName]

        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => 
                <a href={video.url}>
                  <img src={video.thumb} alt={`${video.title} thumbnail`} />
                  <span>
                    {video.title}
                  </span>
                </a>
              )}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

const AluraTubes = () => {
  return (
    <StyledAluraTubes>
      <h2>AluraTubes favoritos</h2>
      <div id="aluratubers">
        {config.favorites.map((favorite) => {
          return (
            <div>
              <img src={favorite.image} alt={`${favorite.name} profile image`}/>
              <p>@{favorite.name}</p>
            </div>
          )
        })}
      </div>
    </StyledAluraTubes>
  )
}

const HomePage = () => {
  return (
    <>
      <CSSReset />
      <main style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
        <AluraTubes />
      </main>
    </>
  )
}

export default HomePage
