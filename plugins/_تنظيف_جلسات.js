// خذ حط ذا ينظفلك الجلسات كل دقيقه
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

setInterval(async () => {

  const sessionPath = './GataBotSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      
    } else {
      
    }
  } catch (err) {
  }
}, 60 * 1000);