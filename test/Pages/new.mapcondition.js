const ElementUtil = require('../Util/element.util')
class newmapconditionPage{
    get DataManagerBtn() { return $("#navbarDropdownMenuLink")}
    get menumapper() { return $("/html/body/app-root/div[1]/div/div[2]/div[1]/nav/div/ul/li/ul/li[9]/a")}
    get menumapconsymserpromap() { return $("/html/body/app-root/div[1]/div/div[2]/div[1]/nav/div/ul/li/ul/li[9]/ul/li[1]/a")}
    
    get mapprovidersBtn() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[2]/div/div/table/tbody/tr/td/mat-accordion/mat-expansion-panel/div/div/div/app-provider-list/div[1]/div[1]")}
    get selectCondrpdwn() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[1]/form/div/select")}
    get selectCondrpdwnOpn() { return $("/html/body/app-root/div[2]/app-symptoms-to-provider-mapper/div/div/div[1]/form/div/select/option[1]")}
    get checkboxselectcon() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-map-provider-modal/div[2]/div[2]/div/mat-table/tr[2]/td[1]/mat-checkbox/label/span[1]")}

    get mapprovidersmtBtn() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-map-provider-modal/div[2]/div[1]/div/div")}


    elemenumapconsymserpromap() { 
        ElementUtil.doClick(this.DataManagerBtn)
        ElementUtil.doClick(this.menumapper) 
        ElementUtil.doClick(this.menumapconsymserpromap)
    }
    eleselectCondrpdwn() { 
        ElementUtil.doClick(this.selectCondrpdwn) 
        ElementUtil.doClick(this.selectCondrpdwnOpn)
    }
    elemapprovidersBtn() {ElementUtil.doClick(this.mapprovidersBtn)}
    elecheckboxselectcon() {ElementUtil.doClick(this.checkboxselectcon)}
    elemapprovidersmtBtn() { ElementUtil.doClick(this.mapprovidersmtBtn)}

}
module.exports = new newmapconditionPage()
