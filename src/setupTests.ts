import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Asegúrate de que el objeto global esté disponible en este contexto
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
