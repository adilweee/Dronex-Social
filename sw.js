self.addEventListener('install', (e) => {
    console.log('DroneX Service Worker Kuruldu!');
});

self.addEventListener('fetch', (e) => {
    // Uygulamanın internetten veri çekmesine izin ver
    return;
});