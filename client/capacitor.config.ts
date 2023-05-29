import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'client.com.br',
  appName: 'client',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
