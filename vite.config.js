import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<react_day7>/', // Replace <repository-name> with your repo name
});
