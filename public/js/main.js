var electron = require('electron');
var path = require('path');


const BrowserWindow = electron.BrowserWindow;

const app = electron.app;

app.on('ready', ()=> {

        var mainWindow = new BrowserWindow({
            show: false
        });

        mainWindow.loadURL(`file://${path.resolve(__dirname, '..', 'index.html')}`);

        mainWindow.once('ready-to-show', () => {
            mainWindow.show();
        });
    }
);