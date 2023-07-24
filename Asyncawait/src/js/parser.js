'use strict';

export default function jsons(data) {
    return new Promise((resolve) => {
        // эмуляция обработки ArrayBuffer
        setTimeout(() => {
            resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
        }, 500);
    });
}
