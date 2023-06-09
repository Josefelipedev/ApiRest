import multer from 'multer';
import multerconfig from '../config/multer';

import Photo from '../models/Photo';

const upload = multer(multerconfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const {originalname, filename} = req.file;
        const {aluno_id} = req.body;
        const photo = await Photo.create({originalname, filename, aluno_id});
        res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

    });
  }
}

export default new PhotoController();
