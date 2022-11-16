const ElementUtil = require('../Util/element.util')
const SD = require("../Data/secretData")
class loginPage{

  get username() { return $('#userNametxt')}
  get password() { return $('//*[@id="userPwdtxt"]')}
  get submitBtn() { return $('//*[@id="loginform"]/div[3]/div/button')}
	get contBtn() { return $("//button[@type='submit']")}
	get appOpndwn() { return $("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[3]/mat-select/div/div[2]")}
	get locOpn() { return $("/html/body/div[1]/div[2]/div/div/div/mat-option/span")}
	get appOpndwn() { return $("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[4]/mat-select/div/div[2]")}
	get appOpn() { return $("/html/body/div[1]/div[2]/div/div/div/mat-option/span")}

	

    eleclick(){ ElementUtil.doClick(this.MSbtn) }
	elesetvalueUN(){  return ElementUtil.doSetValue(this.username,SD.username) }
	elesetvaluePW(){  return ElementUtil.doSetValue(this.password,SD.password) }
	subBtn(){
		ElementUtil.doIsclickable(this.submitBtn)
		ElementUtil.doClick(this.submitBtn)
	}
	eleclickcontBtn(){
		ElementUtil.doIsclickable(this.contBtn)
		ElementUtil.doClick(this.contBtn)
	}
	eleproviderrepo(){
		$("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[3]/mat-select/div/div[2]").click()
        $("/html/body/div[1]/div[2]/div/div/div/mat-option/span").click()
        $("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[4]/mat-select/div/div[2]").click()
        $("/html/body/div[1]/div[2]/div/div/div/mat-option/span").click()
		$(this.contBtn).click()
		//ElementUtil.doClick(this.contBtn)
	}
	
	eleclicklocOpndwn(){  ElementUtil.doClick(this.locOpndwn) }
	eleclicklocOpn(){  ElementUtil.doClick(this.locOpn) }
	eleclickappOpndwn(){  ElementUtil.doClick(this.appOpndwn) }
	eleclickappOpn(){  ElementUtil.doClick(this.appOpn)	}

	doGetPageTitle(){
		return ElementUtil.doGetPageTitle()
	}
	eleplatformsearch(){
		ElementUtil.doClick($("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[3]/mat-select/div/div[2]"))
        ElementUtil.doClick($("/html/body/div[1]/div[2]/div/div/div/mat-option/span"))
        ElementUtil.doClick($("/html/body/app-root/div/app-login/div/div/div[2]/div[1]/div[2]/div/form/div[4]/mat-select/div/div[2]"))
        ElementUtil.doClick($("/html/body/div[1]/div[2]/div/div/div/mat-option/span"))
	}
}
module.exports = new loginPage()
