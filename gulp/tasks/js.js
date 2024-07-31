import webpack from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber( //обработка ошибок dj время компиляции
			app.plugins.notify.onError({ //уведомление о ошибках
				title: "JS",
				message: "Error: <%= error.message %>"
			})
		))

		.pipe(app.plugins.fileInclude())
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js)) //перенос в папку назначения созданные и обработанные файлы
		.pipe(app.plugins.browsersync.stream()) //обновляем браузер
}