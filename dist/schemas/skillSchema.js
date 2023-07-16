"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillSchema = void 0;
const mongoose_1 = require("mongoose");
exports.skillSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    level: {
        type: Number,
        required: true,
        min: 5,
        max: 100,
        default: 5,
        validate: {
            validator: (v) => v % 5 === 0,
            message: (params) => `${params.value} must divide by 5`,
        },
    },
});
