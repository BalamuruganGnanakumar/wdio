class ElementUtil{

	doClick(element){
		browser.waitUntil(() => {
			return $(element).isExisting();
		});
		element.waitForExist({ timeout: 25000 });
		element.isDisplayed()
		element.isClickable()
		element.click()
		console.log("CLICKED", element)
	}
	doClickButton(element) {
		element.click()
		console.log("Button Clicked")
	}

	doSetValue(element, value){
		browser.waitUntil(() => {
			return $(element).isExisting();
		});
		element.waitForExist({ timeout: 25000 });
		console.log("VALUE SET", value)
		return element.setValue(value)
	}
	doSelectValue(element, value){
		browser.waitUntil(() => {
			return $(element).isExisting();
		});
		element.waitForExist({ timeout: 25000 });
		console.log("VALUE SET", value)
		return element.selectByIndex(value)
	}


	doGetText(element, value){
		element.waitForDisplayed()
		return element.getText(value)
	}
	doIsDisplayed(element){
		browser.waitUntil(() => element.waitForDisplayed())
		console.log("DISPLAYED", element)
		return element.isDisplayed()
	}
	doGetPageTitle(){
		return browser.getTitle()
	}
	doIsclickable(element){
		element.isClickable()
        // wait for element to be clickable
		browser.waitUntil(() => element.isClickable())
	}


}
module.exports = new ElementUtil()
