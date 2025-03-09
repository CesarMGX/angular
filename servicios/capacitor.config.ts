import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Servicios',
  webDir: 'www',
  plugins: {
    Camera: {
      allowEditing: true,
      resultType: 'base64',
    },
  },
};

export default config;
