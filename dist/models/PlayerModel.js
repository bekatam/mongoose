"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const mongoose_1 = require("mongoose");
const playerSchema_1 = require("../schemas/playerSchema");
playerSchema_1.playerSchema.methods.fight = function fight() {
    console.log(`${this.name} hitting you by a hammer`);
};
exports.Player = (0, mongoose_1.model)('Player', playerSchema_1.playerSchema);
