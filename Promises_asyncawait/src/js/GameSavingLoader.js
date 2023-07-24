import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
    static load() {
        return read()
            .then((result) => {
                return json(result);
            })
            .then((result) => {
                return new GameSaving(JSON.parse(result));
            });
    }
}
