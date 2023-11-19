module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  await require('./loadCookies')(browserContext, scenario);
  await page.goto(scenario.url)
  await page.type('input[name="username"]', 'cesaralej1392@hotmail.com');
  await page.type('input[name="password"]', 'Alejandro1392*');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
};
