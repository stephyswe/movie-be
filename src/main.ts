import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')

	if (process.env.NODE_ENV === 'development') {
		const corsOptions: CorsOptions = {
			origin: 'http://localhost:3000', // Replace with the appropriate origin URL for development
			methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
			allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed request headers
			credentials: true, // Enable credentials (e.g., cookies, authorization headers) to be sent in cross-origin requests
		}
	}
	await app.listen(process.env.PORT)
}
bootstrap()
