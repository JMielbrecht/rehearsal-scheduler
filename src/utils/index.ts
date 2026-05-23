import { Script } from '../types';

export const createSchedule = (script: Script, ...args) => {
  const scenes = script.scenes;
  console.log('scenes: ', scenes);
}
