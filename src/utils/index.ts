import { Cast, Script } from '../types';

export const createSchedule = (script: Script, cast: Cast): void => {
  const scenes = script.scenes;
  console.log('scenes: ', scenes);

  for (const scene of scenes) {
    // TODO: iterate through each scene and get the following: 
    // - Characters
    // - Create rehearsal blocks? 
  }
}
