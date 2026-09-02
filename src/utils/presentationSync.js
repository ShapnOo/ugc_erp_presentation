// Presentation State Sync Manager via BroadcastChannel API
const CHANNEL_NAME = 'ugc_ppt_presentation_sync';

export const presentationChannel = new BroadcastChannel(CHANNEL_NAME);

export const syncState = (state) => {
  try {
    presentationChannel.postMessage(state);
    localStorage.setItem('ugc_ppt_state', JSON.stringify(state));
  } catch (err) {
    console.error('Failed to sync presentation state:', err);
  }
};

export const getStoredState = () => {
  try {
    const data = localStorage.getItem('ugc_ppt_state');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};
