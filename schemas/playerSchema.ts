import mongoose, { Schema } from "mongoose";
import { IPlayer } from "../interfaces/IPlayer";
import { skillSchema } from "./skillSchema";

export const playerSchema = new Schema<IPlayer>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	avatar: String,
	createDate: {
		type: Date,
		required: true,
		default: new Date(),
		immutable: true,
	},
	skills: [skillSchema],
	achivements: {
		bestPlayerOfTheYear: { type: Boolean, immutable: true },
		zeroDeath: { type: Boolean, immutable: true },
		hasSkins: { type: Boolean, immutable: true },
	},
	bestFriend: { type: mongoose.SchemaTypes.ObjectId, ref: "Player" },
});
