
const logpage = require("../Pages/login.page");
const newProvider = require("../Pages/new.provider");
const newCondition = require("../Pages/new.condition");
const newSymptom = require("../Pages/new.symptom");
const newMapcondition = require("../Pages/new.mapcondition");
const newMapsymptom = require("../Pages/new.mapsymptom");

//const addplan = require("../Pages/planselect.page")
//import logpage from ('../Pages/login.page')
describe('R1 Application', () => {
    it('verify Login Page', async function(){
		await browser.url('https://sci-admin-rc.azurewebsites.net/login');
        await browser.maximizeWindow()
        await logpage.elesetvalueUN()
        await logpage.elesetvaluePW()
        await logpage.subBtn()
        await browser.pause(1000)
	})
    it('Provider Repository', async function(){  
        //await logpage.eleplatformsearch()
        //await logpage.eleproviderrepo()
        await $("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[3]/mat-select/div/div[2]").click()
        await $("/html/body/div[1]/div[2]/div/div/div/mat-option/span").click()
        await browser.pause(1000)
        await $("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[4]/mat-select/div/div[2]/div").click()
        await $("/html/body/div[1]/div[2]/div/div/div/mat-option/span").click()
        await browser.pause(1000)
        await logpage.eleclickcontBtn()
	})
    it('Add New Provider', async function(){
        await newProvider.eleaddBtnclick()
        await browser.pause(1000)
        await newProvider.eleplatformRadio()
        await browser.pause(6000)
        await newProvider.elePlatSelBox()
        await browser.pause(1000)
        await newProvider.eleplatformValueOpn()
        await browser.pause(1000)
        await newProvider.eleproviderIdInput()
        await browser.pause(1000)
        await newProvider.elesearchProviderDbBtn()
        //await browser.pause(25000)
        await $("//button[@class='btn btn-custom-1 btn-primary']").waitForDisplayed({ timeout: 25000 });
        await newProvider.eleproviderCancelBtn()
        
    })
    it('Adding a Condition', async function(){
        //await $("//div[@class='jumbo-menu-dropdown']").click()
        await newCondition.eleDataManagerBtn()
        await browser.pause(1000)
        await newCondition.elesymconLnk()
        await browser.pause(1000)
        await newCondition.eleaddsymconBtn()
        await browser.pause(1000)
        await newCondition.eleaddTypecon()
        await browser.pause(1000)
        await newCondition.eleaddCodecon()
        await browser.pause(1000)
        await newCondition.eleaddNamecon()
        await browser.pause(1000)
        await newCondition.eleaddDesccon()
        //newCondition.elesaveconBtn()
        await $("//button[@type='submit']").click()
        //await $("//button[@class='btn btn-custom-1 btn-primary']").click()
        await browser.pause(3000)

    })
    it('Adding a Symptom', async function(){
        //await $("//div[@class='jumbo-menu-dropdown']").click()       
        await newSymptom.eleDataManagerBtn()
        await browser.pause(1000)
        await newSymptom.elesymconLnk()
        await browser.pause(1000)
        //await browser.pause(3000)
        await newSymptom.eleaddsymconBtn()
        await browser.pause(1000)
        await newSymptom.eleaddTypesym()
        await browser.pause(1000)
        //await browser.pause(2000)
        await newSymptom.eleaddCodesym()
        await browser.pause(1000)
        await newSymptom.eleaddNamesym()
        await browser.pause(1000)
        await newSymptom.eleaddDescsym()
        await browser.pause(1000)
        //newCondition.elesaveconBtn()
        await $("//button[@type='submit']").click()
        //await $("//button[@class='btn btn-custom-1 btn-primary']").click()
        await browser.pause(3000)

    })
    it('Mapping  Condition to Provider', async function(){
        await newMapcondition.elemenumapconsymserpromap()
        await browser.pause(1000)
        await newMapcondition.eleselectCondrpdwn()
        await browser.pause(1000)
        await newMapcondition.elemapprovidersBtn()
        await browser.pause(1000)
        await newMapcondition.elecheckboxselectcon()
        await browser.pause(1000)
        await newMapcondition.elemapprovidersmtBtn()
        await browser.pause(3000)
    })
    it('Mapping  Symptom to Provider', async function(){
        await newMapsymptom.elemenumapconsymserpromap()
        await browser.pause(1000)
        await newMapsymptom.eleselectSymdrpdwn()
        await browser.pause(1000)
        await newMapsymptom.elemapprovidersBtn()
        await browser.pause(1000)
        await newMapsymptom.elecheckboxselectsym()
        await browser.pause(1000)
        await newMapsymptom.elemapprovidersmtBtn()
        await browser.pause(3000)
    })
    it('Removing mapping', async function(){
        await newCondition.eleDataManagerBtn()
        await browser.pause(2000)
        await newCondition.elesymconLnk()
        await browser.pause(2000)
        await $("/html/body/app-root/div[2]/app-symptoms-manager/div/app-symptoms/div[2]/table/tbody/tr[2]/td[7]/button/mat-icon").click()
        await browser.pause(2000)
        await $("//button[@class='btn btn-block btn-danger']").click()
        await browser.pause(2000)
        await $("/html/body/app-root/div[2]/app-symptoms-manager/div/app-symptoms/div[2]/table/tbody/tr[1]/td[7]/button/mat-icon").click()
        await browser.pause(2000)
        await $("//button[@class='btn btn-block btn-danger']").click()
        await browser.pause(4000)


    })
    
});