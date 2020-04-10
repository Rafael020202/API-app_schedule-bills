import { diskStorage } from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export default {
  storage: diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(8, (err, res) => {
        if (err) {
          return cb(err, undefined);
        }

        return cb(undefined, res.toString('HEX') + extname(file.originalname));
      });
    },
  }),
};
