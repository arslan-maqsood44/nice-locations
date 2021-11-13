import addJestHbsExtension from 'jest-hbs-extension';
import { ConfigService } from '../src/config/config.service';

const configService = new ConfigService();


addJestHbsExtension(configService.get('templates.path'));
