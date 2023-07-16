import {  model } from 'mongoose';
import { IPlayer } from '../interfaces/IPlayer';
import { playerSchema } from '../schemas/playerSchema';

playerSchema.methods.fight = function fight() {
    console.log(`${this.name} hitting you by a hammer`);
};

export const Player = model<IPlayer>('Player', playerSchema);