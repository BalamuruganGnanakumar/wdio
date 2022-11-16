const ElementUtil = require('../Util/element.util')
class navigatePage{
    //get JTC() { return $("//span[@class='ng-star-inserted']") }
	get JTC() { return $("/html/body/app-home/main/article/div/header/div[1]/div[2]/div[1]/div/div/span")}
	get searchclient() { return $("/html/body/app-home/main/article/div/header/div[1]/div[2]/div[2]/div/div[2]/div[2]/input")}
	//get searchclient() { return $("//input[@placeholder='Search Clients']")}
	
    get Amazon() { return $("/html/body/app-home/main/article/div/header/div[1]/div[2]/div[2]/div/div[2]/div[3]/a[2]")}

    JTCclick(){
		
		ElementUtil.doClick(this.JTC)
		console.log("passed to Util Click for JTC_Click")
	}
	JTCisdisplayed(){
		ElementUtil.doIsDisplayed(this.JTC)
		console.log("passed to Util Click for JTC_isDisplayed")
	}
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
module.exports = new navigatePage()