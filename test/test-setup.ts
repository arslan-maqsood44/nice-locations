import addJestHbsExtension from 'jest-hbs-extension';
import { resolve } from 'path';

addJestHbsExtension(resolve(__dirname, '..', 'views'));
