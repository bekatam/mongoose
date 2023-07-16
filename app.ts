import { connect } from "mongoose";
import { Player } from "./models/PlayerModel";
import express from "express";

const app = express();

app.use(express.json());

run().catch((err) => console.log(err));

async function run() {
	try {
		await connect("mongodb://127.0.0.1:27017/thegame");
	} catch (error) {
		console.error("error connecting to MongoDB");
	}
}

app.get("/player", async (req, res) => {
	try {
		const player = await Player.findOne();
		res.status(200).json(player);
	} catch (error) {
		res.status(500).send("something wrong happened");
		console.error(error);
	}
});

app.get("/player/query", async (req, res) => {
	try {
		const player = await Player.where("createDate").equals(
			"2023-07-16T17:08:36.214+00:00"
		);
		res.status(200).json(player);
	} catch (error) {
		res.status(500).send("something wrong happened");
		console.error(error);
	}
});

app.post("/player/create", async (req, res) => {
	try {
		const player = new Player({
			name: "Bill with CRUD",
			email: "bill@initech.com",
			avatar: "https://i.imgur.com/dM7Thhn.png",
			skills: [{ name: "fly", level: 11 }],
		});
		const bestFriend: any = await Player.findById("64b4240f87a8d65e77186a52");
		player.bestFriend = bestFriend?._id;
		await player.save();
		res.json(player);
	} catch (error) {
		console.error("error here", error);
		res.status(500).send(error);
	}
});

app.listen(8080, () => console.log("listening on port 8080"));
