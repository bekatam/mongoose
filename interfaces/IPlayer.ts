import { Types } from "mongoose";
import { ISkill } from "./ISkill";

interface IAchivement {
	bestPlayerOfTheYear: boolean;
	zeroDeath: boolean;
	hasSkins: boolean;
}

export interface IPlayer {
	name: string;
	email: string;
	avatar?: string;
	fight: () => void;
	createDate: Date;
	skills: ISkill[];
	achivements: IAchivement;
	bestFriend: Types.ObjectId;
}
