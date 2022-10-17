const path = require('path')
const sharp = require('sharp')

class ImageFactoryService {
    async compositeImages(filename, token) {
        try {
            await sharp(path.join(__dirname, '..', '..', 'upload', filename))
                .composite([
                    {
                        input: path.join(__dirname, '..', '..', 'public', 'images', 'background.png')
                    },
                ])
                .toFile(path.join(__dirname, '..', '..', 'output', token + '.jpg'));
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ImageFactoryService()