import { config as baseConfig } from '@wdio/sync';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:platformVersion': '11',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './app/sauce-demo.apk',
    'appium:autoGrantPermissions': true
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
    }]
  ],
  services: ['appium'],
  mochaOpts: {
    timeout: 60000
  }
};