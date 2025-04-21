const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Serve_nvoli.aternos.me',
  port: 50961,
  version: '1.21.71',
  username: 'AFK_BOT'
});

bot.on('spawn', () => {
  console.log('دخلت السيرفر بنجاح!');
});

bot.on('error', err => {
  console.log('خطأ:', err);
});

bot.on('end', () => {
  console.log('تم قطع الاتصال، راح أحاول أعيد الاتصال بعد 10 ثواني...');
  setTimeout(() => {
    process.exit(1);
  }, 10000);
});
