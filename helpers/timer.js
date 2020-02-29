const timer = {
  getMinutes: x => {
    let minutes = Math.floor(x / 60).toString();
    minutes = `${minutes.length === 1 ? '0' : ''}${minutes}`;
    let seconds = (x % 60).toString();
    seconds = `${seconds.length === 1 ? '0' : ''}${seconds}`;
    return `${minutes}:${seconds}`;
  },
};
export default timer;
