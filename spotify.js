window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQBcg9vxD5gVP7sqObo_NNBsY_QANPNu2n--H_YSzvWM9XPMFu9mjxANJyuOBljX5EJBh1lWX0wX6AKl8RLo004KcdJc-f7iC-QKPkPMbgRYT_UuwO_QaoY1-F4OhLRCyemolouOmrbYXkPhEMmsG8G1pGdV_9tFbHWPeVAXw8u42PYML8SjsQ';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};