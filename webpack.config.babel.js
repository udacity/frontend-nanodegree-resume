import {resolve} from 'path';

module.exports = env =>{
    return({
        context: resolve(__dirname, 'js'),
        entry:[
            './app.js',
        ],
        output:{
            path: resolve('dist'),
            filename:'app.bundle.js',
            publicPath:'/dist'
        },
        module:{
            rules:[
                {
                    test:/\.jsx?$/,
                    exclude:/node_modules/,
                    loader:'babel-loader'
                },
                {
                    test:/\.css$/,
                    use:[
                        'style-loader',
                        {
                            loader:'css-loader',
                            options:{
                                minimize:true
                            }
                        },
                        'postcss-loader'
                    ]
                },
                {
                    test:/\.(jpeg|png|svg|gif)$/,
                    use:[
                        {
                            loader:'file-loader',
                            options:{}
                        }
                    ]
                }
            ]
        },
        devServer:{
            compress:true,
            open:true
        }
    });
}