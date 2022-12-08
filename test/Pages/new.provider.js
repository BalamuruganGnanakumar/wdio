const ElementUtil = require('../Util/element.util')
class newProviderPage{

    get addBtn() { return $("//button[@title='Click here to add new provider data']")}
    //SELECT RADIO 
    get platformRadio() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-add-new-provider/mat-tab-group/div/mat-tab-body[1]/div/app-find-provider/div[1]/mat-radio-group/mat-radio-button[2]")}

    get platformDwn() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-add-new-provider/mat-tab-group/div/mat-tab-body[1]/div/app-find-provider/div[2]/div[1]/div[1]/mat-select/div")}
    get platformcerner() { return $("/html/body/div[1]/div[4]/div/div/div/mat-option[3]")}
    get platformdropdown() { return $("//mat-select[@id='mat-select-34']")}
    get platformValueOpn() { return $("/html/body/div[1]/div[4]/div/div/div/mat-option[3]")}
    get providerIdInput() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-add-new-provider/mat-tab-group/div/mat-tab-body[1]/div/app-find-provider/div[2]/div[1]/div[2]/input")}
    get searchProviderDbBtn() { return $("//button[@class='mat-focus-indicator container-color mat-raised-button mat-button-base']")}
    get providerCancelBtn() { return $("/html/body/div[1]/div[2]/div/mat-dialog-container/app-add-new-provider/div/button[1]")}
    //

	eleaddBtnclick(){ ElementUtil.doClick(this.addBtn) }
    eleplatformRadio(){ ElementUtil.doClick(this.platformRadio) }
    elePlatSelBox(){ ElementUtil.doClick(this.platformDwn) }
    eleplatformcerner() { ElementUtil.doClick(this.platformcerner)}
    eleplatformValueOpn() { 
        $("/html/body/div[1]/div[4]/div/div/div/mat-option[3]/span").click()
     }
    //elePlatformdropdown() { this.PlatSelBox.selectByVisibleText("Cerner") }
    
    eleproviderIdInput(){ return ElementUtil.doSetValue(this.providerIdInput,'593923') }
    elesearchProviderDbBtn(){ ElementUtil.doClick(this.searchProviderDbBtn) }
    eleproviderCancelBtn() { 
        //ElementUtil.doIsDisplayed($("//button[@class='btn btn-custom-1 btn-primary']"))
        //ElementUtil.doIsDisplayed($("/html/body/div[1]/div[2]/div/mat-dialog-container/app-add-new-provider/div/button[2]")).waitForExist({ timeout: 15000 });
        //$("/html/body/div[1]/div[2]/div/mat-dialog-container/app-add-new-provider/div/button[2]").waitForExist({ timeout: 15000 });
        //$("//button[@class='btn btn-custom-1 btn-primary']").waitForDisplayed({ timeout: 25000 });
        ElementUtil.doClick(this.providerCancelBtn)
    }

}
module.exports = new newProviderPage()

/////////////////////////////////////////////////////////////////////////
//     eleclick(){ ElementUtil.doClick(this.MSbtn) }
// 	elesetvalueUN(){  return ElementUtil.doSetValue(this.username,'rkz63828@mzico.com') }
// 	elesetvaluePW(){  return ElementUtil.doSetValue(this.password,'Sumaiya@2022') }
// 	subBtn(){
// 		ElementUtil.doIsclickable(this.submitBtn)
// 		ElementUtil.doClick(this.submitBtn)
// 	}
// 	eleclickcontBtn(){
// 		ElementUtil.doIsclickable(this.contBtn)
// 		ElementUtil.doClick(this.contBtn)
// 	}
	
// 	eleclicklocOpndwn(){  ElementUtil.doClick(this.locOpndwn) }
// 	eleclicklocOpn(){  ElementUtil.doClick(this.locOpn) }
// 	eleclickappOpndwn(){  ElementUtil.doClick(this.appOpndwn) }
// 	eleclickappOpn(){  ElementUtil.doClick(this.appOpn)	}

// 	doGetPageTitle(){
// 		return ElementUtil.doGetPageTitle()
// 	}

