import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
    static load() {
        return new Promise((resolve) => read()
                .then((result) => json(result))
                .then((result) => {
                    resolve(new GameSaving(JSON.parse(result)));
                }),
        );
    }
}