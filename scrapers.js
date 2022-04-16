const puppeteet=require('puppeteer');
async function scrapeReport(url){
    const browser= await puppeteet.launch();
    const page=await browser.newPage();
    await  page.goto(url);
    // const [el]=await page.$x('/html/body/div[2]/div[2]/div/div/div[1]/img')
    // const src=await el.getProperties('src');
    // const srcTxt=src.jsonValue();
  console.log(page.jsonValue())

}
scrapeReport('http://172.25.95.42/')