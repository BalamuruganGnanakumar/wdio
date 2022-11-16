const ElementUtil = require('../Util/element.util')
class newsymptomPage{
    get DataManagerBtn() { return $("#navbarDropdownMenuLink")}
    get symconLnk() { return $("//a[@href='/symptoms-manager']")}
    get addsymconBtn() { return $("//button[@class='btn btn-custom-2 mt-3 float-right btn-border']")}
    get addTypesym() { return $("//option[@value='Symptom']")}
    get addCodesym() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-symptoms-form/form/div/div/div[2]/div/input")}
    get addNamesym() { return $("//input[@placeholder='Name']")}
    get addDescsym() { return $("//input[@placeholder='Description']")}
    get savesymBtn() { return $("//button[@class='btn btn-custom-1 btn-primary']")}
    get menumapconsymser() { return $("/html/body/app-root/div[1]/div/div[2]/div[1]/nav/div/ul/li/ul/li[9]/ul/li[1]/a")}
    get mapprovidersBtn() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[2]/div/div/table/tbody/tr[1]/td/mat-accordion/mat-expansion-panel/div/div/div/app-provider-list/div[1]/div[1]")}
    get selectCondrpdwn() { return $("//option[@value='Symptom']")}
    get checkboxselectsym() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[2]/div/div/table/tbody/tr[1]/td/mat-accordion/mat-expansion-panel/div/div/div/app-provider-list/div[3]/div/mat-table/tr/th[1]/mat-checkbox/label/span[1]")}
    //option[@value='Condition']
    //   return ElementUtil.doSetValue(this.providerIdInput,'593923') 
    eleDataManagerBtn() { ElementUtil.doClick(this.DataManagerBtn) }
	elesymconLnk(){ ElementUtil.doClick(this.symconLnk) }
    eleaddsymconBtn() { ElementUtil.doClick(this.addsymconBtn) }
    eleaddTypesym(){ 
        //ElementUtil.doClick(this.addTypesym) 
        $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-symptoms-form/form/div/div/div[1]/div/select").selectByVisibleText('Symptom');
    }
    eleaddCodesym(){ return ElementUtil.doSetValue(this.addCodesym,'H40') }
    eleaddNamesym(){ return ElementUtil.doSetValue(this.addNamesym,'Glaucoma') }
    eleaddDescsym(){ return ElementUtil.doSetValue(this.addDescsym,'Primary Open Angle Glaucoma') }
    //elesaveconBtn() { ElementUtil.doClick(this.saveBtn) }
    //await $("=text").click()
    elesavesymBtn() { ElementUtil.doClickButton(this.savesymBtn) }
}
module.exports = new newsymptomPage()
