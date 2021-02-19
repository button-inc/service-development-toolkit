// @ts-nocheck
import { withSession } from 'next-session';
import { fileHandler } from 'pangolin';
import formData from 'db';
import fs from 'fs';
import path from 'path';

function handler(req: any, res: any) {
  fileHandler(req, res, {
    createStream: filename => fs.createWriteStream(filename),
    onFileLoad: filename => {
      formData.files = [filename];
    },
  });
}

export default withSession(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
