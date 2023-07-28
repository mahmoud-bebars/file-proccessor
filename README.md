# Cropping & Resizing App

using Nodejs & Express With Sharp

we can upload the photo & make some Image Processing on it Like Resizing it to specefic Size & Sharp giving us this Ablity

Also to save some server Storage we Are converting the image to Webp using Sharp after resizing & cropping it to the center of the iamge
using equation :

- `meta.height / 2 - height / 2` ---> for the x-axis
- `meta.width/ 2 - width / 2` ---> for the y-axis.

## used Techs

- NodeJS
- ExpressJS
- Sharp
- Formidable
- Nodemon

## Avilable Scripts

```
    "start": "node server.js",
    "dev": "nodemon server.js"
```

## Availavble Routes

- /api/upload - POST - Method -FormData

= data Sent in the form

- file with feild name `image`
- JSON stringfy Object with Feild name `imgSettings`

* if used in postman no stringfy function needed
* if in App like React App - pass the Data object in the JSON.Stringfy function
* object example :

```
 ` {
     "width":200,
     "height":200,
     "name":"testing",
     "format":"webp"
   }
```

## Explore in The following Techs For more tricks in Image Processing

- [Sharp NPM](https://www.npmjs.com/package/sharp).
- [sharp Docs](https://sharp.pixelplumbing.com).

## for more Info About Image uploading & methods to use

- [Formidable Forms](https://formidableforms.com/knowledgebase/file-upload/) - used in the App.
- [Multer](https://www.npmjs.com/package/multer).
