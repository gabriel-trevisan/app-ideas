import { ElementController } from './controllers/ElementController';

const controller = new ElementController();

document.querySelector('#inputTopRight').addEventListener("input", controller.update.bind(controller));
document.querySelector('#inputTopLeft').addEventListener("input", controller.update.bind(controller));
document.querySelector('#inputBottomRight').addEventListener("input", controller.update.bind(controller));
document.querySelector('#inputBottomLeft').addEventListener("input", controller.update.bind(controller));

document.querySelector('button').addEventListener("click", controller.copy.bind(controller));