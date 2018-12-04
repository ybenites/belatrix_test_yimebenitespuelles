// console.log(path.join(, 'mixins'));

initial_path = "/";
module.exports = {
  plugins: [
    require("postcss-strip-inline-comments"),
    require('postcss-smart-import'),
    require("postcss-sassy-mixins"),
    require('precss'),
    require('autoprefixer'),
    require("postcss-utilities"),
    require("lost"),
    require("postcss-media-minmax"),
    require("postcss-font-magician")({
      custom: {
        "FontAwesome": {
          variants: {
            normal: {
              900: {
                url: {
                  eot: initial_path + "fonts/font-awesome-4.7.0/fontawesome-webfont.eot",
                  ttf: initial_path + "fonts/font-awesome-4.7.0/fontawesome-webfont.ttf",
                  woff: initial_path + "fonts/font-awesome-4.7.0/fontawesome-webfont.woff",
                  woff2: initial_path + "fonts/font-awesome-4.7.0/fontawesome-webfont.woff2",
                  svg: initial_path + "fonts/font-awesome-4.7.0/fontawesome-webfont.svg"
                }
              }
            }
          }
        },
        "RobotoX": {
          variants: {
            normal: {
              300: {
                url: {
                  eot: initial_path + "fonts/roboto/Roboto-Regular-webfont.eot",
                  ttf: initial_path + "fonts/roboto/Roboto-Regular-webfont.ttf",
                  woff: initial_path + "fonts/roboto/Roboto-Regular-webfont.woff",
                  svg: initial_path + "fonts/roboto/Roboto-Regular-webfont.svg"
                }
              },
              500: {
                url: {
                  eot: initial_path + "fonts/roboto/Roboto-Medium-webfont.eot",
                  ttf: initial_path + "fonts/roboto/Roboto-Medium-webfont.ttf",
                  woff: initial_path + "fonts/roboto/Roboto-Medium-webfont.woff",
                  svg: initial_path + "fonts/roboto/Roboto-Medium-webfont.svg"
                }
              },
              700: {
                url: {
                  eot: initial_path + "fonts/roboto/Roboto-Bold-webfont.eot",
                  ttf: initial_path + "fonts/roboto/Roboto-Bold-webfont.ttf",
                  woff: initial_path + "fonts/roboto/Roboto-Bold-webfont.woff",
                  svg: initial_path + "fonts/roboto/Roboto-Bold-webfont.svg"
                }
              }
            }
          }
        }
      }
    })
  ]
}