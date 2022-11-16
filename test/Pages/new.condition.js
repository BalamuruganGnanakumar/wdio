const ElementUtil = require('../Util/element.util')
class newconditionPage{
    get DataManagerBtn() { return $("#navbarDropdownMenuLink")}
    get symconLnk() { return $("//a[@href='/symptoms-manager']")}
    get addsymconBtn() { return $("//button[@class='btn btn-custom-2 mt-3 float-right btn-border']")}
    get addTypecon() { return $("//option[@value='Condition']")}
    get addCodecon() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-symptoms-form/form/div/div/div[2]/div/input")}
    get addNamecon() { return $("//input[@placeholder='Name']")}
    get addDesccon() { return $("//input[@placeholder='Description']")}
    get saveconBtn() { return $("//button[@class='btn btn-custom-1 btn-primary']")}
    get menumapconsymser() { return $("/html/body/app-root/div[1]/div/div[2]/div[1]/nav/div/ul/li/ul/li[9]/ul/li[1]/a")}
    get mapprovidersBtn() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[2]/div/div/table/tbody/tr[1]/td/mat-accordion/mat-expansion-panel/div/div/div/app-provider-list/div[1]/div[1]")}
    get selectCondrpdwn() { return $("//option[@value='Condition']")}
    get checkboxselectsym() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[2]/div/div/table/tbody/tr[1]/td/mat-accordion/mat-expansion-panel/div/div/div/app-provider-list/div[3]/div/mat-table/tr/th[1]/mat-checkbox/label/span[1]")}
    //option[@value='Condition']
    //   return ElementUtil.doSetValue(this.providerIdInput,'593923') 
    eleDataManagerBtn() { ElementUtil.doClick(this.DataManagerBtn) }
	elesymconLnk(){ ElementUtil.doClick(this.symconLnk) }
    eleaddsymconBtn() { ElementUtil.doClick(this.addsymconBtn) }
    eleaddTypecon(){ ElementUtil.doClick(this.addTypecon) }
    eleaddCodecon(){ return ElementUtil.doSetValue(this.addCodecon,'S81') }
    eleaddNamecon(){ return ElementUtil.doSetValue(this.addNamecon,'Leg Fracture') }
    eleaddDesccon(){ return ElementUtil.doSetValue(this.addDesccon,'fracture of left lower leg') }
    //elesaveconBtn() { ElementUtil.doClick(this.saveBtn) }
    //await $("=text").click()
    elesaveconBtn() { ElementUtil.doClickButton(this.saveconBtn) }
}
module.exports = new newconditionPage()
