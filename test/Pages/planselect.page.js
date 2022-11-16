const ElementUtil = require('../Util/element.util')
class planselectPage{
    //get JTC() { return $("//span[@class='ng-star-inserted']") }
	get addPlanbtn() { return $("/html/body/app-home/main/article/div/div/app-dashboard/div/div/section[1]/button/span")}
	get searchclient() { return $("//input[@placeholder='Search Clients']")}
    get Amazon() { return $("/html/body/app-home/main/article/div/header/div[1]/div[2]/div[2]/div/div[2]/div[3]/a[3]/span")}
	//get Amazon() { return $("//span[text()='amazon']")}
	get searchplaninput() { return $(" //input[@name='planSearchKey']")}
	get VISION_PLAN() { return $("//span[text()='Select Plan']") }
    
	
	
	addPlanclick(){
		ElementUtil.doClick(this.addPlanbtn)
		console.log("passed to Util Click for AddPlan_Click")
	}
	selectplanform(){
		ElementUtil.doClick(this.VISION_PLAN)
		console.log("passed to Util Click for AddPlanform_Click")
	}
	
	focusnewtab(){
		const SESIDS = browser.getWindowHandles();
		const win1 = SESIDS.value[1];
		console.log("WINDOWS1 SESSION ID:",win1)
		browser.switchToWindow(win1);
	 }
	 searchPlan(){
		ElementUtil.doIsDisplayed(this.searchplaninput)
		return ElementUtil.doSetValue(this.searchplaninput,'vision')
	 }


	//Un-used
	checkeledisplay(){
		ElementUtil.doIsDisplayed(this.Amazon)
		console.log("passed to Util check Amazon_isDisplayed")
	}


	setvaluesearchclient(){
		return ElementUtil.doSetValue(this.searchclient,'amazon')
	}
	clicksearchclient(){
		ElementUtil.doClick(this.searchclient)
		console.log("SELECT CLIENT SEARCH INPUT AREA")
	}
	clickAmazon(){
		ElementUtil.doClick(this.Amazon)
		console.log("Amazon Client Clicked")
	}
	//const selectBox = await $('#selectbox');
	//await selectBox.selectByVisibleText('cuatro');

	 focusnewtab(){
		const SESIDS = browser.getWindowHandles();
		const win1 = SESIDS.value[1];
		console.log("WINDOWS1 SESSION ID:",win1)
		browser.switchToWindow(win1);
	 }
	 focusmaintab(){
		const ALLWIN = browser.getWindowHandles();
		const win0 = ALLWIN.value[0];
		console.log("WINDOWS1 SESSION ID:",win0)
		browser.switchToWindow(win0);
	 }

	elesetvaluePW(){
		
		return ElementUtil.doSetValue(this.password,'Verithanam@1994')
	}
	subBtn(){

		ElementUtil.doClick(this.submitBtn)
	}
	dologin(emailid,pwd){
		browser.switchWindow('Sign in to your account')
		ElementUtil.doSetValue(this.username,'aprasad@wsandco.com')
		ElementUtil.doClick(this.submitBtn)
		ElementUtil.doSetValue(this.password,'Verithanam@1994')
		ElementUtil.doClick(this.submitBtn)
		ElementUtil.doClick(this.submitBtn)
	}
	doGetPageTitle(){
		return ElementUtil.doGetPageTitle()
	}

}
module.exports = new planselectPage()