import { Schema } from "mongoose";
import { ISkill } from "../interfaces/ISkill";

export const skillSchema = new Schema<ISkill>({
	name: { type: String, required: true },
	level: {
		type: Number,
		required: true,
		min: 5,
		max: 100,
		default: 5,
		validate: {
			validator: (v: number) => v % 5 === 0,
			message: (params) => `${params.value} must divide by 5`,
		},
	},
});
