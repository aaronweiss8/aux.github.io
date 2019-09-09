window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQDuu0kgx5CLje8l87YDeS3H_mbDHWVVNq3gQGl5Dc5JUI_D30zIR4n3-9FzheQhxnbVbURHfA4XCUpctBEgDA0I7vAQv_xPAI-aUtbsKaTY4cPeu4m5kWeNpzxV9Ex5niF1-EQfaD9cD8FxiHGX7CstBcmaOMOgXGsD8E91-H7NPNrKWS0YIA';
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