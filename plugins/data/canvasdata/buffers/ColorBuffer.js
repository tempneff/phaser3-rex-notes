import Color32Methods from '../utils/Color32Methods.js';

class ColorBuffer {
    constructor(size) {
        this.resize(size);
    }

    get(offset) {
        return this._colors[offset];
    }

    set(offset, value) {
        this._colors[offset] = value;
        return this;
    }

    fill(value) {
        for (var i = 0, cnt = this._rows; i < cnt; i++) {
            this._colors[i] = value;
        }
        return this;
    }

    resize(size) {
        if (size !== this._rows) {
            this._rows = size;
            this._buf = new ArrayBuffer(this._rows * 4);
            this._colors = new Uint32Array(this._buf);
        }
        return this;
    }
}

const RgbaToColor32 = Color32Methods.rgbaToColor32;
ColorBuffer.FillCallback = function (imgData, imgDataIndex) {
    return RgbaToColor32(
        imgData[imgDataIndex + 0], // r
        imgData[imgDataIndex + 1], // g
        imgData[imgDataIndex + 2], // b
        imgData[imgDataIndex + 3]  // a
    );
}

export default ColorBuffer;