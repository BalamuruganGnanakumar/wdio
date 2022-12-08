//const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');
const logindata = require("../Data/vision_rule1");
const UTCTIMESTAMP = Math.floor((new Date()).getTime() / 1000).toString()
describe('Moonshot- Amazon Vision Plan', () => {
    it('Microsoft Login', async () => {
        await browser.url('https://msqabenefitsinternalsa.z13.web.core.windows.net/#/internalDashboard');
        //await browser.maximizeWindow()
		await browser.pause(10000)
        //CLick on Microsoft Sign in
        await $("/html/body/app-root/app-login/div/div/div/div[2]/div/div[1]/button").click()
        await browser.pause(5000)
        //Sign in to your account
        await browser.switchWindow('Sign in to your account')
        const username=await $("//input[@name='loginfmt']")
        await username.setValue(logindata.username)
        await $("//input[@id='idSIButton9']").click();
        await browser.pause(5000)
        const password=await $("//input[@name='passwd']")
        await password.setValue(logindata.password)
        await $("//input[@id='idSIButton9']").click();
        await browser.pause(1000)
        await $("//input[@id='idSIButton9']").click();
        await browser.pause(3000)
        //BaseApp
        await browser.switchWindow('BaseApp')
        //browser.refresh();
        await browser.pause(20000)
        const SESID1 = await browser.getWindowHandle();
        console.log('PAGE1 SESSION ID:----------------',SESID1)
    })

    // it('Select Amazon as Client', async () => {
    //     //Select Amazon as Plan
    //     //await browser.pause(8000)
    //     browser.refresh();
    //     await $("/html/body/app-home/main/article/div/header/div[1]/div[2]/div[1]/div/div/div").click();
    //     await $("//input[@placeholder='Search Clients']").click();
    //     await browser.pause(2000)
    //     const clientsearch=await $("//input[@placeholder='Search Clients']")
    //     await clientsearch.setValue("amazon")

    //     await browser.pause(2000)
    //     await $("/html/body/app-home/main/article/div/header/div[1]/div[2]/div[2]/div/div[2]/div[3]/a[3]").click();
    //     await browser.pause(10000)
    //     const SESIDS = await browser.getWindowHandles();
    //     console.log('ALLPAGES SESSION ID:----------------',SESIDS)
    // })

    // it('Add Plan for Amazon', async () => {
    //     //Add Plan for Amazon
    //     const SESIDS = await browser.getWindowHandles();
    //     const SESID2 = SESIDS[1]
    //     console.log('ALLPAGES SESSION ID:----------------',SESIDS)
    //     console.log('PAGE2 SESSION ID:----------------',SESID2)
    //     await browser.switchToWindow(SESID2);
    //     await $("/html/body/app-home/main/article/div/div/app-dashboard/div/div/section[1]/button").click();
    //     await browser.pause(2000)
    //     const plansearchkey=await $("//input[@name='planSearchKey']")
    //     await plansearchkey.setValue("vision")
    //     //await browser.pause(2000)
    //     await $("/html/body/div/div[2]/div/mat-dialog-container/app-plans-list/div/div[2]/div/a/span[2]").click();
    //     await browser.pause(2000)
    // })

    // it('Filling in the Vision Form Amazon Vision', async () => {
    //     //Add Plan for Amazon
    //     const POLICYID = "POLICY_"+UTCTIMESTAMP;
    //     const POLICYNAME = "WDIO_AUTO_"+UTCTIMESTAMP;
    //     const PLANID = "PLANID_"+UTCTIMESTAMP;
    //     const REGIONSEL = "REG"+UTCTIMESTAMP;
    //     const CLASSSEL = "CLS"+UTCTIMESTAMP;  
    //     // INPUT POLICY ID
    //     await browser.pause(1000)
    //     await $("//button[@id='btn_submit']").click();
    //     await $("//input[@formcontrolname='policy_Number']").click();
    //     await browser.saveScreenshot('./Mandatory_fields_Missing_screenshot.png');
    //     await $("//input[@formcontrolname='policy_Number']").setValue(POLICYID)
    //     await browser.pause(1000)
    //     // INPUT POLICY NAME
    //     await $("//input[@id='plan_Name']").setValue(POLICYNAME)
    //     await browser.pause(1000)
    //     // SELECT DOCUMENT CATEGORY
    //     const DOCUMENTCATEGORY = await $("//select[@formcontrolname='category']")
    //     //await DOCUMENTCATEGORY.selectByVisibleText("Carriers & Plans");
    //     await DOCUMENTCATEGORY.selectByVisibleText(logindata.DOC_CAT);
    //     await browser.pause(1000)
    //     // SELECT SECONDARY CATEGORY
    //     const SECDOCUMENTCATEGORY = await $("//select[@formcontrolname='secondary_Document_Category']")
    //     //await SECDOCUMENTCATEGORY.selectByVisibleText("Employee Communications");
    //     await SECDOCUMENTCATEGORY.selectByVisibleText(logindata.SEC_DOC_CAT);
    //     await browser.pause(1000)
    //     // SELECT GENERIC DOCUMENT NAME
    //     const GENDOCUMENTNAME = await $("//select[@formcontrolname='generic_Document_Name']")
    //     //await GENDOCUMENTNAME.selectByVisibleText("Benefit Summary");
    //     await GENDOCUMENTNAME.selectByVisibleText(logindata.GEN_DOC_CAT);
    //     await browser.pause(1000)
    //     // SELECT BUSINESS LEVEL
    //     const BUSINESSLEVEL = await $("//select[@formcontrolname='business_Level']")
    //     //await BUSINESSLEVEL.selectByVisibleText("Plan Level");
    //     await BUSINESSLEVEL.selectByVisibleText(logindata.BUS_LEVEL);
    //     await browser.pause(1000)
    //     //await input.setValue('test123');
    //     // SELECT CARRIER
    //     const CARRIERNAME = await $("//select[@formcontrolname='carrier']")
    //     //await CARRIERNAME.selectByVisibleText('Aetna');
    //     await CARRIERNAME.selectByVisibleText(logindata.CARRIER);
    //     await browser.pause(1000)
    //     // INPUT PLAN ID
    //     await $("//input[@formcontrolname='plan_Id']").setValue(PLANID)
    //     await browser.pause(1000)
    //     // DATE INPUT
    //     await $("/html/body/app-home/main/article/div/div/app-dynamic-forms/form/div[1]/div/div[11]/div/mat-form-field/div/div[1]/div[2]").click();
    //     await $("/html/body/div[1]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-month-view/table/tbody/tr[3]/td[6]").click();
    //     const CALDATE = await $("//input[@formcontrolname='renewalDate']").getValue() 
    //     await browser.pause(1000)
        
    //     // PLAN STATUS 
    //     const PLANSTATUS = await $("//select[@formcontrolname='planStatus']")
    //     //await PLANSTATUS.selectByVisibleText('New');    
    //     await PLANSTATUS.selectByVisibleText(logindata.PLAN_STATUS); 
    //     await browser.pause(1000)
    //     // ISSUING LOCATION 
    //     const ISSULOCATION = await $("//select[@formcontrolname='issuingLocation']")
    //     //await ISSULOCATION.selectByVisibleText('MI');  
    //     await ISSULOCATION.selectByVisibleText(logindata.ISSUE_LOC);    
    //     await browser.pause(1000)
    //     // INPUT REGION SELECT
    //     await $("//input[@formcontrolname='region_Selector']").setValue(REGIONSEL)
    //     await browser.pause(1000)
    //     // INPUT CLASS SELECT
    //     await $("//input[@formcontrolname='class_Selector']").setValue(CLASSSEL)
    //     await browser.pause(1000)
    //     await $("//input[@formcontrolname='display_Name']").click();
    //     //DISPLAY NAME
    //     const DISPLAYNAME = await $("//input[@formcontrolname='display_Name']").getValue()
    //     // INPUT NAME    
    //     const CARRIERNAME_I= await $("//select[@formcontrolname='carrier']").getValue()
    //     const PLANTYPE = await $("//input[@formcontrolname='plan']").getValue()
    //     const GENDOCUMENTNAME_I= await $("//select[@formcontrolname='generic_Document_Name']").getValue()
    //     const DISPLAYYEAR = CALDATE.substr(6, 10);
    //     const INPUTNAME = CARRIERNAME_I+" "+PLANTYPE+" "+GENDOCUMENTNAME_I+" "+REGIONSEL+" "+CLASSSEL+" "+DISPLAYYEAR+" "
    //     var result
    //     if ( DISPLAYNAME == INPUTNAME ){
    //         result = "CASE SCENARIO VERIFIED - TEST PASSED";
    //      }
    //      if ( DISPLAYNAME != INPUTNAME ){
    //         result = "CASE SCENARIO VERIFIED - TEST FAILED !";
    //      }  
    //     console.log("  INPUTNAME:",INPUTNAME);
    //     console.log("DISPLAYNAME:",DISPLAYNAME);
    //     console.log(result);
    //     await $("//button[@id='btn_submit']").click();
    //     await browser.pause(3000)
    //     await browser.saveScreenshot('./Draft_saved_screenshot.png');
    //     await browser.pause(2000)
    // })

    // it('Update and Activate Plan for Amazon', async () => {
    //     //Edit Plan for Amazon
    //     await $("/html/body/app-home/main/article/div/div/app-dashboard/div/aside/div/app-latest-activity/div/div/div[1]/div[2]/div[1]/a").click();
    //     await browser.pause(2000)
    //     await $("/html/body/app-home/main/article/div/div/app-view-plan-details/div/app-plan-summaries/div/section[2]/form/div[1]/section/div/a").click();
    //     await browser.pause(2000)
    //     // COMMISSION 
    //     //await $("//input[@formcontrolname='commission']").setValue(10)
    //     await $("//input[@formcontrolname='commission']").setValue(logindata.COMMISSION)
    //     await browser.pause(2000)
    //     await $("//button[@id='btn_submit']").click();
    //     await browser.pause(2000)
    //     await browser.saveScreenshot('./Update_saved_screenshot.png');
    // })   

});


