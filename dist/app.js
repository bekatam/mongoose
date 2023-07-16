"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlayerModel_1 = require("./models/PlayerModel");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
run().catch((err) => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/thegame");
        }
        catch (error) {
            console.error("error connecting to MongoDB");
        }
    });
}
app.get("/player", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = yield PlayerModel_1.Player.findOne();
        res.status(200).json(player);
    }
    catch (error) {
        res.status(500).send("something wrong happened");
        console.error(error);
    }
}));
app.get("/player/query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = yield PlayerModel_1.Player.where("createDate").equals("2023-07-16T17:08:36.214+00:00");
        res.status(200).json(player);
    }
    catch (error) {
        res.status(500).send("something wrong happened");
        console.error(error);
    }
}));
app.post("/player/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = new PlayerModel_1.Player({
            name: "Bill with CRUD",
            email: "bill@initech.com",
            avatar: "https://i.imgur.com/dM7Thhn.png",
            skills: [{ name: "fly", level: 11 }],
        });
        const bestFriend = yield PlayerModel_1.Player.findById("64b4240f87a8d65e77186a52");
        player.bestFriend = bestFriend === null || bestFriend === void 0 ? void 0 : bestFriend._id;
        yield player.save();
        res.json(player);
    }
    catch (error) {
        console.error("error here", error);
        res.status(500).send(error);
    }
}));
app.listen(8080, () => console.log("listening on port 8080"));
