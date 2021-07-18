import { BinaryController } from './controllers/BinaryController';

const controller = new BinaryController();

document.querySelector('#formBinary').addEventListener("submit", controller.convert.bind(controller));