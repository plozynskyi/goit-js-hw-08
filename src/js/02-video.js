import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(STORAGE_TIME_KEY)
  ? localStorage.getItem(STORAGE_TIME_KEY)
  : 0;

getCurrentTime = e => {
  localStorage.setItem(STORAGE_TIME_KEY, e.seconds);
};

player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(getCurrentTime, 1000));
