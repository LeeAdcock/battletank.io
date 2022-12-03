"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tank_1 = __importDefault(require("./tank"));
class App {
    constructor() {
        this.name = null;
        this.source = '';
        this.recompile = true;
        this.tanks = [new tank_1.default(), new tank_1.default()];
        const adjs = [
            'autumn',
            'hidden',
            'bitter',
            'misty',
            'silent',
            'empty',
            'dry',
            'dark',
            'summer',
            'icy',
            'delicate',
            'quiet',
            'white',
            'cool',
            'spring',
            'winter',
            'patient',
            'twilight',
            'dawn',
            'crimson',
            'wispy',
            'weathered',
            'blue',
            'billowing',
            'broken',
            'cold',
            'damp',
            'falling',
            'frosty',
            'green',
            'long',
            'late',
            'lingering',
            'bold',
            'little',
            'morning',
            'muddy',
            'old',
            'red',
            'rough',
            'still',
            'small',
            'sparkling',
            'throbbing',
            'shy',
            'wandering',
            'withered',
            'wild',
            'black',
            'young',
            'holy',
            'solitary',
            'fragrant',
            'aged',
            'snowy',
            'proud',
            'floral',
            'restless',
            'divine',
            'polished',
            'ancient',
            'purple',
            'lively',
            'nameless',
        ], nouns = [
            'waterfall',
            'river',
            'breeze',
            'moon',
            'rain',
            'wind',
            'sea',
            'morning',
            'snow',
            'lake',
            'sunset',
            'pine',
            'shadow',
            'leaf',
            'dawn',
            'glitter',
            'forest',
            'hill',
            'cloud',
            'meadow',
            'sun',
            'glade',
            'bird',
            'brook',
            'butterfly',
            'bush',
            'dew',
            'dust',
            'field',
            'fire',
            'flower',
            'firefly',
            'feather',
            'grass',
            'haze',
            'mountain',
            'night',
            'pond',
            'darkness',
            'snowflake',
            'silence',
            'sound',
            'sky',
            'shape',
            'surf',
            'thunder',
            'violet',
            'water',
            'wildflower',
            'wave',
            'water',
            'resonance',
            'sun',
            'wood',
            'dream',
            'cherry',
            'tree',
            'fog',
            'frost',
            'voice',
            'paper',
            'frog',
            'smoke',
            'star',
        ];
        this.name =
            'Bot ' +
                adjs[Math.floor(Math.random() * (adjs.length - 1))] +
                ' ' +
                nouns[Math.floor(Math.random() * (nouns.length - 1))];
    }
}
exports.default = App;
//# sourceMappingURL=tankApp.js.map