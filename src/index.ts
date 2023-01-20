import { Application, Sprite, Container, Graphics, ParticleContainer } from 'pixi.js';
import { BlurFilter } from '@pixi/filter-blur';
import * as particleSettings from './emitter.json';

const app = new Application({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const conty: Container = new Container();
conty.x = 0;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from('clampy.png');
clampy.x = 0;
clampy.y = 100;
conty.addChild(clampy);

const graphy: Graphics = new Graphics();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

app.stage.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 100;
graphy.y = 100;

const myBlurFilter = new BlurFilter();
clampy.filters = [myBlurFilter];

const particleContainer = new ParticleContainer();
app.stage.addChild(particleContainer);

const emitter = new particleSettings.Emitter(particleContainer, particleSettings);
emitter.autoUpdate = true;
emitter.emit = true;
emitter.updateSpawnPos(200, 100);
